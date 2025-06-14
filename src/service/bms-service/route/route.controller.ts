import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/guards/auth.guard';
import { RouteService } from './route.service';
import { Roles } from 'src/decorator/roles.decorator';
import { DTO_RQ_CreateRoute } from './route.dto';

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
}
