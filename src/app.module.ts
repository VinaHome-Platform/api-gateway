import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AccountServiceModule } from './service/account-service/account-service.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AccountServiceModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
