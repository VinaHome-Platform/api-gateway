import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { DTO_RQ_CreateCompany, DTO_RQ_UpdateCompany } from './company.dto';

@Injectable()
export class CompanyService {
  constructor(@Inject('BMS_SERVICE') private readonly client: ClientProxy) {}
  createCompany(data: DTO_RQ_CreateCompany) {
    return this.client.send({ bms: 'create_company' }, data);
  }
  updateCompany(id: number, data: DTO_RQ_UpdateCompany) {
    return this.client.send({ bms: 'update_company' }, { id, data });
  }
  deleteCompany(id: number) {
    return this.client.send({ bms: 'delete_company' }, id);
  }
}
