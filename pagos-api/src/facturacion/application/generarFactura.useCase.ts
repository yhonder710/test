import { Injectable, Inject } from '@nestjs/common';
import type { FacturaRepository } from '../domain/interface/factura.repository';
import { Factura } from '../domain/entities/factura.entity';

@Injectable()
export class GenerarFacturaUseCase {
  private facturasProcesadas = new Set<string>();
  constructor(
    @Inject('FACTURA_REPOSITORY')
    private facturaRepo: FacturaRepository,
  ) {}

  async ejecutar(ordenId: string, monto: number) {
    console.log('💳 Pago procesado');

    //IDEMPOTENCIA
    if (this.facturasProcesadas.has(ordenId)) {
      console.log('⚠️  Factura duplicada evitada');
      return;
    }
    this.facturasProcesadas.add(ordenId);

    const newFactura = new Factura(ordenId, monto, new Date());
    await this.facturaRepo.guardar(newFactura);
  }
}
