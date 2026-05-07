// Fundamentos TS - Decoradores (experimental)

function SetEdad(age: number) {
  return function <T extends { new (...arg: any[] ): {}}> (constructor: T) {
    return class extends constructor {
      age!: number
      constructor(...arg: any[]) {
        super()
        this.age = age;
      }
    }
  }
}


@SetEdad(20)
class Test {
  age!: number

}

const getUser = new Test()

console.log(getUser.age)
