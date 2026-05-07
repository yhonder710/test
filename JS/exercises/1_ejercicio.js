/*
 * Escribe un programa que muestre por consola (con un print) los
 * números de 1 a 100 (ambos incluidos y con un salto de línea entre
 * cada impresión), sustituyendo los siguientes:
 * - Múltiplos de 3 por la palabra "fizz".
 * - Múltiplos de 5 por la palabra "buzz".
 * - Múltiplos de 3 y de 5 a la vez por la palabra "fizzbuzz".
 */

function fizzBuzz(number){

  for (let i = 0; i <= number; i++) {
    let fizz = i % 3 == 0
    let buzz = i % 5 == 0

    if(fizz && buzz) {
      console.log(`fizzBuzz = ${i}`)
    } else if (fizz) {
      console.log(`fizz = ${i}`)
    } else if (buzz) {
      console.log(`buzz = ${i}`)
    } else {
      console.log(i);
    }
  }
}

fizzBuzz(100)
