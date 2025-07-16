import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { AccountController } from './account/account.controller';
import { AccountService } from './account/account.service';
import { AgentController } from './agent/agent.controller';
import { AgentService } from './agent/agent.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'ACCOUNT_SERVICE',
        transport: Transport.NATS,
        options: {
          servers: process.env.NATS_SERVER ? [process.env.NATS_SERVER] : [],
        },
      },
    ]),
  ],
  controllers: [AuthController, AccountController, AgentController],
  providers: [AuthService, AccountService, AgentService],
})
export class AccountServiceModule {}
