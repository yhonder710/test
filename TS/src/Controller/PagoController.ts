import { ProcesadorPago } from "../application/services/PagoService";
import { Orden } from "../domain/entities/Orden";

export class PagoController {
  constructor(private useCase: ProcesadorPago) {}

  async pagar(req: any) {
    const { id, monto } = req;

    const orden = new Orden(id, monto);

    await this.useCase.procesar(orden);

    return {
      status: "ok",
      orden
    };
  }

}
