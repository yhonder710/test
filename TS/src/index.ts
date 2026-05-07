import { v4 as uuidv4 } from 'uuid';
const myUUID = uuidv4();

import { ProcesadorPago } from "./application/services/PagoService";
import { Orden } from "./domain/entities/Orden";
import { EmailNotificacion, SMSNotificacion } from "./infrastructure/implementations/Notifications";
import { ConsoleLogger, FileLogger } from "./infrastructure/implementations/Logger";
import { PagoCrypto, PagoPaypal, PagoTarjeta } from './infrastructure/implementations/Pago';
import { DescuentoFijo, DescuentoPorcentaje, SinDescuento } from './infrastructure/implementations/Descuentos';
import { PagoController } from './Controller/PagoController';
import { TestOrdenRepository } from './Repository/OrdenRepository';


const pago = new PagoTarjeta();
const notificacion = new SMSNotificacion();
const logger = new ConsoleLogger();
const repository = new TestOrdenRepository()

const descuento = new DescuentoPorcentaje(20);

const procesador = new ProcesadorPago(
  pago,
  notificacion,
  logger,
  descuento,
  repository
);

const controller = new PagoController(procesador);

controller.pagar({
  id: myUUID,
  monto: 100
})

controller.pagar({
  id: myUUID,
  monto: 200
})


