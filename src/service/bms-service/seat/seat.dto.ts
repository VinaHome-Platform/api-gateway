import { Type } from 'class-transformer';
import { IsBoolean, IsInt, IsString, ValidateNested } from 'class-validator';

export class DTO_RQ_CreateSeatChart {
  @IsString()
  seat_chart_name: string;
  @IsInt()
  seat_chart_type: number;
  @IsInt()
  total_floor: number;
  @IsInt()
  total_row: number;
  @IsInt()
  total_column: number;
  @IsString()
  created_by: string;
  @IsInt()
  company_id: number;
  @ValidateNested({ each: true })
  @Type(() => DTO_RQ_Seat)
  seats: DTO_RQ_Seat[];
}
export class DTO_RQ_Seat {
  @IsString()
  name: string;
  @IsString()
  code: string;
  @IsBoolean()
  status: boolean;
  @IsInt()
  floor: number;
  @IsInt()
  row: number;
  @IsInt()
  column: number;
  @IsInt()
  type: number;
}

export class DTO_RQ_UpdateSeatChart {
  @IsInt()
  id: number;
  @IsString()
  seat_chart_name: string;
  @IsInt()
  seat_chart_type: number;
  @IsInt()
  total_floor: number;
  @IsInt()
  total_row: number;
  @IsInt()
  total_column: number;
  @IsString()
  created_by: string;
  @IsInt()
  company_id: number;
  @ValidateNested({ each: true })
  @Type(() => DTO_RQ_Seat)
  seats: DTO_RQ_Seat[];
}
