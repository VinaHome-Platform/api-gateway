import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { DTO_RQ_CreateSchedule } from './schedule.dto';

@Injectable()
export class ScheduleService {
  constructor(@Inject('BMS_SERVICE') private readonly client: ClientProxy) {}

  createSchedule(data: DTO_RQ_CreateSchedule) {
    console.log(data);
    return this.client.send({ bms: 'create_schedule' }, data);
  }
}
