import { IsBoolean, IsInt, IsOptional, IsString } from 'class-validator';

export class DTO_RQ_CreateAgent {
  @IsString()
  full_name: string;

  @IsString()
  code: string;

  @IsString()
  phone_number: string;

  @IsString()
  @IsOptional()
  note: string;

  @IsString()
  @IsOptional()
  email: string;

  @IsString()
  @IsOptional()
  address: string;

  @IsString()
  username: string;

  @IsString()
  password: string;

  @IsString()
  company_code: string;

  @IsInt()
  company_id: number;

  @IsBoolean()
  status: boolean;
}
