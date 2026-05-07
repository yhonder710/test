import { Injectable } from '@nestjs/common';
import { Descuento } from '../interface/Descuento';

@Injectable()
export class DescuentoFijo implements Descuento {
  async aplicar(monto: number, calcularDescuento: number) {
    return monto - calcularDescuento;
  }
}
