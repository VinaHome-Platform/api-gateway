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
import { ScheduleService } from './schedule.service';
import { AuthGuard } from 'src/guards/auth.guard';
import { Roles } from 'src/decorator/roles.decorator';
import { DTO_RQ_CreateSchedule, DTO_RQ_UpdateSchedule } from './schedule.dto';

@Controller('v2/schedule')
@UseGuards(AuthGuard)
export class ScheduleController {
  constructor(private readonly scheduleService: ScheduleService) {}

  @Post('/create-schedule')
  @Roles('ADMIN')
  createSchedule(@Body() data: DTO_RQ_CreateSchedule) {
    return this.scheduleService.createSchedule(data);
  }

  @Get('/get-list-schedules-by-company/:id')
  @Roles('ADMIN')
  getListSchedulesByCompany(@Param('id') id: number) {
    return this.scheduleService.getListSchedulesByCompany(id);
  }

  @Delete('/delete-schedule/:id')
  @Roles('ADMIN')
  deleteSchedule(@Param('id') id: number) {
    return this.scheduleService.deleteSchedule(id);
  }

  @Put('/update-schedule/:id')
  @Roles('ADMIN')
  updateSchedule(@Param('id') id: number, @Body() data: DTO_RQ_UpdateSchedule) {
    return this.scheduleService.updateSchedule(id, data);
  }
}
