import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from 'src/guards/auth.guard';
import { RouteService } from './route.service';
import { Roles } from 'src/decorator/roles.decorator';
import { DTO_RQ_CreateRoute, DTO_RQ_UpdateRoute } from './route.dto';

@Controller('v2/route')
@UseGuards(AuthGuard)
export class RouteController {
  constructor(private readonly routeService: RouteService) {}

  @Post('/create-route')
  @Roles('ADMIN')
  createRoute(@Body() data: DTO_RQ_CreateRoute) {
    return this.routeService.createRoute(data);
  }

  @Get('/get-list-route-by-company/:id')
  @Roles('ADMIN')
  getListRouteByCompany(@Param('id') id: number) {
    return this.routeService.getListRouteByCompany(id);
  }

  @Put('/update-route/:id')
  @Roles('ADMIN')
  updateRoute(@Param('id') id: number, @Body() data: DTO_RQ_UpdateRoute) {
    return this.routeService.updateRoute(id, data);
  }

  @Post('/update-route-order')
  @Roles('ADMIN')
  updateRouteOrder(
    @Body()
    data: {
      route_id: number;
      display_order: number;
      company_id: number;
    }[],
  ) {
    return this.routeService.batchUpdateRouteOrder(data);
  }

  @Delete('/delete-route/:id')
  @Roles('ADMIN')
  deleteRoute(@Param('id') id: number) {
    return this.routeService.deleteRoute(id);
  }

  @Get('/get-list-route-name-by-company/:id')
  @Roles('ADMIN', 'STAFF')
  getListRouteNameByCompany(@Param('id') id: number) {
    return this.routeService.getListRouteNameByCompany(id);
  }

  @Get('/get-list-route-name-action-by-company/:id')
  @Roles('ADMIN', 'STAFF')
  getListRouteNameActionByCompany(@Param('id') id: number) {
    return this.routeService.getListRouteNameActionByCompany(id);
  }
}
