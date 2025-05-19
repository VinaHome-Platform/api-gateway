/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Type } from 'class-transformer';
import { IsBoolean, IsInt, IsString, ValidateNested } from 'class-validator';

class AcceptAppDto {
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
  email: string;

  @IsString()
  address: string;

  @IsString()
  date_of_birth: Date;

  @IsBoolean()
  status: boolean;

  @IsString()
  role: string;

  @IsString()
  account_type: string;

  @ValidateNested()
  @Type(() => AcceptAppDto)
  accept_app: AcceptAppDto;

  @IsInt()
  company_id: number;
}
