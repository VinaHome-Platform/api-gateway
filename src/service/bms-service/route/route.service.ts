import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { DTO_RQ_CreateRoute, DTO_RQ_UpdateRoute } from './route.dto';

@Injectable()
export class RouteService {
  constructor(@Inject('BMS_SERVICE') private readonly client: ClientProxy) {}
  createRoute(data: DTO_RQ_CreateRoute) {
    return this.client.send({ bms: 'create_route' }, data);
  }
  getListRouteByCompany(id: number) {
    return this.client.send({ bms: 'get_list_route_by_company' }, id);
  }
  updateRoute(id: number, data: DTO_RQ_UpdateRoute) {
    return this.client.send({ bms: 'update_route' }, { id, data });
  }
  batchUpdateRouteOrder(
    data: {
      route_id: number;
      display_order: number;
      company_id: number;
    }[],
  ) {
    return this.client.send({ bms: 'update_route_order' }, data);
  }
  deleteRoute(id: number) {
    return this.client.send({ bms: 'delete_route' }, id);
  }
  getListRouteNameByCompany(id: number) {
    return this.client.send({ bms: 'get_list_route_name_by_company' }, id);
  }
  getListRouteNameActionByCompany(id: number) {
    return this.client.send(
      { bms: 'get_list_route_name_action_by_company' },
      id,
    );
  }
}
