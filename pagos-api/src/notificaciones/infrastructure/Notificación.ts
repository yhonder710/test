import { Injectable } from '@nestjs/common';
import { Notificacion } from '../domain/interfaces/notificacion';

@Injectable()
export class EmailService implements Notificacion {
  async enviar(msg: string) {
    console.log('📡 Email:', msg);
  }
}

@Injectable()
export class SmsService implements Notificacion {
  async enviar(msg: string) {
    console.log('📡 SMS:', msg);
  }
}
