import { HttpException, Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class TipoDocumentosService {

  constructor(private readonly prismaService: PrismaService) {}

  async create(tipoDoc: Prisma.tipoDocumentosCreateInput) {
    try {
      await this.prismaService.tipoDocumentos.create({
        data: tipoDoc
      });
    } catch (error) {
      throw new HttpException(`ERROR_CREANDO_TIPO_DOCUMENTO > ${error}`, 403);
    }
    return {mensaje: "Tipo de documento creado con exito", tipoDoc};
  }

  findAll() {
    return `This action returns all tipoDocumentos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tipoDocumento`;
  }

  update(id: number) {
    return `This action updates a #${id} tipoDocumento`;
  }

  remove(id: number) {
    return `This action removes a #${id} tipoDocumento`;
  }
}
