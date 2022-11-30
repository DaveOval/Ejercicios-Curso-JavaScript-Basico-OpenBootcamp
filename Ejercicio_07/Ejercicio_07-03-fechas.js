const fechaHoy = new Date();
console.log(fechaHoy);

const nacimiento = new Date(1999, 0, 8);
console.log(nacimiento);

const masTarde = (fechaHoy > nacimiento);
console.log(masTarde);

var diaNacimiento = nacimiento.getDate();
console.log(diaNacimiento);

var mesNacimiento = nacimiento.getMonth();
console.log(mesNacimiento);

var anyoNacimiento = nacimiento.getFullYear();
console.log(anyoNacimiento);