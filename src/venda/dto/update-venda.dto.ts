import { PartialType } from '@nestjs/swagger';
import { VendaDto } from './create-venda.dto';

export class UpdateVendaDto extends PartialType(VendaDto) {}
