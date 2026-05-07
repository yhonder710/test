import { Inject, Injectable } from '@nestjs/common';
import type { Notificacion } from '../domain/interfaces/notificacion';
import { NOTIFICACION } from '../../shared/tokens/notificacion.token';

@Injectable()
export class NotificacionCaseUse {
  private notificacionProcesada = new Set<string>();
  constructor(@Inject(NOTIFICACION) private notificacion: Notificacion) {}

  async ejecutar(msj: string, id: string) {
    if (this.notificacionProcesada.has(id)) {
      console.log('⚠️  Notificacion duplicada evitada');
      return;
    }
    this.notificacionProcesada.add(id);

    await this.notificacion.enviar(msj);
  }
}
