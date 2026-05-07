export const titulo = "Hash Tables";
export const definicion = "Estructura de datos que asocia claves con valores a través de una función hash.";
export const conceptos = [
  "Hash function (función hash)",
  "Colisiones (resolución: chaining, open addressing)",
  "Operaciones: put, get, remove"
];
export const operaciones = [
  { nombre: "put(key, value)", descripcion: "inserta o actualiza valor para la clave" },
  { nombre: "get(key)", descripcion: "devuelve el valor asociado a la clave" },
  { nombre: "remove(key)", descripcion: "elimina la clave-valor" }
];
export const complejidad = { put: "O(1) promedio", get: "O(1) promedio", remove: "O(1) promedio" };
export const ejemplo = `class HashTable{ constructor(size=16){ this.buckets = Array.from({length:size}, ()=>[]); }
  hash(key){ return key.toString().length % this.buckets.length; }
  put(key, value){ const idx = this.hash(key); this.buckets[idx].push([key, value]); }
}`; 
