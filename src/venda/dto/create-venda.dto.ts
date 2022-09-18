import { ApiProperty } from '@nestjs/swagger';
import { VendedorDto } from "src/vendedor/dto/create-vendedor.dto";
import { ItemDto } from "src/item/dto/create-item.dto";


export class VendaDto {
    id: number;
    @ApiProperty()
    vendedor: VendedorDto;
    @ApiProperty()
    items: ItemDto[];
    @ApiProperty()
    status: number;
    created_at: Date;
    updated_at: Date;
}
