import { Module } from '@nestjs/common';
import { PagosModule } from './pagos/pagos.module';
import { FacturacionModule } from './facturacion/facturacion.module';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { NotificacionesController } from './notificaciones/presentation/notificaciones.controller';
import { NotificacionesModule } from './notificaciones/notificaciones.module';

@Module({
  imports: [
    EventEmitterModule.forRoot(),
    PagosModule,
    FacturacionModule,
    NotificacionesModule,
  ],
  controllers: [NotificacionesController],
  providers: [],
})
export class AppModule {}
