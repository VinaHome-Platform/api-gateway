import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AccountServiceModule } from './service/account-service/account-service.module';
import configuration from './config/configuration';
import { JwtModule } from '@nestjs/jwt';
import { BmsServiceModule } from './service/bms-service/bms-service.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET'),
      }),
      global: true,
    }),

    AccountServiceModule,
    BmsServiceModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
