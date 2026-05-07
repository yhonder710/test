import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { GenerarFacturaUseCase } from '../application/generarFactura.useCase';
import { PagoCompletadoEvent } from '../../shared/events/pagocompletado.event';

@Injectable()
export class PagoListener {
  constructor(private generarFactura: GenerarFacturaUseCase) {}

  @OnEvent('pago.completado')
  async handle(event: PagoCompletadoEvent) {
    await this.generarFactura.ejecutar(event.ordenId, event.monto);
  }
}
