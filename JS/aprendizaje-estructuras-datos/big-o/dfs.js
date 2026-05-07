export const name = "Depth-First Search (DFS)";
export const description = "Recorre un grafo en profundidad desde un vértice.";
export const timeComplexity = { best: "O(V)", average: "O(V + E)", worst: "O(V + E)" };
export const spaceComplexity = { best: "O(V)", worst: "O(V)" };
export const explanation = `Explora lo más profundo posible por cada rama usando recursión o una pila. Visita cada vértice una vez y cada arista dos veces.`;
export const snippet = `function dfs(start, graph, visited=new Set()){ /* implementación básica */ }`;
