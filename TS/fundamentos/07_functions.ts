// Fundamentos TS - Funciones

type BinaryOp = (a: number, b: number) => number;
const add: BinaryOp = (a, b) => a + b;
console.log("2+3=", add(2, 3));

function withDefaults(v: string = "default", flag: boolean = true): string {
  return `${v} - ${flag}`;
}
console.log(withDefaults());

function sumAll(...nums: number[]): number {
  return nums.reduce((acc, n) => acc + n, 0);
}
console.log("sumAll(1,2,3):", sumAll(1, 2, 3));
