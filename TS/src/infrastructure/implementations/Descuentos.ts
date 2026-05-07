import { Descuento } from "../../domain/interfaces/Descuento";

export class SinDescuento implements Descuento {
  aplicar(monto: number): number {
    return monto;
  }
}

export class DescuentoFijo implements Descuento {
  constructor(private valor: number) {}

  aplicar(monto: number): number {
    return monto - this.valor;
  }
}

export class DescuentoPorcentaje implements Descuento {
  constructor(private porcentaje: number) {}

  aplicar(monto: number): number {
    return monto - (monto * this.porcentaje) / 100;
  }
}
