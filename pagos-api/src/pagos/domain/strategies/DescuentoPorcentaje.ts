import { Injectable } from '@nestjs/common';
import type { Descuento } from '../interface/Descuento';

@Injectable()
export class DescuentoPorcentaje implements Descuento {
  async aplicar(monto: number, calcularDescuento: number) {
    return monto - (monto * calcularDescuento) / 100;
  }
}
