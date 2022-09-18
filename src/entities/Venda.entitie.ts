import { JoinColumn, OneToMany, ManyToOne, Entity , PrimaryGeneratedColumn, Column } from 'typeorm';
import { Item } from './Itens.entitie';
import { Vendedor } from './Vendedor.entitie';

export class STATUS {
    private signo = ["Cancelada", "Aguardando pagamento", "Pagamento aprovado","Enviado para transportadora","Entregue"]
    
    Aguardando_pagamento = 0;
    Pagamento_aprovado = 1; 
    Cancelada = 2;
    Enviado_para_transportadora = 3;
    Entregue = 4;

    decode(intStatus: number) {
        return this.signo[intStatus];
    }
}

@Entity()
export class Venda {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne((type) => Vendedor, (vendedor) => vendedor.vendas)
    vendedor: Vendedor;

    @OneToMany((type) => Item, (item) => item.vendas)
    items: Item[];

    @Column()
    status: number;

    @Column({ default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;

    @Column({ default: () => 'CURRENT_TIMESTAMP' })
    updated_at: Date;
}