export const titulo = "Queues";
export const definicion = "Estructura FIFO (First In, First Out): el primer elemento en entrar es el primero en salir.";
export const operaciones = [
  { nombre: "enqueue(valor)", descripcion: "agrega al final" },
  { nombre: "dequeue()", descripcion: "quita y devuelve el primero" },
  { nombre: "front()", descripcion: "devuelve el primer elemento sin quitar" },
  { nombre: "isEmpty()", descripcion: "devuelve true si está vacío" }
];
export const complejidad = { enqueue: "O(1)", dequeue: "O(1)", front: "O(1)", isEmpty: "O(1)" };
export const ejemplo = `const q = [];
q.push(1);
q.push(2);
console.log(q.shift()); // 1`;
export const ejercicios = [
  "Implementa una cola circular simple usando un array.",
  "Convierte la cola a una estructura de tamaños dinámicos para crecimiento eficiente."
];
