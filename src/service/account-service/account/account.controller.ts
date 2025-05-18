import { Body, Controller, Post } from '@nestjs/common';
import { AccountService } from './account.service';
import { CreateAccountStaff } from './account.dto';

@Controller('v1/account')
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @Post('/create-account-staff')
  createAccountStaff(@Body() data: CreateAccountStaff) {
    return this.accountService.createAccountStaff(data);
  }
}
