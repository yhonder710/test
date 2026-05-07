// Fundamentos TS - Basics

function sayHello(name: string): string {
  return `Hello ${name}`;
}
const userName: string = "TS Learner";
console.log(sayHello(userName));

let count: number = 42;
const pi: number = 3.1415;
let fruits: string[] = ["apple", "banana"];
const point: [number, number] = [10, 20];
console.log({ count, pi, firstFruit: fruits[0], point });

enum Theme {
  Light,
  Dark = 3,
  System
}
console.log("Theme Light value:", Theme.Dark);

type ID = string | number;
const _id: ID = 1;
console.log("ID:", id);
