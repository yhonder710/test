export const titulo = "Árboles Binarios";
export const definicion = "Estructura jerárquica con nodos, cada nodo tiene hasta dos hijos (izquierdo y derecho).";
export const propiedades = [
  "Altura = número de nodos desde raíz hasta la hoja más profunda",
  "Búsqueda y recorrido pueden ser O(n) en árboles desbalanceados, O(log n) en árboles balanceados",
  "Inorden, preorder y postorder como recorridos básicos"
];
export const operaciones = [
  { nombre: "insertar(valor)", descripcion: "inserta un valor manteniendo estructura de árbol (regla de BST si aplica)" },
  { nombre: "search(valor)", descripcion: "devuelve nodo con valor o null" },
  { nombre: "traverseInOrder()", descripcion: "recorre en recorrido en orden" },
  { nombre: "traversePreOrder()", descripcion: "recorre en preorden" },
  { nombre: "traversePostOrder()", descripcion: "recorre en postorden" }
];
export const complejidad = { buscar: "O(h)", insertar: "O(h)", recorrido: "O(n)" };
export const ejemplo = `class Node{ constructor(val, left=null, right=null){ this.val = val; this.left = left; this.right = right; } }
class BinaryTree{ constructor(){ this.root = null; }
  insert(val){ /* implementación específica de BST o BST-like */ }
  traverseInOrder(node=this.root){ if(!node) return; this.traverseInOrder(node.left); console.log(node.val); this.traverseInOrder(node.right); }
}`;
