class Agentes {
  constructor(
    name,
    rol,
    skill = [],
    statistics = { kill: 0, deaths: 0, assistance: 0 },
    KDA = 0,
    KDATotal = [],
    KDATotalParty = 0
  ) {
    this.name = name
    this.rol = rol
    this.skill = skill
    this.statistics = statistics
    this.KDA = KDA
    this.KDATotal = KDATotal
    this.KDATotalParty = KDATotalParty

  }

  registerMatch(addKill, addDeasths, addAssistance) {
    let { kill, deaths, assistance } = this.statistics
    kill = addKill
    deaths = addDeasths
    assistance = addAssistance
    this.calcularKDA(kill, deaths, assistance)

    console.log(`partida terminada estas son tus estadisticas ${kill} Asesinatos, ${deaths} Muertes, ${assistance} Asistencias. KDA: ${this.KDA.toFixed(2)}`)
    return this.statistics
  }

  calcularKDA(kill, deaths, assistance) {
    if (deaths === 0) return "Infinito"
    const kda = (kill + assistance) / deaths
    this.calcularKDATotal(kda)
    this.KDA = kda
    return kda
  }

  calcularKDATotal(kda){
    let total = 0
    this.KDATotal.push(kda)

    for (let i = 0; i < this.KDATotal.length; i++) {
      total += this.KDATotal[i]
    }

    this.KDATotalParty = total / this.KDATotal.length
  }

  mostrarResumen() {
    console.log(`Name: ${this.name}, Rol: ${this.rol}, KDA: ${this.KDATotalParty.toFixed(2)}`)
  }
}


const newPlayer = new Agentes("Jet",
  "Duelist",
  ["habilidad 1", "habilidad 2", "habilidad 3", "habilidad Definitiva"],
)

newPlayer.registerMatch(6, 4, 7)
newPlayer.registerMatch(26, 17, 4)
newPlayer.registerMatch(25, 18, 10)

newPlayer.mostrarResumen()
