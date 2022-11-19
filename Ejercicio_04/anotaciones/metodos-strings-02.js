//Metodos de cadenas de texto (parte 2)
let input = "Escorpio"
let db = "escorpio"

// toLowerCase() - toUpperCase()
console.log(input.toLocaleLowerCase())
console.log(input.toLowerCase() === db.toLowerCase());

//Formas de concatenar dos cadenas de caracteres
let str_1 = "Hola soy la primera cadena. "
let str_2 = "Y yo soy la segunda cadena"
console.log(str_1.concat(" ", str_2));
console.log(str_1 + " " + str_2);
console.log(`${str_1} ${str_2}`);

//Eliminar espacios al inicio y al final
let str_3 = "     Hola soy un string con espacios al final.  "
console.log(str_3.length);
//trim()
console.log(str_3.trim().length)
console.log(str_3.trimStart().length)
console.log(str_3.trimEnd().length)

//Obtener el caracter que hay en cierta posicion
let str_4 = "Hola soy el string numero 4"
console.log(str_4.charAt(5))
console.log(str_4[5])

//Obtener la posicion de una palabra dentro de una cade de caracteres
let str_5 = "Hola soy david y me gusta jugar. Mi nombre es david y mi apellido Vazquez"
console.log(str_5.indexOf("david"))
console.log(str_5.charAt(9))
console.log(str_5.lastIndexOf("david"))
