import { Module } from '@nestjs/common';
import { PagoController } from './presentation/pagos.controller';
import { LOGGER, METODO_PAGO } from '../shared/tokens/pago.tokens';
import { PagoPaypal, PagoTarjeta } from './infrastructure/Pago';
import { ConsoleLogger } from './infrastructure/Logger';
import { ProcesarPagoUseCase } from './application/use-cases/pagosUseCase';
import { DescuentoFactory } from './application/factories/descuento.factory';
import { DescuentoFijo } from './domain/strategies/DescuentoFijo';
import { DescuentoPorcentaje } from './domain/strategies/DescuentoPorcentaje';
import { DescuentoVip } from './domain/strategies/DescuentoVip';

@Module({
  controllers: [PagoController],
  providers: [
    DescuentoFactory,
    DescuentoFijo,
    DescuentoPorcentaje,
    DescuentoVip,
    ProcesarPagoUseCase,

    { provide: METODO_PAGO, useClass: PagoPaypal },
    { provide: LOGGER, useClass: ConsoleLogger },
  ],
  exports: [METODO_PAGO],
})
export class PagosModule {}
