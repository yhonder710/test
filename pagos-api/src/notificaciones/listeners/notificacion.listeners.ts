import { Injectable } from '@nestjs/common';
import { NotificacionCaseUse } from '../application/notificacionCaseUse';
import { OnEvent } from '@nestjs/event-emitter';
import { NotificacionEvent } from '../../shared/events/notificacion.event';

@Injectable()
export class NotificacionListener {
  constructor(private notificacion: NotificacionCaseUse) {}

  @OnEvent('pago.completado.notificacion')
  async handle(event: NotificacionEvent) {
    await this.notificacion.ejecutar(event.msj, event.id);
  }
}
