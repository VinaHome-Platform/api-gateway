import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { DTO_RQ_GetListTrip } from './trip.dto';

@Injectable()
export class TripService {
  constructor(@Inject('BMS_SERVICE') private readonly client: ClientProxy) {}

  getListTripByRouteAndDate(data: DTO_RQ_GetListTrip) {
    return this.client.send({ bms: 'get_list_trip_by_route_and_date' }, data);
  }
}
