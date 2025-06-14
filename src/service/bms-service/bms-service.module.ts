import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { OfficeController } from './office/office.controller';
import { OfficeService } from './office/office.service';
import { CompanyController } from './company/company.controller';
import { CompanyService } from './company/company.service';
import { RouteController } from './route/route.controller';
import { RouteService } from './route/route.service';

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
  controllers: [CompanyController, OfficeController, RouteController],
  providers: [CompanyService, OfficeService, RouteService],
  exports: [ClientsModule],
})
export class BmsServiceModule {}
