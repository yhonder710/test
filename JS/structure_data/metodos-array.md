# Métodos de Array en JavaScript

## Métodos Mutadores (Modifican el array original)

### push()
Agrega elementos al final del array.
```javascript
let arr = [1, 2, 3];
arr.push(4); // [1, 2, 3, 4]
arr.push(5, 6); // [1, 2, 3, 4, 5, 6]
```

### pop()
Elimina el último elemento y lo devuelve.
```javascript
let arr = [1, 2, 3];
let last = arr.pop(); // last = 3, arr = [1, 2]
```

### shift()
Elimina el primer elemento y lo devuelve.
```javascript
let arr = [1, 2, 3];
let first = arr.shift(); // first = 1, arr = [2, 3]
```

### unshift()
Agrega elementos al inicio del array.
```javascript
let arr = [1, 2, 3];
arr.unshift(0); // [0, 1, 2, 3]
arr.unshift(-2, -1); // [-2, -1, 0, 1, 2, 3]
```

### splice()
Agrega, elimina o reemplaza elementos.
```javascript
let arr = [1, 2, 3, 4, 5];
// Eliminar
arr.splice(1, 2); // [1, 4, 5] (elimina 2 elementos desde índice 1)
// Agregar
arr.splice(1, 0, 99); // [1, 99, 4, 5] (agrega 99 en índice 1)
// Reemplazar
arr.splice(1, 1, 100); // [1, 100, 4, 5] (reemplaza 1 elemento en índice 1)
```

### sort()
Ordena el array (modifica el original).
```javascript
let arr = [3, 1, 4, 1, 5];
arr.sort(); // [1, 1, 3, 4, 5]

// Orden numérico
arr.sort((a, b) => a - b); // ascendente
arr.sort((a, b) => b - a); // descendente
```

### reverse()
Invierte el orden del array.
```javascript
let arr = [1, 2, 3];
arr.reverse(); // [3, 2, 1]
```

### fill()
Rellena elementos con un valor estático.
```javascript
let arr = [1, 2, 3, 4];
arr.fill(0); // [0, 0, 0, 0]
arr.fill(5, 1, 3); // [0, 5, 5, 0] (desde índice 1 hasta 3)
```

### copyWithin()
Copia una porción del array a otra ubicación.
```javascript
let arr = [1, 2, 3, 4, 5];
arr.copyWithin(0, 3); // [4, 5, 3, 4, 5] (copia desde índice 3 al inicio)
```

---

## Métodos de Acceso (No modifican el array original)

### concat()
Combina arrays.
```javascript
let a = [1, 2];
let b = [3, 4];
let c = a.concat(b); // [1, 2, 3, 4]
let d = a.concat(5, [6, 7]); // [1, 2, 5, 6, 7]
```

### slice()
Extrae una porción del array.
```javascript
let arr = [1, 2, 3, 4, 5];
arr.slice(1, 3); // [2, 3]
arr.slice(2); // [3, 4, 5]
arr.slice(-2); // [4, 5]
```

### indexOf()
Retorna el índice de la primera aparición.
```javascript
let arr = [1, 2, 3, 2, 1];
arr.indexOf(2); // 1
arr.indexOf(7); // -1
```

### lastIndexOf()
Retorna el índice de la última aparición.
```javascript
let arr = [1, 2, 3, 2, 1];
arr.lastIndexOf(2); // 3
```

### includes()
Verifica si existe un elemento.
```javascript
let arr = [1, 2, 3];
arr.includes(2); // true
arr.includes(7); // false
```

### join()
Une elementos en un string.
```javascript
let arr = ['a', 'b', 'c'];
arr.join(); // "a,b,c"
arr.join('-'); // "a-b-c"
arr.join(' '); // "a b c"
```

### toString()
Convierte el array a string.
```javascript
let arr = [1, 2, 3];
arr.toString(); // "1,2,3"
```

### toLocaleString()
Convierte a string con formato local.
```javascript
let arr = [new Date(), 1000];
arr.toLocaleString(); // "4/2/2026, 10:30:00 AM, 1,000"
```

### at()
Retorna elemento en el índice especificado (soporta negativos).
```javascript
let arr = [1, 2, 3];
arr.at(0); // 1
arr.at(-1); // 3
```

---

## Métodos de Iteración

### forEach()
Ejecuta una función por cada elemento.
```javascript
let arr = [1, 2, 3];
arr.forEach((item, index) => {
  console.log(`${index}: ${item}`);
});
// 0: 1
// 1: 2
// 2: 3
```

### map()
Crea un nuevo array con los resultados.
```javascript
let arr = [1, 2, 3];
let doubled = arr.map(x => x * 2); // [2, 4, 6]
```

### filter()
Crea un array con elementos que pasan la prueba.
```javascript
let arr = [1, 2, 3, 4, 5];
let evens = arr.filter(x => x % 2 === 0); // [2, 4]
```

### reduce()
Reduce el array a un solo valor.
```javascript
let arr = [1, 2, 3, 4];
let sum = arr.reduce((acc, curr) => acc + curr, 0); // 10

// Con índice inicial
let max = arr.reduce((a, b) => a > b ? a : b); // 4
```

