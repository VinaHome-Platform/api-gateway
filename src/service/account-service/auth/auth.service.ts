import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { LoginFormBMS } from './auth.dto';

@Injectable()
export class AuthService {
  constructor(
    @Inject('ACCOUNT_SERVICE') private readonly client: ClientProxy,
  ) {}

  loginBMS(data: LoginFormBMS) {
    console.log('loginBMS', data);
    return this.client.send({ ac: 'login_bms' }, data);
  }
}
