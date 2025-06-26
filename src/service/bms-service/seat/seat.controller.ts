import { Controller } from '@nestjs/common';
import { SeatService } from './seat.service';

@Controller('v2/seat')
export class SeatController {
  constructor(private readonly seatService: SeatService) {}
}
