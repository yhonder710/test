import { Injectable } from '@nestjs/common';
import type { Logger } from '../domain/interface/Logger';

@Injectable()
export class ConsoleLogger implements Logger {
  log(msg: string) {
    console.log('LOG:', msg);
  }
}
