export const name = "Binary Search";
export const description = "Algoritmo de búsqueda en un array ordenado usando división y conquista.";
export const timeComplexity = {
  best: "O(1)",
  average: "O(log n)",
  worst: "O(log n)"
};
export const spaceComplexity = {
  best: "O(1)",
  worst: "O(1)"
};
export const explanation = `Divide and conquer sobre un rango de índices. En cada paso se compara el elemento buscado con el elemento central y se descarta la mitad correspondiente. Requiere que el arreglo esté ordenado.`;
export const snippet = `function binarySearch(arr, target) {
  let left = 0, right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}`;
