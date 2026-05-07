import { Module } from '@nestjs/common';
import { FacturacionController } from './presentation/facturacion.controller';
import { GenerarFacturaUseCase } from './application/generarFactura.useCase';
import { FACTURA_REPOSITORY } from '../shared/tokens/factura.tokens';
import { PagoListener } from './listeners/pago.listener';
import { FacturaRepositoryImpl } from './infrastructure/repository/factura.repository.impl';

@Module({
  controllers: [FacturacionController],
  providers: [
    PagoListener,
    GenerarFacturaUseCase,
    { provide: FACTURA_REPOSITORY, useClass: FacturaRepositoryImpl },
  ],
})
export class FacturacionModule {}
