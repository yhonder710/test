export const titulo = "Stacks";
export const definicion = "Estructura LIFO (Last In, First Out): el último elemento en entrar es el primero en salir.";
export const operaciones = [
  { nombre: "push(valor)", descripcion: "agrega un elemento al tope" },
  { nombre: "pop()", descripcion: "elimina y devuelve el tope" },
  { nombre: "peek()", descripcion: "devuelve el tope sin eliminar" },
  { nombre: "isEmpty()", descripcion: "devuelve true si está vacío" }
];
export const complejidad = { push: "O(1)", pop: "O(1)", peek: "O(1)", isEmpty: "O(1)" };
export const ejemplo = `const stack = [];
stack.push(1);
stack.push(2);
console.log(stack.pop()); // 2
console.log(stack.peek?.()); // 1 si 'peek' está implementado`;
export const ejercicios = [
  "Implementa una pila para enteros usando un array; añade método clear() para vaciar.",
  "Resuelve par de problemas: verificar paréntesis balanceados usando una pila."
];
