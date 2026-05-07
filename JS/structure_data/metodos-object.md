# Métodos de Object en JavaScript

## Métodos Estáticos

### Object.keys()
Retorna un array con las claves del objeto.
```javascript
let obj = { a: 1, b: 2, c: 3 };
Object.keys(obj); // ['a', 'b', 'c']
```

### Object.values()
Retorna un array con los valores del objeto.
```javascript
let obj = { a: 1, b: 2, c: 3 };
Object.values(obj); // [1, 2, 3]
```

### Object.entries()
Retorna un array de pares [clave, valor].
```javascript
let obj = { a: 1, b: 2 };
Object.entries(obj); // [['a', 1], ['b', 2]]
```

### Object.fromEntries()
Crea un objeto desde un array de pares [clave, valor].
```javascript
let entries = [['a', 1], ['b', 2]];
Object.fromEntries(entries); // { a: 1, b: 2 }
```

---

## Creación y Clonación

### Object.create()
Crea un objeto con un prototipo específico.
```javascript
let proto = { greet() { return 'Hola'; } };
let obj = Object.create(proto);
obj.name = 'Ana';
```

### Object.assign()
Copia propiedades de uno o más objetos.
```javascript
let target = { a: 1 };
let source = { b: 2, c: 3 };
Object.assign(target, source); // { a: 1, b: 2, c: 3 }

// Clonar
let clone = Object.assign({}, source);
```

### Object.seal()
Impide agregar/eliminar propiedades (permite modificar existentes).
```javascript
let obj = { a: 1 };
Object.seal(obj);
obj.a = 2; // ✓
obj.b = 3; // ✗ Ignorado
delete obj.a; // ✗ Ignorado
Object.isSealed(obj); // true
```

### Object.freeze()
Impide todo cambio en el objeto.
```javascript
let obj = { a: 1 };
Object.freeze(obj);
obj.a = 2; // ✗ Ignorado en modo estricto
obj.b = 3; // ✗ Ignorado
delete obj.a; // ✗ Ignorado
Object.isFrozen(obj); // true
```

---

## Propiedades y Descriptores

### Object.hasOwn()
Verifica si la propiedad existe directamente (no del prototipo).
```javascript
let proto = { inherited: 1 };
let obj = Object.create(proto);
obj.own = 2;

Object.hasOwn(obj, 'own'); // true
Object.hasOwn(obj, 'inherited'); // false
```

### Object.hasOwnProperty()
Versión legacy de hasOwn().
```javascript
let obj = { a: 1 };
obj.hasOwnProperty('a'); // true
obj.hasOwnProperty('b'); // false
```

### Object.propertyIsEnumerable()
Verifica si la propiedad es enumerable.
```javascript
let obj = { a: 1 };
obj.propertyIsEnumerable('a'); // true
```

### Object.getOwnPropertyNames()
Retorna todas las propiedades propias (incluyendo no enumerables).
```javascript
let obj = { a: 1 };
Object.defineProperty(obj, 'b', { value: 2, enumerable: false });
Object.getOwnPropertyNames(obj); // ['a', 'b']
```

### Object.getOwnPropertySymbols()
Retorna propiedades con clave Symbol.
```javascript
let sym = Symbol('test');
let obj = { [sym]: 1 };
Object.getOwnPropertySymbols(obj); // [Symbol(test)]
```

### Object.getOwnPropertyDescriptors()
Retorna los descriptores de todas las propiedades.
```javascript
let obj = { a: 1 };
Object.getOwnPropertyDescriptors(obj);
// { a: { value: 1, writable: true, enumerable: true, configurable: true } }
```

---

## Descriptores de Propiedad

### Object.defineProperty()
Define una propiedad con descriptores específicos.
```javascript
let obj = {};
Object.defineProperty(obj, 'name', {
  value: 'Ana',
  writable: false,    // No modificable
  enumerable: true,   // Aparece en keys
  configurable: false // No eliminable ni redefinible
});
```

### Object.defineProperties()
Define múltiples propiedades.
```javascript
let obj = {};
Object.defineProperties(obj, {
  name: { value: 'Ana', writable: true },
  age: { value: 30, writable: false }
});
```

### Object.getOwnPropertyDescriptor()
Retorna el descriptor de una propiedad.
```javascript
let obj = { a: 1 };
Object.getOwnPropertyDescriptor(obj, 'a');
// { value: 1, writable: true, enumerable: true, configurable: true }
```

---

## Prototipo y Herencia

### Object.getPrototypeOf()
Retorna el prototipo del objeto.
```javascript
let proto = { a: 1 };
let obj = Object.create(proto);
Object.getPrototypeOf(obj) === proto; // true
```

