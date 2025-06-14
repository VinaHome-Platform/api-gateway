import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { DTO_RQ_CreateOffice, DTO_RQ_UpdateOffice } from './office.dto';

@Injectable()
export class OfficeService {
  constructor(@Inject('BMS_SERVICE') private readonly client: ClientProxy) {}
  getOfficeInfo() {
    console.log('Fetching office information');
    return this.client.send({ bms: 'get_office_info' }, {});
  }
  createOffice(data: DTO_RQ_CreateOffice) {
    console.log('Creating office with data:', data);
    return this.client.send({ bms: 'create_office' }, data);
  }
  deleteOffice(id: number) {
    return this.client.send({ bms: 'delete_office' }, id);
  }
  updateOffice(id: number, data: DTO_RQ_UpdateOffice) {
    console.log('Updating office with ID:', id, 'and data:', data);
    return this.client.send({ bms: 'update_office' }, { id, data });
  }
  getListOfficeByCompany(id: number) {
    return this.client.send({ bms: 'get_list_office_by_company' }, id);
  }
  getListOfficeNameByCompany(id: number) {
    return this.client.send({ bms: 'get_list_office_name_by_company' }, id);
  }
  getListOfficeByCompany_2(id: number) {
    return this.client.send({ bms: 'get_list_office_by_company_2' }, id);
  }
}
