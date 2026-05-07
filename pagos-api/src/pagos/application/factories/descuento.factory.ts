import { Injectable } from '@nestjs/common';
import { Descuento } from '../../domain/interface/Descuento';
import { DescuentoFijo } from '../../domain/strategies/DescuentoFijo';
import { DescuentoPorcentaje } from '../../domain/strategies/DescuentoPorcentaje';
import { DescuentoVip } from '../../domain/strategies/DescuentoVip';

@Injectable()
export class DescuentoFactory {
  private estrategias = new Map<string, Descuento>();

  constructor(
    private fijo: DescuentoFijo,
    private porcentaje: DescuentoPorcentaje,
    private vip: DescuentoVip,
  ) {
    this.estrategias.set('fijo', this.fijo);
    this.estrategias.set('porcentaje', this.porcentaje);
    this.estrategias.set('vip', this.vip);
  }

  getDescuento(tipo: string): Descuento {
    const estrategia = this.estrategias.get(tipo);

    if (!estrategia) {
      throw new Error(`Descuento no encontrado: ${tipo}`);
    }

    return estrategia;
  }
}
