import { Type } from 'class-transformer';
import {
  IsBoolean,
  IsInt,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';

export class DTO_RQ_CreateOffice {
  @IsString()
  name: string;

  @IsString()
  code: string;

  @IsString()
  address: string;

  @IsString()
  @IsOptional()
  note: string;

  @IsBoolean()
  status: boolean;

  @ValidateNested()
  @Type(() => DTO_RQ_OfficePhone)
  phones: DTO_RQ_OfficePhone[];

  @IsInt()
  company_id: number;
}
export class DTO_RQ_OfficePhone {
  @IsInt()
  @IsOptional()
  id: number;
  @IsString()
  phone: string;

  @IsString()
  type: string;
}

export class DTO_RQ_UpdateOffice {
  @IsInt()
  @IsOptional()
  id: number;

  @IsString()
  name: string;

  @IsString()
  code: string;

  @IsString()
  address: string;

  @IsString()
  @IsOptional()
  note: string;

  @IsBoolean()
  status: boolean;

  @ValidateNested()
  @Type(() => DTO_RQ_OfficePhone)
  phones: DTO_RQ_OfficePhone[];

  @IsInt()
  company_id: number;
}
