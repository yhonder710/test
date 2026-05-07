import { Injectable } from '@nestjs/common';
import { Descuento } from '../interface/Descuento';

@Injectable()
export class DescuentoVip implements Descuento {
  async aplicar(monto: number, calcularDescuento: number) {
    return monto - (monto * 25) / 100;
  }
}
