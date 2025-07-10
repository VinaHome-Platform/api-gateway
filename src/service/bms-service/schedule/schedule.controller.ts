import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { ScheduleService } from './schedule.service';
import { AuthGuard } from 'src/guards/auth.guard';
import { Roles } from 'src/decorator/roles.decorator';
import { DTO_RQ_CreateSchedule } from './schedule.dto';

@Controller('v2/schedule')
@UseGuards(AuthGuard)
export class ScheduleController {
  constructor(private readonly scheduleService: ScheduleService) {}

  @Post('/create-schedule')
  @Roles('ADMIN')
  createSchedule(@Body() data: DTO_RQ_CreateSchedule) {
    return this.scheduleService.createSchedule(data);
  }
}
