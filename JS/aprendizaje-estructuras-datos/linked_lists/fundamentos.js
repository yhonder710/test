export const title = "Listas Enlazadas (Linked Lists)";
export const definicion = "Definición: estructura de datos compuesta por nodos enlazados. Cada nodo contiene datos y una referencia al siguiente nodo (en listas simples).";
export const ventajas = [
  "Inserciones/eliminaciones en medio eficientes (O(1) si se tiene referencia al nodo anterior).",
  "Dinámica de tamaño: crece y encoge según necesidad."
];
export const desventajas = ["Acceso aleatorio lento (O(n))."];
export const operaciones = [
  "insertAtHead(valor)",
  "insertAfter(nodo, valor)",
  "deleteHead()",
  "search(valor)",
  "traverse()"
];
export const ejemplo = `class Node{ constructor(val, next=null){ this.val = val; this.next = next; } }
class LinkedList{ constructor(){ this.head = null; }
  insertAtHead(val){ this.head = new Node(val, this.head); }
  traverse(){ let cur = this.head; while(cur){ console.log(cur.val); cur = cur.next; } }
}
const l = new LinkedList();
l.insertAtHead(3); l.insertAtHead(2); l.insertAtHead(1);
l.traverse(); // 1 2 3`;
