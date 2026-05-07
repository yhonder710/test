export const name = "Heap Sort";
export const description = "Construye un heap y luego extrae el máximo/minimo para ordenar. Operación en tiempo O(n log n).";
export const timeComplexity = {
  best: "O(n log n)",
  average: "O(n log n)",
  worst: "O(n log n)"
};
export const spaceComplexity = {
  best: "O(1)",
  worst: "O(1)"
};
export const explanation = `Los elementos se convierten en un heap (tipo max-heap o min-heap) y se extraen en orden, moviendo valores para mantener la propiedad del heap.`;
export const snippet = `function heapSort(arr) { /* implementación en lugar de detalle */ }`;
