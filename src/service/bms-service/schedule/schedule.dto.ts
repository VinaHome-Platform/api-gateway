import {
  IsArray,
  IsBoolean,
  IsDateString,
  IsInt,
  IsOptional,
  IsString,
} from 'class-validator';

export class DTO_RQ_CreateSchedule {
  @IsInt()
  route_id: number;

  @IsInt()
  @IsOptional()
  seat_chart_id: number;

  @IsString()
  start_time: string;

  @IsString()
  repeat_type: string;

  @IsArray()
  @IsString({ each: true })
  weekdays: string[];

  @IsString()
  odd_even_type: string;

  @IsDateString()
  start_date: string;

  @IsDateString()
  @IsOptional()
  end_date: string;

  @IsBoolean()
  is_known_end_date: boolean;

  @IsInt()
  trip_type: number;

  @IsString()
  created_by: string;

  @IsInt()
  company_id: number;
}
