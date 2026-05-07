import { Logger } from "../../domain/interfaces/Logger";

export class ConsoleLogger implements Logger {
  log(mensaje: string) {
    console.log("LOG:", mensaje);
  }
}

export class FileLogger implements Logger {
  log(mensaje: string) {
    console.log("FileLogger:", mensaje)
  }
}
