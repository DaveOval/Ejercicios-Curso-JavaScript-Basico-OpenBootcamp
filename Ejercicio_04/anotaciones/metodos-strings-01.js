//Metodos mas utilizacons con cadenas de caracteres
//Como obtener la longitud de un string
let str = "hola soy un string";
console.log(str.length);

//obtener partes de cadenas de caracteres
//slice () substring() substr()
let slice_str = str.slice(5, 10)
console.log(slice_str)

let substring_str = str.substring(5, 10)
console.log(substring_str)

let substr_str = str.substr(5, 10);
console.log(substr_str);

//Teemplazar parte del contenido de una cadena de texto
let cadena = "Hola mi nombre es David"
console.log(cadena)

//Al utilizar string solo reemplaza la primera instancia
console.log(cadena.replace('David', 'Carlos'))

let texto_largo = "Tito no es un mono cualquiera. A tito no le gusta trepar por los arboles y odia comer platanos. El prefiere pasear por el bosque, oler las flores y recoger las nueces que se caen de los arboles"

//Al utilizar string solo reemplaza la primera instancia
console.log(texto_largo.replace('los', 'cinco'))

//Al utilizar la expresion regular /g (global), reemplaza todas las instancias
console.log(texto_largo.replace(/los/g, 'cinco'))

