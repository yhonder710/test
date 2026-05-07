export interface Descuento {
  aplicar(monto: number, calcularDescuento: number): Promise<number>;
}

export type TypeDescuento = 'fijo' | 'porcentaje' | 'vip';
