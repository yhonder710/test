export const titulo = "Maps";
export const definicion = "Map es una colección de pares clave-valor donde las claves pueden ser de cualquier tipo, incluido objetos. A diferencia de los objetos planos, Map mantiene el orden de inserción y proporciona métodos útiles.";
export const metodos = [
  { nombre: "set(key, value)", descripcion: "asigna o actualiza el valor para la clave" },
  { nombre: "get(key)", descripcion: "devuelve el valor asociado o undefined" },
  { nombre: "has(key)", descripcion: "devuelve true si la clave existe" },
  { nombre: "delete(key)", descripcion: "elimina la entrada" },
  { nombre: "clear()", descripcion: "elimina todas las entradas" },
  { nombre: "size", descripcion: "propiedad con el número de entradas" }
];
export const complejidad = {
  acceso: "O(1) promedio",
  set: "O(1) promedio",
  delete: "O(1) promedio",
  clear: "O(n)"
};
export const ejemplo = `const mp = new Map();
mp.set('a', 1);
mp.set({}, 'obj');
console.log(mp.get('a'));
console.log(mp.size);
for (const [k, v] of mp) { console.log(k, v); }`;
export const ejercicios = [
  "Cuenta ocurrencias de palabras en un array usando Map.",
  "Usa Map para agrupar elementos por una clave (por ejemplo, por longitud de cadena)."
];
