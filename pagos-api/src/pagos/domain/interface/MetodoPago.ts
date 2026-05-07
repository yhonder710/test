export interface MetodoPago {
  pagar(monto: number): Promise<void>;
}
