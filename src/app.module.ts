import { Venda } from 'src/entities/Venda.entitie';
import * as Dotenv from 'dotenv';
Dotenv.config({path: '.env'});


import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { debug } from 'console';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { env } from './utils/Utils.tools';
import { ItemModule } from './item/item.module';
import { VendaModule } from './venda/venda.module';
import { VendedorModule } from './vendedor/vendedor.module';
import { Item } from './entities/Itens.entitie';
import { Vendedor } from './entities/Vendedor.entitie';

let DB_SOURCE = env('DB_SOURCE');

debug("Diretório do DB >", DB_SOURCE);

let _entities = [Item, Vendedor, Venda];

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: DB_SOURCE,
      entities: _entities,
      synchronize: true,
  }),
    ItemModule,
    VendaModule,
    VendedorModule,
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
