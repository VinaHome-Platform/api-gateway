import { Type } from 'class-transformer';
import {
  IsBoolean,
  IsInt,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';

class AcceptApp {
  @IsBoolean()
  bms: boolean;

  @IsBoolean()
  cms: boolean;

  @IsBoolean()
  ams: boolean;

  @IsBoolean()
  driver: boolean;
}

export class CreateAccountStaff {
  @IsString()
  username: string;

  @IsString()
  password: string;

  @IsString()
  number_phone: string;

  @IsString()
  full_name: string;

  @IsString()
  @IsOptional()
  email: string;

  @IsString()
  address: string;

  @IsString()
  date_of_birth: Date;

  @IsString()
  gender: string;

  @IsBoolean()
  status: boolean;

  @IsString()
  role: string;

  @ValidateNested()
  @Type(() => AcceptApp)
  accept_app: AcceptApp;

  @IsInt()
  company_id: number;
}

export class UpdateAccountStaff {
  @IsString()
  username: string;

  @IsString()
  number_phone: string;

  @IsString()
  full_name: string;

  @IsString()
  email: string;

  @IsString()
  address: string;

  @IsString()
  date_of_birth: Date;

  @IsString()
  gender: string;

  @IsBoolean()
  status: boolean;

  @IsString()
  role: string;

  @ValidateNested()
  @Type(() => AcceptApp)
  accept_app: AcceptApp;
}
