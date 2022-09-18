import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VendaService } from './venda.service';
import { VendaDto } from './dto/create-venda.dto';
import { UpdateVendaDto } from './dto/update-venda.dto';

@Controller('venda')
export class VendaController {
  constructor(private readonly vendaService: VendaService) {}

  @Post()
  create(@Body() createVendaDto: VendaDto) {

    createVendaDto.created_at = new Date();
    createVendaDto.updated_at = new Date();
    createVendaDto.status = 1; // 1 = "Aguardando pagamento"

    return this.vendaService.create(createVendaDto);
  }

  @Get()
  findAll() {
    return this.vendaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.vendaService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateVendaDto: UpdateVendaDto) {
    updateVendaDto.updated_at = new Date();
    let venda = await this.vendaService.findOne(parseInt(id));

    if (updateVendaDto.status > 4)
      throw new Error("Status inexistente!");

    if (venda.status == 2)
      throw new Error("Não é possível alterar o status de uma compra cancelada.");

    if (venda.status > updateVendaDto.status)
      throw new Error("Não é possível retroceder no status da venda.");

    return this.vendaService.update(+id, updateVendaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.vendaService.remove(+id);
  }
}
