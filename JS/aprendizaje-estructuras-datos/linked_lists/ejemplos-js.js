export const ejemploHead = `class Node{ constructor(val, next=null){ this.val = val; this.next = next; } }
class LinkedList{ constructor(){ this.head = null; }
  insertAtHead(val){ this.head = new Node(val, this.head); }
  traverse(){ let cur = this.head; while(cur){ console.log(cur.val); cur = cur.next; } }
}
const l = new LinkedList(); l.insertAtHead(10); l.insertAtHead(5); l.insertAtHead(1); l.traverse(); // 1, 5, 10`;
