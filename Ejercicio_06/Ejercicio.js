var listaCompra = ["pan", "leche", "cereal", "manzana", "agua"];
console.log(listaCompra);

listaCompra.push("aceite de girasol");
console.log(listaCompra);

listaCompra.pop();
console.log(listaCompra);

var peliculas = [
    { titulo: "el lobo de wall street", director: "Martin Scorsese", anio: 2014 },
    { titulo: "interestelar", director: "Christopher Nolan", anio: 2014 },
    { titulo: "bastardos sin gloria", director: "Quentin Tarantino", anio: 2009 },
];
var peliculasPost = peliculas.filter(obj => obj.anio > 2010);
console.log(peliculasPost);

var directores = peliculas.map(function (element) {
    return `${element.director}`
})
console.log(directores)

var titulos = peliculas.map(function (element) {
    return `${element.titulo}`
})
console.log(titulos)

var lista1 = directores.concat(titulos);
console.log(lista1)

var lista2 = [...directores, ...titulos];
console.log(lista2)