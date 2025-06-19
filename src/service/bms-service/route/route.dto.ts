import { IsBoolean, IsInt, IsOptional, IsString } from 'class-validator';

export class DTO_RQ_CreateRoute {
  @IsInt()
  base_price: number;

  @IsInt()
  company_id: number;

  @IsString()
  created_by: string;

  @IsInt()
  @IsOptional()
  distance: number;

  @IsInt()
  @IsOptional()
  e_ticket_price: number;

  @IsString()
  @IsOptional()
  journey: string;

  @IsString()
  @IsOptional()
  note: string;

  @IsString()
  route_name: string;

  @IsString()
  @IsOptional()
  route_name_e_ticket: string;

  @IsString()
  short_name: string;

  @IsBoolean()
  status: boolean;
}

export class DTO_RQ_UpdateRoute {
  @IsInt()
  @IsOptional()
  id: number;

  @IsInt()
  base_price: number;

  @IsInt()
  company_id: number;

  @IsString()
  created_by: string;

  @IsInt()
  @IsOptional()
  distance: number;

  @IsInt()
  @IsOptional()
  e_ticket_price: number;

  @IsString()
  @IsOptional()
  journey: string;

  @IsString()
  @IsOptional()
  note: string;

  @IsString()
  route_name: string;

  @IsString()
  @IsOptional()
  route_name_e_ticket: string;

  @IsString()
  short_name: string;

  @IsBoolean()
  status: boolean;
}
