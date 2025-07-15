import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/guards/auth.guard';
import { TicketService } from './ticket.service';
import { Roles } from 'src/decorator/roles.decorator';
import { DTO_RQ_CancelTicket, DTO_RQ_TicketPayloadUpdate } from './ticket.dto';

@Controller('v2/ticket')
@UseGuards(AuthGuard)
export class TicketController {
  constructor(private readonly ticketService: TicketService) {}

  @Get('/get-list-tickets-by-trip/:id')
  @Roles('ADMIN', 'STAFF')
  getListTicketsByTrip(@Param('id') id: number) {
    return this.ticketService.getListTicketsByTrip(id);
  }

  @Post('/update-tickets')
  @Roles('ADMIN', 'STAFF')
  updateTicket(@Body() data: DTO_RQ_TicketPayloadUpdate) {
    console.log(data);
    return this.ticketService.updateTicket(data);
  }

  @Post('/cancel-tickets')
  @Roles('ADMIN', 'STAFF')
  cancelTicket(@Body() data: DTO_RQ_CancelTicket) {
    console.log(data);
    return this.ticketService.cancelTicket(data);
  }
}
