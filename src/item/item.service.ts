import { Injectable } from '@nestjs/common';
import { ItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Item } from 'src/entities/Itens.entitie';

@Injectable()
export class ItemService {
  constructor(
    @InjectRepository(Item)
    private vendaRepository: Repository<Item>
   ) {}

   create(createItemDto: ItemDto) {
    return this.vendaRepository.save(createItemDto);
  }

  findAll() {
    return this.vendaRepository.find();
  }

  findOne(id: number) {
    return this.vendaRepository.findOne({ where: { id } });
  }

  update(id: number, updateItemDto: UpdateItemDto) {
    return this.vendaRepository.update({ id }, updateItemDto);
  }

  remove(id: number) {
    return this.vendaRepository
    .createQueryBuilder()
    .delete()
    .where({id})
    .execute();
  }
}
