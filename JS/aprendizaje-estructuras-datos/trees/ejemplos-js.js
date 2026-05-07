export const bstExample = `// Ejemplo básico de BST (conceptual)
class Node{ constructor(val){ this.val = val; this.left = null; this.right = null; } }
class BST{ constructor(){ this.root = null; }
  insert(val){ if(!this.root){ this.root = new Node(val); return; } let cur = this.root; while(true){ if(val < cur.val){ if(!cur.left){ cur.left = new Node(val); break; } cur = cur.left; } else { if(!cur.right){ cur.right = new Node(val); break; } cur = cur.right; } } }
  }
  inOrder(node=this.root){ if(!node) return; this.inOrder(node.left); console.log(node.val); this.inOrder(node.right); }
}`;
