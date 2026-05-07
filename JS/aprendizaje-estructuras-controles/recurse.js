export const titulo = "Recursión";
export const conceptos = [
  "Qué es la recursión",
  "Caso base y paso recursivo",
  "Riesgos: profundidad de pila y optimizaciones"
];
export const ejemplos = [
  `function factorial(n){ if(n<=1) return 1; return n*factorial(n-1); }`,
  `function fib(n){ if(n<=1) return n; return fib(n-1)+fib(n-2); }`
];
export const ejercicios = [
  "Convierte una iteración en recursión (por ejemplo, suma de números 1..n).",
  "Implementa memoización para la Fibonacci para evitar recomputaciones."
];
