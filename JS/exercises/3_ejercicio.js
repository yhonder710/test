function fibonaci(number){
  let valor1 = 0
  let valor2 = 1

  for (let i = 0; i <= number; i++) {

    console.log(valor1)

    let resultado = valor1 + valor2
    valor1 = valor2
    valor2 = resultado
  }
}

fibonaci(10)
