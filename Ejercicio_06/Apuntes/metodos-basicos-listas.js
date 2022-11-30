//Como trabajar con listas 
let array = [1, 2, 3, 4, 5, 6];

//Acceder a los valores de un array atravez de su posicion
//array[indice] => 0,1,2,3,4,5, .....
console.log(array[0]);

// Metodos apra introducir nuevos valores en nuestor arrays
// .push() .unshift() => Mutan el valor de nuestro array
//Valores al final -> Push
array.push("final", 45, 100, false);
console.log(array);

//Valores al principio -> Unshift
array.unshift("inicio", 87, 99)
console.log(array)

//Metodos para eliminar valores en nuestros arrays
//.pop() .shift() Mutan el valor del array

const array2 = [1,2,3, "hola", false]
//valores al final -> pop
array2.pop()
console.log(array2)
array2.pop()
console.log(array2)

//valores al principio -> shift
array2.shift()
console.log(array2)

//Metodo para eliminar modificar o anadir valoroes en nuestro array
//splice()
const array3 = [1, 2, 3, 4, 5, 6]
//Eliminar valores .splice(indice, numValoresAEliminar)
array3.splice(2, 1);
console.log(array3)

//Anadir valores .splice(indice, 0, valores)
array3.splice(2, 0, "hola")
console.log(array3)

//Modificar valores .splice(indice, 1, valores)
array3.splice(2, 1, 3)
console.log(array3)