### Object.setPrototypeOf()
Establece el prototipo del objeto.
```javascript
let proto = { a: 1 };
let obj = {};
Object.setPrototypeOf(obj, proto);
obj.a; // 1
```

### Object.is()
Determina si dos valores son iguales (como === pero trata NaN y +0/-0 correctamente).
```javascript
Object.is(1, 1); // true
Object.is(NaN, NaN); // true (=== retorna false)
Object.is(0, -0); // false (=== retorna true)
Object.is({}, {}); // false (referencias distintas)
```

### Object.isExtensible()
Verifica si se pueden agregar propiedades.
```javascript
let obj = { a: 1 };
Object.isExtensible(obj); // true
Object.preventExtensions(obj);
Object.isExtensible(obj); // false
```

### Object.isSealed()
Verifica si el objeto está sellado.
```javascript
let obj = { a: 1 };
Object.seal(obj);
Object.isSealed(obj); // true
```

### Object.isFrozen()
Verifica si el objeto está congelado.
```javascript
let obj = { a: 1 };
Object.freeze(obj);
Object.isFrozen(obj); // true
```

---

## Métodos de Prototipo (en todos los objetos)

### toString()
Retorna string representando el objeto.
```javascript
let obj = { a: 1 };
obj.toString(); // "[object Object]"

// Modificar para clases personalizadas
class Persona {
  constructor(nombre) {
    this.nombre = nombre;
  }
  toString() {
    return `Persona: ${this.nombre}`;
  }
}
```

### valueOf()
Retorna el valor primitivo del objeto.
```javascript
let obj = { a: 1 };
obj.valueOf(); // { a: 1 }

// Útil con Date
let fecha = new Date();
fecha.valueOf(); // Timestamp en ms
```

### toLocaleString()
Retorna string formateado según locale.
```javascript
let obj = { a: 1 };
obj.toLocaleString(); // "[object Object]"

// Usado por Date, Number, Array
let num = 1234.56;
num.toLocaleString('es-ES'); // "1.234,56"
```

---

## Ejemplo Práctico: Clonación Profunda

```javascript
function deepClone(obj) {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }
  
  if (Array.isArray(obj)) {
    return obj.map(item => deepClone(item));
  }
  
  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => 
      [key, deepClone(value)]
    )
  );
}

let original = { a: 1, b: { c: 2, d: [3, 4] } };
let clone = deepClone(original);
clone.b.d[0] = 99;
console.log(original.b.d[0]); // 3 (original no modificado)
```

---

## Ejemplo Práctico: Mergear Objetos

```javascript
let defaults = { theme: 'light', lang: 'es', fontSize: 14 };
let userPrefs = { theme: 'dark', fontSize: 16 };

// Con Object.assign
let settings = Object.assign({}, defaults, userPrefs);
// { theme: 'dark', lang: 'es', fontSize: 16 }

// Con spread operator
let settings2 = { ...defaults, ...userPrefs };
// { theme: 'dark', lang: 'es', fontSize: 16 }
```

---

## Ejemplo Práctico: Map desde Objeto

```javascript
let prices = { apple: 100, banana: 50, orange: 75 };

// keys
Object.keys(prices).forEach(fruit => {
  console.log(`${fruit}: $${prices[fruit]}`);
});

// values (precio mayor a 60)
let expensive = Object.values(prices).filter(p => p > 60);
// [100, 75]

// entries (aumento de 10%)
let updated = Object.fromEntries(
  Object.entries(prices).map(([fruit, price]) => 
    [fruit, price * 1.1]
  )
);
// { apple: 110, banana: 55, orange: 82.5 }
```

---

## Resumen Rápido

| Método | Descripción |
|--------|-------------|
| Object.keys() | Array de claves |
| Object.values() | Array de valores |
| Object.entries() | Array de [clave, valor] |
| Object.fromEntries() | Objeto desde entries |
| Object.assign() | Copia/fusiona objetos |
| Object.create() | Crea con prototipo |
| Object.seal() | Impide add/remove |
| Object.freeze() | Impide todo cambio |
| Object.hasOwn() | Verifica propiedad propia |
| Object.defineProperty() | Define propiedad detallada |
| Object.getPrototypeOf() | Obtiene prototipo |
| Object.setPrototypeOf() | Establece prototipo |
| Object.is() | Comparación estricta |
| Object.getOwnPropertyNames() | Todas las propiedades |
| Object.getOwnPropertySymbols() | Propiedades Symbol |
| Object.isFrozen/Sealed/Extensible | Estados del objeto |
