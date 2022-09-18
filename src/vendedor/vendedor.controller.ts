import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VendedorService } from './vendedor.service';
import { VendedorDto } from './dto/create-vendedor.dto';
import { UpdateVendedorDto } from './dto/update-vendedor.dto';

@Controller('vendedor')
export class VendedorController {
  constructor(private readonly vendedorService: VendedorService) {}

  @Post()
  create(@Body() createVendedorDto: VendedorDto) {

    createVendedorDto.created_at = new Date();
    createVendedorDto.updated_at = new Date();

    return this.vendedorService.create(createVendedorDto);
  }

  @Get()
  findAll() {
    return this.vendedorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.vendedorService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVendedorDto: UpdateVendedorDto) {
    updateVendedorDto.updated_at = new Date();
    return this.vendedorService.update(+id, updateVendedorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.vendedorService.remove(+id);
  }
}
