import { Controller } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('v4/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
}
