class Player {
  constructor(name, elo, main) {
    this.name = name
    this.elo = elo
    this.main = main
  }
}

let player_1 = new Player("Kpito", "platino", "graves")

console.log(player_1);


//recursividad
function counter(number) {
  if (number >= 0) {
    console.log(number)
    counter(number - 1)
  }
}

counter(10)
