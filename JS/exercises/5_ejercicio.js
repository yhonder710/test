class Polygon {
    area() {
        throw new Error("Método 'area()' debe ser implementado");
    }
    printArea() {
        throw new Error("Método 'printArea()' debe ser implementado");
    }
}

class Triangle extends Polygon {
    constructor(base, height) {
        super();
        this.base = base;
        this.height = height;
    }

    area() {
        return (this.base * this.height) / 2;
    }
    printArea() {
        console.log(`El área del triángulo es ${this.area()}`);
    }
}

class Rectangle extends Polygon {
    constructor(length, width) {
        super();
        this.length = length;
        this.width = width;
    }
    area() {
        return this.length * this.width;
    }
    printArea() {
        console.log(`El área del rectángulo es ${this.area()}`);
    }
}

class Square extends Polygon {
    constructor(side) {
        super();
        this.side = side;
    }
    area() {
        return this.side * this.side;
    }
    printArea() {
        console.log(`El área del cuadrado es ${this.area()}`);
    }
}

function area(polygon) {
    polygon.printArea();
    return polygon.area();
}

function main() {
    area(new Triangle(10.0, 5.0));
    area(new Rectangle(5.0, 7.0));
    area(new Square(4.0));
}

// Ejecutar
main();
