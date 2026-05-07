class Weapon {
  constructor(name, type, price, damage, charger ){
    this.name = name
    this.type = type
    this.price = price
    this.damage = damage
    this.charger = charger
  }

  showInfo() {
    console.log(`Caracteristicas de el arma Nombre: ${this.name}, Tipo: ${this.type} Precio: ${this.price} Daño: ${this.damage} Balas: ${this.charger}`)
  }

  recharge() {
    console.log(`Recargando ${this.name}`)
  }
}

class WeaponPrimary extends Weapon {
  constructor(name, type, price, damage, charger, cadence){
    super(name, type, price, damage, charger)
    this.cadence = cadence
  }

  showInfo() {
    super.showInfo()
    console.log(`Cadencia: ${this.cadence}`);
  }
}

class WeaponSecundary extends Weapon {
  constructor(name, type, price, damage, charger, silent){
    super(name, type, price, damage, charger)
    this.silent = silent
  }

  showInfo() {
    super.showInfo()
    console.log(`Silenciosa : ${this.silent}`);
  }
}

class Shop {
  constructor() {
    this.weapons = []
  }

  addWeapon(name, type, price, damage, charger ) {
    let newWeapon = new Weapon(name, type, price, damage, charger)
    this.weapons.push(newWeapon)
  }

  listWeapon(){
    console.log(this.weapons)
  }

  buyWeapon(name, credits) {
    for (let i = 0; i < this.weapons.length; i++) {
    if (name === this.weapons[i].name) {

      if (credits >= this.weapons[i].price) {
        console.log(`Arma comprada Name: ${name}, Price: ${this.weapons[i].price}`);
      } else {
        console.log("No tienes suficientes creditos");
      }

      return;
    }
  }

  console.log("Arma no encontrada");
  }
}


const weapon1 = new WeaponPrimary("Vandal", "Rifle", 3200, 120, 30, 1.2)
const weapon2 = new WeaponSecundary("Ghost", "Pistola", 500, "(cuerpo/cabeza): 30 / 105 (hasta 30 m)", 15, true)

const shop = new Shop()

//armas
weapon1.showInfo()
weapon2.showInfo()

//tienda
shop.addWeapon("Vandal", "Rifle", 3200, 120, 30)
shop.addWeapon("Ghost", "Pistola", 500, "(cuerpo/cabeza): 30 / 105 (hasta 30 m)", 15)
shop.listWeapon()
shop.buyWeapon('Vandal', 5200)

