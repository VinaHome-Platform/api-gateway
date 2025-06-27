import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { SeatService } from './seat.service';
import { Roles } from 'src/decorator/roles.decorator';
import { AuthGuard } from 'src/guards/auth.guard';
import { DTO_RQ_CreateSeatChart, DTO_RQ_UpdateSeatChart } from './seat.dto';

@Controller('v2/seat')
@UseGuards(AuthGuard)
export class SeatController {
  constructor(private readonly seatService: SeatService) {}

  @Post('/create-seat-chart')
  @Roles('ADMIN')
  createSeatChart(@Body() data: DTO_RQ_CreateSeatChart) {
    return this.seatService.createSeatChart(data);
  }

  @Get('/get-seat-chart-by-company/:id')
  @Roles('ADMIN')
  getSeatChartByCompany(@Param('id') id: number) {
    return this.seatService.getSeatChartByCompany(id);
  }

  @Delete('/delete-seat-chart/:id')
  @Roles('ADMIN')
  deleteSeatChart(@Param('id') id: number) {
    return this.seatService.deleteSeatChart(id);
  }

  @Put('/update-seat-chart/:id')
  @Roles('ADMIN')
  updateSeatChart(
    @Param('id') id: number,
    @Body() data: DTO_RQ_UpdateSeatChart,
  ) {
    return this.seatService.updateSeatChart(id, data);
  }

  @Get('/get-seat-chart-name-by-company/:id')
  @Roles('ADMIN', 'STAFF')
  getSeatChartNameByCompany(@Param('id') id: number) {
    return this.seatService.getSeatChartNameByCompany(id);
  }
}
