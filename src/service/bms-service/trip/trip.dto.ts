import { IsDateString, IsInt } from 'class-validator';

export class DTO_RQ_GetListTrip {
  @IsInt()
  route: number;
  @IsDateString()
  date: string;
  @IsInt()
  company: number;
}
