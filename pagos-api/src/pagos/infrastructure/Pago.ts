import { Injectable } from '@nestjs/common';
import type { MetodoPago } from '../domain/interface/MetodoPago';

@Injectable()
export class PagoTarjeta implements MetodoPago {
  async pagar(monto: number) {
    console.log('Pagando con tarjeta:', monto);
  }
}

@Injectable()
export class PagoCrypto implements MetodoPago {
  async pagar(monto: number) {
    console.log('Pagando con Crypto:', monto);
  }
}

@Injectable()
export class PagoPaypal implements MetodoPago {
  async pagar(monto: number) {
    console.log('Pagando con Paypal:', monto);
  }
}
