//strings (cadenas de caracteres)

let string_single = 'Hola soy un texto con comillas simples';
let string_double = "Hola soy un texto con comillas dobles";

console.log(string_single);
console.log(string_double);

let string_comillas = "El otro dia me dijo literalmente \"ve a sacar la basura\""
let string_comillas_simples = 'El otro dia me dijo literalmente "ve a sacar la basura"'
let string_comillas_dobles = "El otro dia me dijo literalmente 've a sacar la basura'"
let string_comillas_simples_2 = 'El otro dia me dijo literalmente \'ve a scar la basura \''

console.log(string_comillas);
console.log(string_comillas_simples);
console.log(string_comillas_dobles);
console.log(string_comillas_simples_2);


//comillas invertidas (backticks) tiene funcinalidad extracta de introducir variables dentro de nuestro texto
let string_backticks = `Hola esto es un string con backticks`
console.log(string_backticks);

let nombre = "David"
let saludo = `Hola, ${nombre}' bienvenido`
console.log(saludo)

//plantillas HTML
let plantilla = `
<html>
    <h1>pagina web de ${nombre}</h1>
    <p>Esto es un parrafo</p>
</html>
`
console.log(plantilla)

//Introduccion de variables en html
let libros = ["empieza por el por que", "El monje que vendio su ferrari", "el poder del ahora"];