// 21. MATH

console.log("=== CONSTANTES ===");
console.log(`PI: ${Math.PI}`);
console.log(`E: ${Math.E}`);
console.log(`LN2: ${Math.LN2}`);
console.log(`SQRT2: ${Math.SQRT2}`);

console.log("\n=== MÉTODOS DE REDONDEO ===");
console.log(`Round 4.5: ${Math.round(4.5)}`);
console.log(`Round 4.4: ${Math.round(4.4)}`);
console.log(`Ceil 4.1: ${Math.ceil(4.1)}`);
console.log(`Floor 4.9: ${Math.floor(4.9)}`);
console.log(`Trunc 4.9: ${Math.trunc(4.9)}`);
console.log(`Trunc -4.9: ${Math.trunc(-4.9)}`);

console.log("\n=== POTENCIA Y RAÍZ ===");
console.log(`Pow 2^3: ${Math.pow(2, 3)}`);
console.log(`Sqrt 16: ${Math.sqrt(16)}`);
console.log(`Cbrt 27: ${Math.cbrt(27)}`);
console.log(`Hypot 3,4: ${Math.hypot(3, 4)}`);
console.log(`Exp e^2: ${Math.exp(2)}`);
console.log(`Log e^1: ${Math.log(Math.E)}`);
console.log(`Log10 100: ${Math.log10(100)}`);
console.log(`Log2 8: ${Math.log2(8)}`);

console.log("\n=== VALORES ABSOLUTOS ===");
console.log(`Abs -5: ${Math.abs(-5)}`);
console.log(`Abs 5: ${Math.abs(5)}`);

console.log("\n=== MÁXIMO Y MÍNIMO ===");
console.log(`Max 1,5,3: ${Math.max(1, 5, 3)}`);
console.log(`Min 1,5,3: ${Math.min(1, 5, 3)}`);
console.log(`Max array: ${Math.max(...[1, 5, 3, 10])}`);

console.log("\n=== FUNCIONES TRIGONOMÉTRICAS ===");
console.log(`Sin 90°: ${Math.sin(Math.PI / 2)}`);
console.log(`Cos 0°: ${Math.cos(0)}`);
console.log(`Tan 45°: ${Math.tan(Math.PI / 4)}`);
console.log(`Atan 1: ${Math.atan(1)}`);
console.log(`Atan2 1,1: ${Math.atan2(1, 1)}`);

console.log("\n=== NÚMEROS ALEATORIOS ===");
console.log(`Random: ${Math.random()}`);
console.log(`Random 0-10: ${Math.floor(Math.random() * 11)}`);
console.log(`Random 1-10: ${Math.floor(Math.random() * 10) + 1}`);

const randomEntre = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
console.log(`Random 5-15: ${randomEntre(5, 15)}`);

console.log("\n=== FUNCIONES ESPECIALES ===");
console.log(`Sign -5: ${Math.sign(-5)}`);
console.log(`Sign 5: ${Math.sign(5)}`);
console.log(`Sign 0: ${Math.sign(0)}`);
console.log(`Clz32 1: ${Math.clz32(1)}`);
console.log(`Fround 1.5: ${Math.fround(1.5)}`);

console.log("\n=== EJEMPLOS PRÁCTICOS ===");
// Porcentaje
const porcentaje = (valor, total) => (valor / total) * 100;
console.log(`30% de 200: ${porcentaje(30, 200)}`);

// Decimal a porcentaje
console.log(`0.75 a %: ${0.75 * 100}%`);

// Redondear a decimales
const redondear = (num, decimales = 2) => {
    return Number(Math.round(num + "e" + decimales) + "e-" + decimales);
};
console.log(`Redondear 3.14159 a 2: ${redondear(Math.PI)}`);

// Aleatorio con distribución (simulado)
const randomNormal = () => {
    let u = 0, v = 0;
    while (u === 0) u = Math.random();
    while (v === 0) v = Math.random();
    return Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
};
console.log(`Normal(0,1): ${randomNormal().toFixed(2)}`);
