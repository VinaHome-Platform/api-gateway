import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { DTO_RQ_CreateRoute } from './route.dto';

@Injectable()
export class RouteService {
  constructor(@Inject('BMS_SERVICE') private readonly client: ClientProxy) {}
  createRoute(data: DTO_RQ_CreateRoute) {
    return this.client.send({ bms: 'create_route' }, data);
  }
  getListRouteByCompany(id: number) {
    return this.client.send({ bms: 'get_list_route_by_company' }, id);
  }
}
