import { Venda } from 'src/entities/Venda.entitie';
import { Injectable } from '@nestjs/common';
import { VendaDto } from './dto/create-venda.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateVendaDto } from './dto/update-venda.dto';
import { Item } from 'src/entities/Itens.entitie';

@Injectable()
export class VendaService {
  constructor(
    @InjectRepository(Venda)
    private vendaRepository: Repository<Venda>,
    @InjectRepository(Item)
    private itemRepository: Repository<Item>
   ) {}

  async create(createVendaDto: VendaDto) {
          let venda = await this.vendaRepository.save(createVendaDto);
          // @ts-ignore
          createVendaDto.items.forEach(item => item.vendas = venda.id);
    return this.itemRepository.save(createVendaDto.items);;
  }

  findAll() {
    return this.vendaRepository.find({ relations: { items: true, vendedor: true } });
  }

  findOne(id: number) {
    return this.vendaRepository.findOne({ where: { id }, relations: {items:true,vendedor: true} });
  }

  update(id: number, updateVendaDto: UpdateVendaDto) {
    return this.vendaRepository.update({ id }, updateVendaDto);
  }

  remove(id: number) {
    return this.vendaRepository
    .createQueryBuilder()
    .delete()
    .where({id})
    .execute();
  }
}
