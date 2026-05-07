export const titulo = "Excepciones";
export const conceptos = [
  "try/catch/finally para manejo de errores",
  "throw para lanzar errores",
  "Clases de error personalizadas"
];
export const ejemplos = [
  `try { JSON.parse('{"a":1') } catch (e) { console.error(e); }`,
  `class MyError extends Error { constructor(msg){ super(msg); this.name='MyError'; } }`,
  `throw new MyError('algo salió mal')`
];
export const ejercicios = [
  "Crea una función que valide un JSON y maneje errores de parseo con try/catch",
  "Define una excepción personalizada para invalid input"
];
