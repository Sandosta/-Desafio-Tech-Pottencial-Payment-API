import { JoinColumn, OneToMany, ManyToOne, Entity , PrimaryGeneratedColumn, Column } from 'typeorm';
import { Venda } from './Venda.entitie';

@Entity()
export class Item {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;
    
    @Column()
    quantidade: number;

    @Column()
    valor: number;

    @Column({ default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;

    @Column({ default: () => 'CURRENT_TIMESTAMP' })
    updated_at: Date;

    @ManyToOne((type) => Venda, (venda) => venda.items)
    @JoinColumn()
    vendas: Venda[];

    vendasId: number;
}