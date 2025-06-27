import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { DTO_RQ_CreateSeatChart, DTO_RQ_UpdateSeatChart } from './seat.dto';

@Injectable()
export class SeatService {
  constructor(@Inject('BMS_SERVICE') private readonly client: ClientProxy) {}

  createSeatChart(data: DTO_RQ_CreateSeatChart) {
    console.log(data);
    return this.client.send({ bms: 'create_seat_chart' }, data);
  }
  getSeatChartByCompany(id: number) {
    return this.client.send({ bms: 'get_seat_chart_by_company' }, id);
  }
  deleteSeatChart(id: number) {
    return this.client.send({ bms: 'delete_seat_chart' }, id);
  }
  updateSeatChart(id: number, data: DTO_RQ_UpdateSeatChart) {
    console.log(id, data);
    return this.client.send({ bms: 'update_seat_chart' }, { id, data });
  }
  getSeatChartNameByCompany(id: number) {
    return this.client.send({ bms: 'get_seat_chart_name_by_company' }, id);
  }
}
