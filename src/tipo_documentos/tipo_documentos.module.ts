import { Module } from '@nestjs/common';
import { TipoDocumentosService } from './tipo_documentos.service';
import { TipoDocumentosController } from './tipo_documentos.controller';

import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [TipoDocumentosController],
  providers: [TipoDocumentosService, PrismaService]
})
export class TipoDocumentosModule {}
