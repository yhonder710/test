import { Injectable } from '@nestjs/common';
import { FacturaRepository } from '../../domain/interface/factura.repository';
import { Factura } from '../../domain/entities/factura.entity';

@Injectable()
export class FacturaRepositoryImpl implements FacturaRepository {
  async guardar(factura: Factura): Promise<void> {
    console.log('💾 Guardando factura en DB...', factura);
  }
}
