//Metodos de cadenas de texto (parte 3)
let texto_largo = "Tito no es un mono cualquiera. A tito no le gusta trepar por los arboles y odia comer platanos. El prefiere pasear por el bosque, oler las flores y recoger las nueces que se caen de los arboles."

console.log(texto_largo.match(/no/g))

//Existe la palabra dentro del texto?
console.log(texto_largo.includes("prefiere"))

//Saber si un texto empiieza con una palabra
console.log(texto_largo.startsWith("Tito"))

//Saber si un texto termina con otra palabra
console.log(texto_largo.endsWith("arboles."))