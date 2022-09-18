import { Entity , PrimaryGeneratedColumn, Column } from 'typeorm';
import { Venda } from './Venda.entitie';

@Entity()
export class Vendedor {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: String;

    @Column()
    cpf: number;

    @Column()
    email: string;

    @Column()
    telefone: number;

    @Column({ default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;

    @Column({ default: () => 'CURRENT_TIMESTAMP' })
    updated_at: Date;

    vendas: Venda[];
}