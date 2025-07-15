import {
  IsArray,
  IsBoolean,
  IsInt,
  IsOptional,
  IsString,
} from 'class-validator';

export class DTO_RQ_TicketPayloadUpdate {
  @IsArray()
  @IsInt({ each: true })
  id: number[];

  @IsString()
  @IsOptional()
  ticket_phone: string;

  @IsString()
  @IsOptional()
  ticket_email: string;

  @IsString()
  @IsOptional()
  ticket_customer_name: string;

  @IsString()
  @IsOptional()
  ticket_point_up: string;

  @IsString()
  @IsOptional()
  ticket_point_down: string;

  @IsString()
  @IsOptional()
  ticket_note: string;

  @IsInt()
  ticket_display_price: number;

  @IsString()
  @IsOptional()
  payment_method: string;

  @IsBoolean()
  booked_status: boolean;

  @IsString()
  user_created: string;

  @IsString()
  office_created: string;
}

export class DTO_RQ_CancelTicket {
  @IsArray()
  @IsInt({ each: true })
  id: number[];
}
