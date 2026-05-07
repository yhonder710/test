// como funcionan los semaforos

// tiene 3 colores y 3 tiempos diferentes que se ejecutan uno detras del otro

/**
 * Entoces lo primero seria una estructura con los datos
 * luego vendria un bucle que los ejecute cada uno dependiendo su tiempo
 */




function esperar(ms, ligh) {
  console.log(ligh)
  return new Promise(resolve => setTimeout(resolve, ms * 1000));
}

let contador = 0

const semaforo = [
  ["Verde", 5],
  ["Amarillo", 1],
  ["Rojo", 4],
]

async function lighSemaforo() {
  while (contador < 5) {
    contador++
    for (const ligh of semaforo) {
    await esperar(ligh[1], ligh[0])
  }
  }
}

lighSemaforo()

