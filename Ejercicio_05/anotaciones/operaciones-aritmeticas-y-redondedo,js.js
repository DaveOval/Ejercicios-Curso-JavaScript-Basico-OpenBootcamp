//principales operaciones aritmeticas
let a = 3.5;
let b = 4.8;

//suma (+)
console.log(a + b);
//resta (-)
console.log(a - b);
//multiplicacion (*)
console.log(a * b);
//division (/)
console.log(a / b);

//Representacion de los numeros en cadenas de texto
console.log(typeof a)
let a_s = a.toString();

console.log(a_s);
console.log(typeof a_s)

//Redondeo de numeros decimales
let c = 3.3;
let d = c * 3;

console.log(d);
// .toFixed(x) - limitar el numero de decimales al valor x
console.log(d.toFixed(2));
console.log(typeof d.toFixed(4));
e = 1839.1232456789;
// .toPrecision(x) - limita el numero de cifras significativas
console.log(e.toPrecision(7));