//variables 
let nombre = "David";
let apellido = "Vazquez";
let estudiante = (nombre.concat(" ", apellido));

//Cadena de texto "estudiante"
console.log(estudiante);
//Cadena de texto "estudianteMayus"
console.log(estudiante.toLocaleUpperCase());
//Cadena de texto "estudianteMinus"
console.log(estudiante.toLowerCase());
//Variable numero de letras de la cadena estudiante
var estudianteLegth = (estudiante.length);
console.log(estudianteLegth);
//Variable primera letra del Nombre
var primerLetra = (nombre.charAt(0));
console.log(primerLetra);
//Variable ultima letra del apellido
var ultimaLetra = (apellido.charAt(6));
console.log(ultimaLetra);
//Cadena de texto que elimine los espacios entre la variable
console.log(estudiante.replace(" ", ""))
//Variable booleana que diga si el nombre esta contendio en la variable
console.log(estudiante.includes("David"));
