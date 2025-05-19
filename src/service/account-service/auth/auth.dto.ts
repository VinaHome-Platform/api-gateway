import { IsString } from 'class-validator';

export class LoginFormBMS {
  @IsString()
  username: string;

  @IsString()
  password: string;
}
