export class Orden {
  constructor(
    public id: string,
    public monto: number,
    public descuento: number,
    public estado: 'pendiente' | 'pagado' = 'pendiente',
  ) {}

  marcarPagada() {
    this.estado = 'pagado';
  }
}
