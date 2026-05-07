// Fundamentos TS - Generics

function identity<T>(arg: T): T {
  return arg;
}

class Box<T> {
  constructor(public value: T) {}
}

interface Pair<T> {
  a: T;
  b: T;
}

const id = identity<string>("TS");
console.log("identity:", id);
const box = new Box<number>(123);
console.log("Box value:", box.value);
const pair: Pair<number> = { a: 1, b: 2 };
console.log("Pair:", pair);

// Constraint generics
function printName<T extends { name: string }>(obj: T): void {
  console.log("Name:", obj.name);
}
printName({ name: "Sara", age: 27 } as any);
