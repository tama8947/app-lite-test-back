import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TipoDocumentosService } from './tipo_documentos.service';

@Controller('tipo-documentos')
export class TipoDocumentosController {
  constructor(private readonly tipoDocumentosService: TipoDocumentosService) {}

  @Post()
  async create(@Body() tipoDoc) {
    return await this.tipoDocumentosService.create(tipoDoc);
  }

  @Get()
  findAll() {
    return this.tipoDocumentosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tipoDocumentosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string) {
    return this.tipoDocumentosService.update(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tipoDocumentosService.remove(+id);
  }
}
