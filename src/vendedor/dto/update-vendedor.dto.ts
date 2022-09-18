import { PartialType } from '@nestjs/swagger';
import { VendedorDto } from './create-vendedor.dto';

export class UpdateVendedorDto extends PartialType(VendedorDto) {}
