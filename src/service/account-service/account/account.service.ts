/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
  Inject,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateAccountStaff } from './account.dto';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class AccountService {
  constructor(
    @Inject('ACCOUNT_SERVICE') private readonly client: ClientProxy,
  ) {}

  async createAccountStaff(data: CreateAccountStaff) {
    try {
      console.log(data);
      const result = await firstValueFrom(
        this.client.send({ ac: 'create_account_staff' }, data),
      );
      return result;
    } catch (error) {
      throw new InternalServerErrorException({
        success: false,
        message: 'Máy chủ dịch vụ không phản hồi',
      });
    }
  }
}
