import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EmpresasService } from './empresas.service';

@Controller('empresas')
export class EmpresasController {
  constructor(private readonly empresasService: EmpresasService) {}

  @Post()
  async create(@Body() empresa) {
    console.log(empresa);
    return await this.empresasService.create(empresa);
  }

  @Get()
  findAll() {
    return this.empresasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: any) {
    // console.log(id);
    return this.empresasService.findOne({id});
  }

  @Patch(':id')
  update(@Param('id') id: string) {
    return this.empresasService.update(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.empresasService.remove(+id);
  }
}
