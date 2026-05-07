import { Controller, Get } from '@nestjs/common';

@Controller('facturacion')
export class FacturacionController {
  @Get()
  listar() {
    return [];
  }
}
