export const name = "Bubble Sort";
export const description = "Intercambia elementos adyacentes si están en el orden incorrecto, empujando mayores hacia el final.";
export const timeComplexity = {
  best: "O(n)", // con optimización que corta si no hay swaps
  average: "O(n^2)",
  worst: "O(n^2)"
};
export const spaceComplexity = {
  best: "O(1)",
  worst: "O(1)"
};
export const explanation = `Repite pasadas intercambiando pares adyacentes para desplazar el elemento más grande al final en cada pasada.`;
export const snippet = `function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let swapped = false;
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }
    if (!swapped) break;
  }
  return arr;
}`;
