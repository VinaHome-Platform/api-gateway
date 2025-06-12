import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginFormBMS, RefreshToken } from './auth.dto';

@Controller('v1/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/refresh-token')
  refreshToken(@Body() data: RefreshToken) {
    return this.authService.refreshToken(data);
  }

  @Post('/login-bms')
  loginBMS(@Body() data: LoginFormBMS) {
    return this.authService.loginBMS(data);
  }
}
