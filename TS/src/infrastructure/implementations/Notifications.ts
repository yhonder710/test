import { Notificacion } from "../../domain/interfaces/Notificación";

export class EmailNotificacion implements Notificacion {
  enviar(mensaje: string) {
    console.log("Email:", mensaje);
  }
}

export class SMSNotificacion implements Notificacion {
  enviar(mensaje: string) {
    console.log("SMS:", mensaje);
  }
}
