import { Inject, Injectable } from '@nestjs/common';
import type { MetodoPago } from '../../domain/interface/MetodoPago';
import type { Logger } from '../../domain/interface/Logger';

import { Orden } from '../../domain/entities/orden.entity';
import { LOGGER, METODO_PAGO } from '../../../shared/tokens/pago.tokens';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { PagoCompletadoEvent } from '../../../shared/events/pagocompletado.event';
import { NotificacionEvent } from '../../../shared/events/notificacion.event';
import { DescuentoFactory } from '../factories/descuento.factory';
import { TypeDescuento } from '../../domain/interface/Descuento';

@Injectable()
export class ProcesarPagoUseCase {
  constructor(
    @Inject(METODO_PAGO) private metodoPago: MetodoPago,
    @Inject(LOGGER) private logger: Logger,
    private eventEmitter: EventEmitter2,
    private factory: DescuentoFactory,
  ) {}

  async ejecutar(orden: Orden, calcularDescuento: number, type: TypeDescuento) {
    try {
      this.logger.log('Inicio');
      // donde se tiene que crear el objeto de pago es aqui no en el controller

      const estrategia = this.factory.getDescuento(type);

      const montoFinal = await estrategia.aplicar(
        orden.monto,
        calcularDescuento,
      );

      await this.metodoPago.pagar(montoFinal);

      orden.monto = montoFinal;
      orden.marcarPagada();

      this.eventEmitter.emit(
        'pago.completado',
        new PagoCompletadoEvent(orden.id, orden.monto),
      );

      this.eventEmitter.emit(
        'pago.completado.notificacion',
        new NotificacionEvent('Se a realizado la factura y el pago', orden.id),
      );
    } catch (error) {
      console.error(error);
    }
  }
}
