import { MetodoPago } from "../../domain/interfaces/Pago";

export class PagoCrypto implements MetodoPago {
  async pagar(monto: number) {
    console.log("Pagando con Crypto:", monto);
  }
}

export class PagoPaypal implements MetodoPago {
  async pagar(monto: number) {
    console.log("Pagando con PayPal:", monto);
  }
}

export class PagoTarjeta implements MetodoPago {
  async pagar(monto: number) {
    console.log("Pagando con tarjeta:", monto);
  }
}
