export const titulo = "Sets";
export const definicion = "Set es una colección de valores únicos. No admite duplicados y mantiene el orden de inserción al iterar.";
export const operaciones = [
  { nombre: "add(valor)", descripcion: "agrega un valor si no está presente" },
  { nombre: "has(valor)", descripcion: "devuelve true si existe" },
  { nombre: "delete(valor)", descripcion: "elimina valor si existe" },
  { nombre: "clear()", descripcion: "limpia el set" }
];
export const sizeProp = "size";
export const complejidad = { add: "O(1)", has: "O(1)", delete: "O(1)", clear: "O(n)" };
export const ejemplo = `const s = new Set([1,2,2,3]);
console.log(s.size); // 3
s.add(4); console.log(s);
s.delete(2); console.log(s);`;
export const ejercicios = [
  "Dado un array, elimina duplicados usando Set.",
  "Dado dos arrays, forma su intersección usando Sets.",
  "Dado dos arrays, forma su unión usando Sets."
];
