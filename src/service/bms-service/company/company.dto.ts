import { IsBoolean, IsString } from 'class-validator';

export class DTO_RQ_CreateCompany {
  @IsString()
  name: string;

  @IsString()
  phone: string;

  @IsString()
  address: string;

  @IsString()
  tax_code: string;

  @IsBoolean()
  status: boolean;

  @IsString()
  url_image: string;

  @IsString()
  code: string;

  @IsString()
  note: string;
}

export class DTO_RQ_UpdateCompany {
  @IsString()
  name: string;

  @IsString()
  phone: string;

  @IsString()
  address: string;

  @IsString()
  tax_code: string;

  @IsBoolean()
  status: boolean;

  @IsString()
  url_image: string;

  @IsString()
  code: string;

  @IsString()
  note: string;
}
