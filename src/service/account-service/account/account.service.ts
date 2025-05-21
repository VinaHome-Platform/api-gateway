/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
  HttpException,
  Inject,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { ClientProxy, RpcException } from '@nestjs/microservices';
import { CreateAccountStaff, UpdateAccountStaff } from './account.dto';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class AccountService {
  constructor(
    @Inject('ACCOUNT_SERVICE') private readonly client: ClientProxy,
  ) {}

  createAccountStaff(data: CreateAccountStaff) {
    console.log(data);
    return this.client.send({ ac: 'create_account_staff' }, data);
  }
  updateAccountStaff(data: UpdateAccountStaff, id: string) {
    return this.client.send({ ac: 'update_account_staff' }, { data, id });
  }
  deleteAccountStaff(id: string) {
    return this.client.send({ ac: 'delete_account_staff' }, id);
  }
}
