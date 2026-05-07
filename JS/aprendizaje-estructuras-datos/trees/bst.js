export const titulo = "Árbol Binario de Búsqueda (BST)";
export const definicion = "BST es un árbol binario ordenado: para cada nodo, valores en left <= value < valores en right.";
export const operaciones = [
  { nombre: "insert(value)", descripcion: "insertar manteniendo la propiedad BST" },
  { nombre: "search(value)", descripcion: "devuelve nodo si existe" },
  { nombre: "inOrder()", descripcion: "recorrido en orden ascendente" }
];
export const complejidad = { insert: "O(h)", search: "O(h)", inOrder: "O(n)" };
export const ejemplo = `class Node{ constructor(val, left=null, right=null){ this.val = val; this.left = left; this.right = right; } }
class BST{ constructor(){ this.root = null; }
  insert(v){ /* implementación rápida */ }
  search(v){ /* ... */ }
  inOrder(node=this.root){ /* ... */ }
}`;
