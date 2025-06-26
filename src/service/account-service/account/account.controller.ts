/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Req,
  UseGuards,
} from '@nestjs/common';
import { AccountService } from './account.service';
import { CreateAccountStaff, UpdateAccountStaff } from './account.dto';
import { AuthGuard } from 'src/guards/auth.guard';
import { Roles } from 'src/decorator/roles.decorator';

@Controller('v1/account')
@UseGuards(AuthGuard)
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

  @Get('/get-list-account-by-company/:id')
  @Roles('ADMIN')
  getListAccountByCompany(@Param('id') id: number) {
    return this.accountService.getListAccountByCompany(id);
  }

  @Get('/test')
  @Roles('STAFF')
  test(@Req() req: any) {
    return { message: 'test', account_id: req.account_id, role: req.role };
  }
}
