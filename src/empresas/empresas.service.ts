import { HttpException, Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';


@Injectable()
export class EmpresasService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(empresa: Prisma.empresasCreateInput) {
    try {
      await this.prismaService.empresas.create({
        data: empresa
      });
    } catch (error) {
      throw new HttpException(`ERROR_CREANDO_EMPRESA > ${error}`, 403);
    }
    return {mensaje: "Empresa creada con exito", empresa};
  }

  async findAll() {
    const res = await this.prismaService.empresas.findMany();
    return {data: res};
  }

  async findOne(id: Prisma.empresasWhereUniqueInput) {
    try {
      const res = await this.prismaService.empresas.findUnique({
        // where: {id: `${id}`}
        where: id
      });
      if (res == null) {
        return {mensaje: "Empresa no existe en la base de datos", id};
      } else {
        return {data: res};
      }
      
    } catch (error) {
      throw new HttpException(`ERROR_CONSULTANDO_EMPRESA > ${error}`, 403);
    }
  }

  update(id: number) {
    return `This action updates a #${id} empresa`;
  }

  remove(id: number) {
    return `This action removes a #${id} empresa`;
  }
}
