//Funcion factorial ciclo for
function factorizacion(num) {
    if (num === 0 || num === 1)
        return 1;
    for (var i = num - 1; i >= 1; i--){
        num *= i;
    }
    console.log(num) ;
} 
factorizacion(10);
