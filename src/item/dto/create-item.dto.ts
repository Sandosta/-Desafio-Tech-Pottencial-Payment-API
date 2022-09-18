import { VendaDto } from 'src/venda/dto/create-venda.dto';
import { ApiProperty } from '@nestjs/swagger';

export class ItemDto {
    id: number;

    @ApiProperty()
    nome: string;
    @ApiProperty()
    quantidade: number;
    @ApiProperty()
    valor: number;
    created_at: Date;
    updated_at: Date;
    vendas: VendaDto[];
    vendasId: number;
}
