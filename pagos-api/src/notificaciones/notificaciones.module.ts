import { Module } from '@nestjs/common';
import { NotificacionesController } from './presentation/notificaciones.controller';
import { NotificacionCaseUse } from './application/notificacionCaseUse';
import { EmailService, SmsService } from './infrastructure/Notificación';
import { NOTIFICACION } from '../shared/tokens/notificacion.token';
import { NotificacionListener } from './listeners/notificacion.listeners';

@Module({
  controllers: [NotificacionesController],
  providers: [
    NotificacionListener,
    NotificacionCaseUse,
    { provide: NOTIFICACION, useClass: EmailService },
  ],
})
export class NotificacionesModule {}
