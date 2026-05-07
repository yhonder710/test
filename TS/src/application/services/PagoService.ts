import { Orden } from "../../domain/entities/Orden";
import { Descuento } from "../../domain/interfaces/Descuento";
import { Logger } from "../../domain/interfaces/Logger";
import { Notificacion } from "../../domain/interfaces/Notificación";
import { MetodoPago } from "../../domain/interfaces/Pago";
import { TestOrdenRepository } from "../../Repository/OrdenRepository";

export class ProcesadorPago {
  constructor(
    private metodoPago: MetodoPago,
    private notificacion: Notificacion,
    private logger: Logger,
    private descuento: Descuento,
    private testOrdenRepository: TestOrdenRepository
  ) {}

  setMetodoPago(metodo: MetodoPago) {
    this.metodoPago = metodo;
  }

  async procesar(orden: Orden) {
    try {
      this.logger.log("Iniciando pago");

      if (orden.monto <= 0) throw new Error('El monto ingresado es invalido')

      const montoFinal = this.descuento.aplicar(orden.monto);

      this.logger.log(`Monto con descuento: ${montoFinal}`);

      await this.metodoPago.pagar(montoFinal);

      orden.marcarComoPagada();

      this.notificacion.enviar("Pago exitoso");
      await this.testOrdenRepository.guardar(orden)

      this.logger.log("Pago completado");
    } catch (error) {
      console.error(error)
    }
  }
}


