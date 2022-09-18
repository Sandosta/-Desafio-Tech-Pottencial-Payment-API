import { Injectable } from '@nestjs/common';
import { VendedorDto } from './dto/create-vendedor.dto';
import { UpdateVendedorDto } from './dto/update-vendedor.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Vendedor } from 'src/entities/Vendedor.entitie';

@Injectable()
export class VendedorService {
  constructor(
    @InjectRepository(Vendedor)
    private vendaRepository: Repository<Vendedor>
   ) {}

   create(createVendedorDto: VendedorDto) {
    return this.vendaRepository.save(createVendedorDto);
  }

  findAll() {
    return this.vendaRepository.find();
  }

  findOne(id: number) {
    return this.vendaRepository.findOne({ where: { id } });
  }

  update(id: number, updateVendedorDto: UpdateVendedorDto) {
    return this.vendaRepository.update({ id }, updateVendedorDto);
  }

  remove(id: number) {
    return this.vendaRepository
    .createQueryBuilder()
    .delete()
    .where({id})
    .execute();
  }
}
