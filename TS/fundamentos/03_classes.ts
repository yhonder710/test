interface Transacciones {
  tipo: 'deposito' | 'retiro'
  monto: number
}

class CuentaBancaria {
  private saldo: number
  public titular: string
  private historialDeTransacciones: Transacciones[] = []

  constructor(titula: string, saldo: number) {
    this.titular = titula
    this.saldo = saldo
  }

  set depositar(monto: number){
    if (monto <= 0) {
      throw new Error("Monto inválido");
    }
    const newDeposito = new Movimiento('deposito', monto)
    this.historialDeTransacciones.push(newDeposito)
    this.saldo += monto
  }


  set retirar(monto: number) {
    if (monto > this.saldo) {
      throw new Error("Fondos insuficientes");
    } else if (monto <= 0) {
      throw new Error("Monto inválido");
    }
    const newRetiro = new Movimiento('retiro', monto)
    this.historialDeTransacciones.push(newRetiro)

    this.saldo -= monto
  }

  get verSaldo(): void {
    return console.log(`Tu saldo es de ${this.saldo}$`)
  }

  get verHistorialTransacciones(): void {
    return console.log(this.historialDeTransacciones)
  }
}

class Movimiento implements Transacciones  {
  tipo: 'deposito' | 'retiro'
  monto: number
  fecha: Date

  constructor(tipo: 'deposito' | 'retiro', monto: number) {
    this.tipo = tipo
    this.monto = monto
    this.fecha = new Date()
  }
}

const persona_1 = new CuentaBancaria('Pablo escobar', 1000)

persona_1.depositar = 200
persona_1.retirar = 500
persona_1.depositar = 20
persona_1.depositar = 400
persona_1.retirar = 500


persona_1.verHistorialTransacciones
console.log(persona_1.titular)
persona_1.verSaldo
