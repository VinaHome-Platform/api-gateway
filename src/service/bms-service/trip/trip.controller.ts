import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/guards/auth.guard';
import { TripService } from './trip.service';
import { Roles } from 'src/decorator/roles.decorator';
import { DTO_RQ_GetListTrip } from './trip.dto';

@Controller('v2/trip')
@UseGuards(AuthGuard)
export class TripController {
  constructor(private readonly tripService: TripService) {}

  @Post('/get-list-trip-by-route-and-date')
  @Roles('ADMIN', 'STAFF')
  getListTripByRouteAndDate(@Body() data: DTO_RQ_GetListTrip) {
    return this.tripService.getListTripByRouteAndDate(data);
  }
}
