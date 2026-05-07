export const name = "Breadth-First Search (BFS)";
export const description = "Recorre un grafo en anchura a partir de un vértice.";
export const timeComplexity = { best: "O(V)", average: "O(V + E)", worst: "O(V + E)" };
export const spaceComplexity = { best: "O(V)", worst: "O(V)" };
export const explanation = `Explora los nodos por niveles usando una cola, visitando cada vértice y cada arista una vez.`;
export const snippet = `function bfs(start, graph){ const visited = new Set([start]); const queue=[start]; while(queue.length){ const v = queue.shift(); for(const w of graph[v]||[]) { if(!visited.has(w)){ visited.add(w); queue.push(w); } } } }`;
