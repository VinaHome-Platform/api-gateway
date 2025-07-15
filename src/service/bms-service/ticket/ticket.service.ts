import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { DTO_RQ_CancelTicket, DTO_RQ_TicketPayloadUpdate } from './ticket.dto';

@Injectable()
export class TicketService {
  constructor(@Inject('BMS_SERVICE') private readonly client: ClientProxy) {}

  getListTicketsByTrip(id: number) {
    console.log(`Fetching tickets for trip ID: ${id}`);
    return this.client.send({ bms: 'get_list_tickets_by_trip' }, { id });
  }
  updateTicket(data: DTO_RQ_TicketPayloadUpdate) {
    return this.client.send({ bms: 'update_ticket' }, { data });
  }
  cancelTicket(data: DTO_RQ_CancelTicket) {
    return this.client.send({ bms: 'cancel_ticket' }, { data });
  }
}
