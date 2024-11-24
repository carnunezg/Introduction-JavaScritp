//DESTRUCTURING DE OBJETO

const producto = {
    nombreProducto : "Monitor 20 Pulgadas",
    precio : 300,
    disponible : true,
}

//ANTES SE ASI DE ESTA FORMA:
// const precioProducto = producto.precio;
// const nombreProducto = producto.nombreProducto;

// console.log(nombreProducto);
// console.log(precioProducto);

//NUEVA FORMA CON DESTRUCTURING
//NOTA: el destructuring siempre lleva las {} y dentro de las llaves colocamos las propiedades o variables que queremos llamar = y el nombre del Objeto, ejemplo:

const {precio, nombreProducto} = producto;

console.log(precio);
console.log(nombreProducto);

//otra forma de ver las propiedades de un Objeto.
const data = {
    name : 'Carlos',
    lastName : 'Nuñez',
    age : '36',
 }

 let datanueva = {name, lastName, age} = data;

 console.log(name, lastName, age);

