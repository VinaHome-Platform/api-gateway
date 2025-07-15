import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { DTO_RQ_CreateAgent } from './agent.dto';

@Injectable()
export class AgentService {
  constructor(
    @Inject('ACCOUNT_SERVICE') private readonly client: ClientProxy,
  ) {}

  createAgent(data: DTO_RQ_CreateAgent) {
    return this.client.send({ ac: 'create_agent' }, { data });
  }
}
