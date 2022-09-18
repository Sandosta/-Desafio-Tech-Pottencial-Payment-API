import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { VendaService } from './venda.service';
import { VendaController } from './venda.controller';
import { Venda } from 'src/entities/Venda.entitie';
import { Item } from 'src/entities/Itens.entitie';

@Module({
  imports: [TypeOrmModule.forFeature([Venda, Item])],
  controllers: [VendaController],
  providers: [VendaService]
})
export class VendaModule {}
