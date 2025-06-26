/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Observable } from 'rxjs';
import { Request } from 'express';
import { Reflector } from '@nestjs/core';

// Extend Express Request interface to include custom properties
declare module 'express-serve-static-core' {
  interface Request {
    account_id?: string;
    role?: string;
  }
}

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private jwtService: JwtService,
  ) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const requiredRoles = this.reflector.get<string[]>(
      'roles',
      context.getHandler(),
    );

    const request = context.switchToHttp().getRequest<Request>();
    const token = this.extractTokenFromHeader(request);

    if (!token) {
      console.warn('Không tìm thấy token trong header');
      throw new UnauthorizedException('Không tìm thấy token trong header');
    }

    try {
      const payload = this.jwtService.verify(token, {
        clockTolerance: 5, // cho phép lệch thời gian 5s
      });

      console.log('✅ Token payload:', payload);
      console.log('🕒 Server time (epoch):', Math.floor(Date.now() / 1000));
      console.log('🕒 Token iat:', payload.iat);
      console.log('🕒 Token exp:', payload.exp);
      console.log('⏱ Token thời hạn (giây):', payload.exp - payload.iat);

      request.account_id = payload.account_id;
      request.role = payload.role;

      if (requiredRoles && !requiredRoles.includes(payload.role as string)) {
        console.warn('❌ Vai trò không đủ quyền:', payload.role);
        throw new ForbiddenException('Không đủ quyền truy cập API');
      }
    } catch (error) {
      console.error('❌ Token verify error:', error.name, error.message);

      if (error.name === 'TokenExpiredError') {
        throw new UnauthorizedException('Token đã hết hạn');
      }

      if (error.name === 'JsonWebTokenError') {
        throw new UnauthorizedException('Token không hợp lệ');
      }

      throw error;
    }

    return true;
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    const authHeader = request.headers?.authorization;
    if (typeof authHeader === 'string' && authHeader.startsWith('Bearer ')) {
      const token = authHeader.split(' ')[1];
      console.log('🔐 Token lấy từ header:', token);
      return token;
    }
    return undefined;
  }
}