### reduceRight()
Igual a reduce pero de derecha a izquierda.
```javascript
let arr = [[1, 2], [3, 4], [5, 6]];
let flat = arr.reduceRight((a, b) => a.concat(b)); // [5, 6, 3, 4, 1, 2]
```

### find()
Retorna el primer elemento que cumple la condición.
```javascript
let arr = [1, 2, 3, 4];
let found = arr.find(x => x > 2); // 3
```

### findIndex()
Retorna el índice del primer elemento que cumple.
```javascript
let arr = [1, 2, 3, 4];
let idx = arr.findIndex(x => x > 2); // 2
```

### findLast()
Retorna el último elemento que cumple la condición.
```javascript
let arr = [1, 2, 3, 4];
let found = arr.findLast(x => x > 2); // 4
```

### findLastIndex()
Retorna el índice del último elemento que cumple.
```javascript
let arr = [1, 2, 3, 4];
let idx = arr.findLastIndex(x => x > 2); // 3
```

### some()
Verifica si algún elemento cumple la condición.
```javascript
let arr = [1, 2, 3, 4];
arr.some(x => x > 3); // true
arr.some(x => x > 5); // false
```

### every()
Verifica si todos los elementos cumplen la condición.
```javascript
let arr = [1, 2, 3, 4];
arr.every(x => x > 0); // true
arr.every(x => x > 2); // false
```

### flat()
Aplana arrays anidados.
```javascript
let arr = [1, [2, [3, [4]]]];
arr.flat(); // [1, 2, [3, [4]]]
arr.flat(2); // [1, 2, 3, [4]]
arr.flat(Infinity); // [1, 2, 3, 4]
```

### flatMap()
Combina map() y flat() en uno.
```javascript
let arr = [1, 2, 3];
arr.flatMap(x => [x, x * 2]); // [1, 2, 2, 4, 3, 6]
```

---

## Métodos de Búsqueda y Creación

### from()
Crea un array desde un objeto iterable.
```javascript
Array.from('abc'); // ['a', 'b', 'c']
Array.from([1, 2, 3], x => x * 2); // [2, 4, 6]
```

### of()
Crea un array con los argumentos dados.
```javascript
Array.of(1, 2, 3); // [1, 2, 3]
Array.of(7); // [7]
```

### isArray()
Verifica si el valor es un array.
```javascript
Array.isArray([]); // true
Array.isArray({}); // false
Array.isArray('abc'); // false
```

### entries()
Retorna un iterador de pares [índice, valor].
```javascript
let arr = ['a', 'b', 'c'];
for (let [index, value] of arr.entries()) {
  console.log(index, value);
}
// 0 'a'
// 1 'b'
// 2 'c'
```

### keys()
Retorna un iterador de claves (índices).
```javascript
let arr = ['a', 'b', 'c'];
[...arr.keys()]; // [0, 1, 2]
```

### values()
Retorna un iterador de valores.
```javascript
let arr = ['a', 'b', 'c'];
[...arr.values()]; // ['a', 'b', 'c']
```

---

## Métodos de Ordenamiento (ES2023+)

### toSorted()
Ordena sin modificar el original.
```javascript
let arr = [3, 1, 4, 1, 5];
let sorted = arr.toSorted(); // [1, 1, 3, 4, 5]
// arr sigue siendo [3, 1, 4, 1, 5]
```

### toReversed()
Invierte sin modificar el original.
```javascript
let arr = [1, 2, 3];
let reversed = arr.toReversed(); // [3, 2, 1]
// arr sigue siendo [1, 2, 3]
```

### toSpliced()
Splice sin modificar el original.
```javascript
let arr = [1, 2, 3, 4, 5];
let newArr = arr.toSpliced(1, 2, 99); // [1, 99, 4, 5]
// arr sigue siendo [1, 2, 3, 4, 5]
```

### with()
Reemplaza un elemento sin modificar el original.
```javascript
let arr = [1, 2, 3];
let newArr = arr.with(1, 99); // [1, 99, 3]
// arr sigue siendo [1, 2, 3]
```

---

## Resumen Rápido

| Método | Descripción | Modifica Original |
|--------|-------------|-------------------|
| push() | Agrega al final | Sí |
| pop() | Elimina del final | Sí |
| shift() | Elimina del inicio | Sí |
| unshift() | Agrega al inicio | Sí |
| splice() | Agrega/elimina/reemplaza | Sí |
| sort() | Ordena | Sí |
| reverse() | Invierte | Sí |
| fill() | Rellena | Sí |
| concat() | Combina arrays | No |
| slice() | Extrae porción | No |
| join() | Une a string | No |
| map() | Transforma | No |
| filter() | Filtra | No |
| reduce() | Reduce a un valor | No |
| find() | Busca elemento | No |
| some() | Verifica alguno | No |
| every() | Verifica todos | No |
| flat() | Aplana | No |
| includes() | Verifica existencia | No |
| indexOf() | Busca índice | No |
