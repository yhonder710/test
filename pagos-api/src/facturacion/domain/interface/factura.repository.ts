import { Factura } from '../entities/factura.entity';

export interface FacturaRepository {
  guardar(factura: Factura): Promise<void>;
}
