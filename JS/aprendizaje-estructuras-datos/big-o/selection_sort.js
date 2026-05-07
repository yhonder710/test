export const name = "Selection Sort";
export const description = "Construye la sublista ordenada moviendo el mínimo elemento a la izquierda en cada iteración.";
export const timeComplexity = {
  best: "O(n^2)",
  average: "O(n^2)",
  worst: "O(n^2)"
};
export const spaceComplexity = {
  best: "O(1)",
  worst: "O(1)"
};
export const explanation = `En cada pasada, se selecciona el mínimo elemento del resto y se intercambia con la posición actual.`;
export const snippet = `function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIdx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIdx]) minIdx = j;
    }
    [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
  }
  return arr;
}`;
