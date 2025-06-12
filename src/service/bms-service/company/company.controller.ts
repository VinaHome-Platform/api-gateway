import { Body, Controller, Delete, Param, Post, Put } from '@nestjs/common';
import { CompanyService } from './company.service';
import { DTO_RQ_CreateCompany, DTO_RQ_UpdateCompany } from './company.dto';

@Controller('v2/company')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @Post('/create-company')
  createCompany(@Body() data: DTO_RQ_CreateCompany) {
    return this.companyService.createCompany(data);
  }
  @Put('/update-company/:id')
  updateCompany(@Param('id') id: number, @Body() data: DTO_RQ_UpdateCompany) {
    return this.companyService.updateCompany(id, data);
  }
  @Delete('/delete-company/:id')
  deleteCompany(@Param('id') id: number) {
    return this.companyService.deleteCompany(id);
  }
}
