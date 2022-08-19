import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmpresasModule } from './empresas/empresas.module';
import { TipoDocumentosModule } from './tipo_documentos/tipo_documentos.module';

@Module({
  imports: [EmpresasModule, TipoDocumentosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
