export const name = "Merge Sort";
export const description = "Divide y conquista: divide el arreglo en mitades, ordena cada mitad y las une.";
export const timeComplexity = {
  best: "O(n log n)",
  average: "O(n log n)",
  worst: "O(n log n)"
};
export const spaceComplexity = {
  best: "O(n)",
  worst: "O(n)"
};
export const explanation = `Divide el problema en subproblemas más pequeños (mitades) recursivamente y fusiona las mitades ordenadas.`;
export const snippet = `function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  return merge(left, right);
}
function merge(a, b){ /* fusion de dos arreglos ordenados */ }`;
