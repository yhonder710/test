export const titulo = "Grafos";
export const definicion = "Estructura compuesta de nodos (vértices) y relaciones (aristas).";
export const representacion = ["Matriz de adyacencia", "Lista de adyacencia"];
export const operaciones = [
  { nombre: "addVertex(v)", descripcion: "agrega un vértice" },
  { nombre: "addEdge(u, v)", descripcion: "agrega una arista entre u y v" },
  { nombre: "bfs(start)", descripcion: "busqueda en anchura" },
  { nombre: "dfs(start)", descripcion: "busqueda en profundidad" }
];
export const complejidad = { bfs: "O(V + E)", dfs: "O(V + E)" };
export const ejemplo = `// Representación simple con lista de adyacencia
const graph = { A: ['B','C'], B: ['A','D'], C: ['A'], D: ['B'] };
function bfs(s){ const visited = new Set([s]); const q=[s]; while(q.length){ const v=q.shift(); console.log(v); for(const nb of graph[v]||[]){ if(!visited.has(nb)){ visited.add(nb); q.push(nb); } } } }`;
