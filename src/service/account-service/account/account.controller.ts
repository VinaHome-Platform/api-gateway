/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Body, Controller, Delete, Param, Post, Put } from '@nestjs/common';
import { AccountService } from './account.service';
import { CreateAccountStaff, UpdateAccountStaff } from './account.dto';

@Controller('v1/account')
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @Post('/create-account-staff')
  createAccountStaff(@Body() data: CreateAccountStaff) {
    return this.accountService.createAccountStaff(data);
  }

  @Put('/update-account-staff/:id')
  updateAccountStaff(
    @Body() data: UpdateAccountStaff,
    @Param('id') id: string,
  ) {
    return this.accountService.updateAccountStaff(data, id);
  }

  @Delete('/delete-account-staff/:id')
  deleteAccountStaff(@Param('id') id: string) {
    return this.accountService.deleteAccountStaff(id);
  }
}
