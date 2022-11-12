//Sentencias Switch case
let nota = 5;

switch (nota) {
    case 5:
        console.log("Sacaste " + nota + " Buen trabajo, sobresaliente");
        break
    case 4:
        console.log("buen trabajo, pero podrias haberlo hecho mejor");
        break
    case 3:
        console.log("has obtenido suficiente");
        break
    case 2:
        console.log("no has aprobado por poco");
        break
    case 1:
        console.log("No has estudiado nada, trabaja un poquito mas para la proxima");
        break
    default:
        console.log("error")
        break;
}