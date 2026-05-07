export const name = "Insertion Sort";
export const description = "Ordena iterativamente insertando cada elemento en su posición correcta.";
export const timeComplexity = {
  best: "O(n)",
  average: "O(n^2)",
  worst: "O(n^2)"
};
export const spaceComplexity = {
  best: "O(1)",
  worst: "O(1)"
};
export const explanation = `Construye una sublista ordenada al inicio y coloca cada nuevo elemento en su posición adecuada mediante comparaciones y desplazamientos.`;
export const snippet = `function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    const key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  return arr;
}`;
