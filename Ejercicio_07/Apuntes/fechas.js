//Trabajando con fechas
const fecha = new Date()
console.log(fecha)
//Atencion - los meses inicializan en 0 (0 - enero y 11 es diciembre)
const fecha2 = new Date(1987, 10,20,1,23,52,192)
console.log(fecha2)

const fecha3 = new Date(0)
console.log(fecha3)

const fecha4 = new Date("october 13, 1979 12:15:15")
console.log(fecha4)

console.log(fecha < fecha2)

const fecha5 = new Date(1987, 10, 20, 1, 23, 52, 192)
console.log(fecha5)

console.log(fecha2 === fecha5) //Error - no se pueden comparar fechas de esta manera

console.log(fecha2.getTime() === fecha5.getTime()) //OK esta es la forma de comparar la igualdad entre fechas

//////////////Obtener el dia, el mes y el anyo de una fecha
//obtener el dia .getDay()
console.log(fecha2.getDate())

//obtener el mes .getMonth() (0 - enero y 11 es diciembre)
console.log(fecha2.getMonth() + 1)

//Obtener el anio .getFullYear()
console.log(fecha2.getFullYear())

console.log(fecha2)

//. toLocalDateString
console.log(fecha2.toLocaleDateString("en-GB"))