import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { DTO_RQ_CreateSchedule, DTO_RQ_UpdateSchedule } from './schedule.dto';

@Injectable()
export class ScheduleService {
  constructor(@Inject('BMS_SERVICE') private readonly client: ClientProxy) {}

  createSchedule(data: DTO_RQ_CreateSchedule) {
    console.log(data);
    return this.client.send({ bms: 'create_schedule' }, data);
  }
  getListSchedulesByCompany(id: number) {
    return this.client.send({ bms: 'get_list_schedules_by_company' }, id);
  }
  deleteSchedule(id: number) {
    return this.client.send({ bms: 'delete_schedule' }, id);
  }
  updateSchedule(id: number, data: DTO_RQ_UpdateSchedule) {
    return this.client.send({ bms: 'update_schedule' }, { id, data });
  }
}
