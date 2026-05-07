export class PagoCompletadoEvent {
  constructor(
    public ordenId: string,
    public monto: number,
  ) {}
}
