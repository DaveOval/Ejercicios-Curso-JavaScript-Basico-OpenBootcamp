var variable;
let varuablelet;

//const constante;
const constante = "Hola soy una constante";
console.log(constante);

    //una variable es una caja en donde se almacena un valor
    //un variable puede cambiar
var a = 1;
console.log(a);

a = 4;
console.log(a);
let b = 3;
console.log(b);
b = 4;
console.log(b); 

//la diferencia de entre let y var es que var afecta a todo el codigo y let solo afecta al bloque en donde este siendo declarado

var variable = "hola soy una variable VAR"

for (var i = 0; i < 3; i++) {
    var variable = "Soy la segunda variable"
}
console.log(variable)

let variableLet = "hola soy una variable LET";

for (var i = 0; i < 3; i++) {
    let variableLet = "Soy la segunda variable LET";
}
console.log(variableLet);