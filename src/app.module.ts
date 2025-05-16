import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ClientsModule.register([
      {
        name: 'BMS_SERVICE',
        transport: Transport.TCP,
        options: {
          host: process.env.HOST_BMS_SERVICE,
          port: Number(process.env.PORT_BMS_SERVICE),
        },
      },
      {
        name: 'CMS_SERVICE',
        transport: Transport.TCP,
        options: {
          host: process.env.PORT_CMS_SERVICE,
          port: Number(process.env.HOST_CMS_SERVICE),
        },
      },
      {
        name: 'AMS_SERVICE',
        transport: Transport.TCP,
        options: {
          host: process.env.HOST_AMS_SERVICE,
          port: Number(process.env.PORT_AMS_SERVICE),
        },
      },
      {
        name: 'ACCOUNT_SERVICE',
        transport: Transport.TCP,
        options: {
          host: process.env.HOST_ACCOUNT_SERVICE,
          port: Number(process.env.PORT_ACCOUNT_SERVICE),
        },
      },
    ]),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
