import { ApiProperty } from '@nestjs/swagger';
import { Venda } from "src/entities/Venda.entitie";

export class VendedorDto {
    id: number;
    @ApiProperty()
    nome: String;
    @ApiProperty()
    cpf: number;
    @ApiProperty()
    email: string;
    @ApiProperty()
    telefone: number;
    created_at: Date;
    updated_at: Date;
    vendas: Venda[];
}
