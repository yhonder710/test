import { Orden } from "../entities/Orden";

export interface OrdenRepository {
  guardar(orden: Orden): Promise<void>;
}
