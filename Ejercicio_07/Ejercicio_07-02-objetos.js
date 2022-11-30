const obj = {
    nombre: "David",
    apellido: "Vazquez",
    edad: "23",
    altura: "190",
    isDeveloper: true
}

var edad = obj.edad;
console.log(edad)

var lista = [obj]
console.log(lista)

lista.push(
    {
        nombre: "Roberto",
        apellido: "Murgia",
        edad: 23,
        altura: 160,
        isDeveloper: false
    },
    {
        nombre: "aaron",
        apellido: "smith",
        edad: 18,
        altura: 160,
        isDeveloper: false
    }
)
console.log(lista)

lista.sort((a, b) => a.edad < b.edad);
console.log(lista)