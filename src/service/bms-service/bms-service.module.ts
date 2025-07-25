import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { OfficeController } from './office/office.controller';
import { OfficeService } from './office/office.service';
import { CompanyController } from './company/company.controller';
import { CompanyService } from './company/company.service';
import { RouteController } from './route/route.controller';
import { RouteService } from './route/route.service';
import { SeatController } from './seat/seat.controller';
import { SeatService } from './seat/seat.service';
import { ScheduleController } from './schedule/schedule.controller';
import { ScheduleService } from './schedule/schedule.service';
import { TripController } from './trip/trip.controller';
import { TripService } from './trip/trip.service';
import { TicketController } from './ticket/ticket.controller';
import { TicketService } from './ticket/ticket.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'BMS_SERVICE',
        transport: Transport.NATS,
        options: {
          servers: process.env.NATS_SERVER ? [process.env.NATS_SERVER] : [],
        },
      },
    ]),
  ],
  controllers: [
    CompanyController,
    OfficeController,
    RouteController,
    SeatController,
    ScheduleController,
    TripController,
    TicketController,
  ],
  providers: [
    CompanyService,
    OfficeService,
    RouteService,
    SeatService,
    ScheduleService,
    TripService,
    TicketService,
  ],
  exports: [ClientsModule],
})
export class BmsServiceModule {}
