export class Orden {
  constructor(
    public id: string,
    public monto: number,
    public estado: "pendiente" | "pagado" = "pendiente"
  ) {}

  marcarComoPagada() {
    this.estado = "pagado";
  }
}
