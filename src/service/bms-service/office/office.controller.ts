import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { OfficeService } from './office.service';
import { AuthGuard } from 'src/guards/auth.guard';
import { Roles } from 'src/decorator/roles.decorator';
import { DTO_RQ_CreateOffice, DTO_RQ_UpdateOffice } from './office.dto';

@Controller('v2/office')
@UseGuards(AuthGuard)
export class OfficeController {
  constructor(private readonly officeService: OfficeService) {}
  @Get('/info')
  @Roles('ADMIN')
  getOfficeInfo() {
    console.log('Fetching office information');
    return this.officeService.getOfficeInfo();
  }

  @Post('/create-office')
  @Roles('ADMIN')
  createOffice(@Body() data: DTO_RQ_CreateOffice) {
    console.log('Creating office');
    return this.officeService.createOffice(data);
  }

  @Delete('/delete-office/:id')
  @Roles('ADMIN')
  deleteOffice(@Param('id') id: number) {
    return this.officeService.deleteOffice(id);
  }

  @Put('/update-office/:id')
  @Roles('ADMIN')
  updateOffice(@Param('id') id: number, @Body() data: DTO_RQ_UpdateOffice) {
    return this.officeService.updateOffice(id, data);
  }

  @Get('/get-list-office-by-company/:id')
  @Roles('ADMIN')
  getListOffice(@Param('id') id: number) {
    return this.officeService.getListOfficeByCompany(id);
  }

  @Get('/get-list-office-by-company-2/:id')
  @Roles('ADMIN')
  getListOffice_2(@Param('id') id: number) {
    return this.officeService.getListOfficeByCompany_2(id);
  }

  @Get('/get-list-office-name-by-company/:id')
  @Roles('ADMIN', 'STAFF')
  getListOfficeName(@Param('id') id: number) {
    return this.officeService.getListOfficeNameByCompany(id);
  }
}
