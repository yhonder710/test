export interface Notificacion {
  enviar(msg: string): Promise<void>;
}
