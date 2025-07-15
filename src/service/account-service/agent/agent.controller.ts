import { Body, Controller, Post } from '@nestjs/common';
import { AgentService } from './agent.service';
import { Roles } from 'src/decorator/roles.decorator';
import { DTO_RQ_CreateAgent } from './agent.dto';

@Controller('v1/agent')
export class AgentController {
  constructor(private readonly agentService: AgentService) {}

  @Post('/create-agent')
  @Roles('ADMIN')
  createAgent(@Body() data: DTO_RQ_CreateAgent) {
    return this.agentService.createAgent(data);
  }
}
