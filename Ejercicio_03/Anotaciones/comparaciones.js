//comparaciones

    //igualdad
if (5 == 5) {
    console.log("5 es igual a 5");
}
if (5 === 5) {
    console.log("5 es muy igual a 5");
}

let a = 5;
console.log(typeof a)
let b = "5";
console.log(typeof b)

//== solo compara el valor
//=== compara el valor y el tipo

if (a == b) {
    console.log("a es igual a a b - debil");
}

if (a === b) {
    console.log("A es igual a b - fuerte");
}

    //
let c = 5;
let d = 4;

if (c != d) {
    console.log("C es diferente a d- debil");
}
if (c !== d) {
    console.log("C es diferente a d- fuerte");
}
    //compraciones mayor que y menor que
let max = 10;
let min = 5;
if (max > min) {
    console.log("max es mayor que min")
}
if (max >= 10) {
    console.log("max es mayor o igual que min")
}

if (min < max) {
    console.log("min es menor que max")
}
if (min <= max) {
    console.log("min es menor o igual que max")
}