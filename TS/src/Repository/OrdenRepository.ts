import { Orden } from "../domain/entities/Orden";
import { OrdenRepository } from "../domain/interfaces/Repository";

export class TestOrdenRepository implements OrdenRepository {
  private listOrden: Orden[] = []

  async guardar(orden: Orden){
    this.listOrden.push(orden)
  }
}
