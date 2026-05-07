export const name = "Linear Search";
export const description = "Búsqueda secuencial recorriendo el arreglo desde el inicio.";
export const timeComplexity = {
  best: "O(1)",
  average: "O(n)",
  worst: "O(n)"
};
export const spaceComplexity = {
  best: "O(1)",
  worst: "O(1)"
};
export const explanation = `Se revisa cada elemento hasta encontrar el objetivo o recorrer todo el arreglo. No requiere que esté ordenado.`;
export const snippet = `function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
}`;
