export const name = "Hash Map (Map)";
export const description = "Almacenamiento de pares clave-valor con acceso en promedio en tiempo constante.";
export const timeComplexity = { best: "O(1)", average: "O(1)", worst: "O(n)" };
export const spaceComplexity = { best: "O(n)", worst: "O(n)" };
export const explanation = `La función hash distribuye claves a cubos de almacenamiento. Las colisiones se manejan por técnicas como chaining u open addressing.`;
export const snippet = `class HashMap {
  constructor() { this.buckets = []; }
  // put/get simples, no es una implementación completa
  set(k, v) { /* ... */ }
  get(k) { /* ... */ }
}`;
