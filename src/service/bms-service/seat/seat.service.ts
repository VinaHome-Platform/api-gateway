import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class SeatService {
  constructor(@Inject('BMS_SERVICE') private readonly client: ClientProxy) {}
}
