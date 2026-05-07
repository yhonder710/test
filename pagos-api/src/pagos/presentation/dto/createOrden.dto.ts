import { IsNumber, IsString } from 'class-validator';
import type { TypeDescuento } from '../../domain/interface/Descuento';

export class CrearPagoDto {
  @IsString()
  id!: string;

  @IsNumber()
  monto!: number;

  @IsNumber()
  descuento!: number;

  @IsString()
  tipo!: TypeDescuento;
}
