// 10. CLASES (POO)

console.log("=== DECLARACIÓN DE CLASE ===");
class Persona {
    static tipo = "Ser Humano";

    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar() {
        return `Hola, soy ${this.nombre}`;
    }

    get info() {
        return `${this.nombre}, ${this.edad} años`;
    }

    set cambiarEdad(value) {
        if (value > 0) this.edad = value;
    }
}

const ana = new Persona("Ana", 25);
console.log(ana.saludar());
console.log(ana.info);
ana.cambiarEdad = 26;
console.log(ana.info);
console.log(`Tipo: ${Persona.tipo}`);

console.log("\n=== HERENCIA ===");
class Estudiante extends Persona {
    constructor(nombre, edad, carrera) {
        super(nombre, edad);
        this.carrera = carrera;
    }

    saludar() {
        return `${super.saludar()} y estudio ${this.carrera}`;
    }
}

const juan = new Estudiante("Juan", 20, "Ingeniería");
console.log(juan.saludar());
console.log(juan instanceof Persona);
console.log(juan instanceof Estudiante);

console.log("\n=== MÉTODOS ESTÁTICOS ===");
class Calculadora {
    static sumar(a, b) {
        return a + b;
    }

    static restar(a, b) {
        return a - b;
    }
}
console.log(`10 + 5 = ${Calculadora.sumar(10, 5)}`);

console.log("\n=== CLASES ABSTRACTAS (simuladas) ===");
class Figura {
    constructor() {
        if (this.constructor === Figura) {
            throw new Error("No se puede instanciar clase abstracta");
        }
    }

    calcularArea() {
        throw new Error("Método debe ser implementado");
    }
}

class Rectangulo extends Figura {
    constructor(ancho, alto) {
        super();
        this.ancho = ancho;
        this.alto = alto;
    }

    calcularArea() {
        return this.ancho * this.alto;
    }
}

const rect = new Rectangulo(5, 3);
console.log(`Área rectángulo: ${rect.calcularArea()}`);

console.log("\n=== GETTERS Y SETTERS ESTÁTICOS ===");
class Contador {
    static _valor = 0;

    static get valor() {
        return Contador._valor;
    }

    static set valor(v) {
        Contador._valor = v;
    }
}
Contador.valor = 10;
console.log(`Contador: ${Contador.valor}`);

console.log("\n=== PRIVATE FIELDS (ES2022) ===");
class Usuario {
    #password;

    constructor(nombre, password) {
        this.nombre = nombre;
        this.#password = password;
    }

    verificarPass(pass) {
        return this.#password === pass;
    }
}

const user = new Usuario("admin", "1234");
console.log(`Usuario: ${user.nombre}`);
console.log(`Verificar "1234": ${user.verificarPass("1234")}`);
// console.log(user.#password); // Error: privado

console.log("\n=== MIXINS ===");
const Volador = {
    volar() {
        return `${this.nombre} está volando`;
    }
};

const Nadador = {
    nadar() {
        return `${this.nombre} está nadando`;
    }
};

class Animal {
    constructor(nombre) {
        this.nombre = nombre;
    }
}

Object.assign(Animal.prototype, Volador, Nadador);
const aguila = new Animal("Águila");
console.log(aguila.volar());
