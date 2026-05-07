import { Controller, Post, Body } from '@nestjs/common';
import { Orden } from '../domain/entities/orden.entity';
import { CrearPagoDto } from './dto/createOrden.dto';
import { ProcesarPagoUseCase } from '../application/use-cases/pagosUseCase';

@Controller('pagos')
export class PagoController {
  constructor(private useCase: ProcesarPagoUseCase) { }

  @Post()
  async pagar(@Body() body: CrearPagoDto) {
    const orden = new Orden(body.id, body.monto, body.descuento);

    await this.useCase.ejecutar(orden, orden.descuento, body.tipo);

    return {
      status: 'ok',
      orden,
    };
  }
}
