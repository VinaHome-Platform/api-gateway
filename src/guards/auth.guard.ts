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
    const request = context.switchToHttp().getRequest();
    const token = this.extractTokenFromHeader(request as Request);
    if (!token) {
      throw new UnauthorizedException('Không tìm thấy token trong header');
    }
    try {
      const payload = this.jwtService.verify(token);
      request.account_id = payload.account_id;
      request.role = payload.role;

      if (requiredRoles && !requiredRoles.includes(payload.role as string)) {
        throw new ForbiddenException('Không đủ quyền truy cập API');
      }
    } catch (error) {
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
    if (typeof authHeader === 'string') {
      return authHeader.split(' ')[1];
    }
    return undefined;
  }
}
