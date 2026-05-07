export const titulo = "Arrays";
export const definicion = "Colección indexada de elementos, accediendo por índice";
export const propiedadesClave = [
  "Acceso aleatorio en O(1)",
  "Inserciones/eliminaciones en extremos eficientes; en medio: O(n)",
  "Puede ser estático o dinámico (con realocación)"
];
export const operaciones = [
  { nombre: "acceso(index)", descripcion: "devuelve el valor en index" },
  { nombre: "push(valor)", descripcion: "agrega al final" },
  { nombre: "insert(index, valor)", descripcion: "inserta en index" },
  { nombre: "remove(index)", descripcion: "elimina en index" }
];
export const complejidad = { acceso: "O(1)", insercionFinal: "amortizado O(1)", insercionMedio: "O(n)" };
export const ejemplo = `let arr = [1,2,3,4];\nconsole.log(arr[2]); // 3\narr.push(5);\narr.splice(2, 0, 'a');`;
export const ejercicios = [
  "Implementa insertAt(array, index, value) sin usar splice.",
  "Implementa removeAt(array, index) que devuelva el elemento eliminado y modifique el arreglo."
];
