export const name = "Quicksort";
export const description = "Divide y conquista: elige un pivote y particiona; recurre en subarreglos.";
export const timeComplexity = {
  best: "O(n log n)",
  average: "O(n log n)",
  worst: "O(n^2)"
};
export const spaceComplexity = {
  best: "O(log n)",
  worst: "O(log n)"
};
export const explanation = `Seleccionar un pivote y particionar el arreglo en zonas menores, luego aplicar recursión a cada zona.`;
export const snippet = `function quickSort(arr) {
  if (arr.length <= 1) return arr;
  const pivot = arr[Math.floor(arr.length/2)];
  const left = arr.filter(x => x < pivot);
  const middle = arr.filter(x => x === pivot);
  const right = arr.filter(x => x > pivot);
  return [...quickSort(left), ...middle, ...quickSort(right)];
}`;
