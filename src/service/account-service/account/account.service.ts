import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateAccountStaff } from './account.dto';

@Injectable()
export class AccountService {
  constructor(
    @Inject('ACCOUNT_SERVICE') private readonly client: ClientProxy,
  ) {}
  createAccountStaff(data: CreateAccountStaff) {
    console.log('createAccountStaff', data);
    // return this.client.send({ ac: 'create_account_staff' }, data);
  }
}
