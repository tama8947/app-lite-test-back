import { Test, TestingModule } from '@nestjs/testing';
import { TipoDocumentosController } from './tipo_documentos.controller';
import { TipoDocumentosService } from './tipo_documentos.service';

describe('TipoDocumentosController', () => {
  let controller: TipoDocumentosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TipoDocumentosController],
      providers: [TipoDocumentosService],
    }).compile();

    controller = module.get<TipoDocumentosController>(TipoDocumentosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
