import { IsBoolean, IsString } from 'class-validator';

export class CreateAccountStaff {
  @IsString()
  username: string;

  @IsString()
  password: string;

  @IsString()
  number_phone: string;

  @IsString()
  full_name: string;

  @IsBoolean()
  status: boolean;
}
