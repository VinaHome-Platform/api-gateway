import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { AccountController } from './account/account.controller';
import { AccountService } from './account/account.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'ACCOUNT_SERVICE',
        transport: Transport.TCP,
        options: {
          host: process.env.HOST_ACCOUNT_SERVICE,
          port: 4001,
        },
      },
    ]),
  ],
  controllers: [AuthController, AccountController],
  providers: [AuthService, AccountService],
})
export class AccountServiceModule {}
