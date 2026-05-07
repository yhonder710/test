/*
function miTarea() {
  console.log(`Ejecutada a las ${new Date().toLocaleTimeString()}`);
  // Aquí va tu lógica (llamadas a BD, APIs, etc.)
}

// Ejecutar cada 5 minutos (300,000 ms)
setInterval(miTarea, 1 * 60 * 1000);
*/

const porcentaje = (valor, total) => {
  let calcular = "0."
  let totalPorcentaje = Number(calcular + valor) * total
  console.log(`${totalPorcentaje}$`)
}

porcentaje(40, 500)
