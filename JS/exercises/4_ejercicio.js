/*
 * Escribe un programa que se encargue de comprobar si un número es o no primo.
 * Hecho esto, imprime los números primos entre 1 y 100.
 */

function esPrimo(num) {
    if (num <= 1) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;

    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) return false;
    }
    return true;
}

console.log("Números primos entre 1 y 100:");
for (let i = 1; i <= 100; i++) {
    if (esPrimo(i)) {
        console.log(i);
    }
}
