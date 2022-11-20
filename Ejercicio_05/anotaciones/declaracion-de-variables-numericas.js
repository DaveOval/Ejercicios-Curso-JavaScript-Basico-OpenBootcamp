//Declaracion de variables numeris (enteros y con decimales)
let a = 5;
console.log(a);
let b = 0.1;
console.log(b);

//precision
let c = 0.2;
console.log(b + c)

//Para resolver la falta de precision en JS se utiliza

console.log(Math.round((b + c) * 100) / 100);