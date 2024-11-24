// FOREACH Y MAP: ESTOS DOS SOLO SE USAN EN ARREGLO O ARRAYS, SON METODOS EXCULIVO DE ARRAYS.

//EJEMPLO:
const carrito=[
    {nombre: 'Monitor 20 Pulgadas', precio: 500},
    {nombre: 'Televisor 50 Pulgadas', precio: 700},
    {nombre: 'Tablet', precio: 300},
    {nombre: 'Audifonos', precio: 200},
    {nombre: 'Teclado', precio: 50},
    {nombre: 'Celular', precio: 500},
    {nombre: 'Bocina', precio: 300},
    {nombre: 'Laptop', precio: 800},
];

// forEach (por cada elemento) // Me muestra cada elemento que hay en el arrays o en el objeto.

carrito.forEach(function(producto){
    console.log(producto); // SI quieres ver un elemnto de cada objeto solo agresar .nombre o .precio. console.log(producto.nombre);
});

//lo podemos hacer mas corto con el ARROW FUNCTIONS

carrito.forEach( producto => console.log(producto));

// map
carrito.map(function(producto){
    console.log(producto); // SI quieres ver un elemnto de cada objeto solo agresar .nombre o .precio. console.log(producto.nombre);
});

//lo podemos hacer mas corto con el ARROW FUNCTIONS

carrito.map( producto => console.log(producto));

//LOS 2 METODOS HACEN LO MISMO, DIFERENCIA. PREGUNTA PARA ENTREVISTA.

//EL FOREACH, ME SIRVE PARA CUANDO QUIERO MOSTRAR LA INFORMACION DE UN ARRAYS EN PANTALLA O CUANDO QUIERO MOSTRARLO EN LA CONSOLA.
//SI QUIERES AGREGAR UN NUEVO ARRGLO UTILIZAMOS EL MAP

//EJEMPLO SOBRE LA DIFERENCIA:
//FOREACH no se usa para crear un nuevo arreglo, solo me sirve para mostrar los resultados de un arrglo en pantalla o enviarlo a lo consola.
carrito.forEach( producto => console.log(producto));

// MAP (mapear o mapa) // SE LE ASIGNA UNA VARIABLE PARA CREAR EL NUEVO ARRGLO CON LAS MISMA CARRACTERISTICA DEL PRINCIPAL.

//EN ESTE EJEMPLO SOLO ESTAMOS CREANDO UN NUEVO ARREGLO CON LOS NOMBRES
// const arregloNuevo = carrito.map( producto => producto.nombre);

// console.log(arregloNuevo);

//TAMBIEN PODRIA CREAR UN NUEVO ARREGLO CON TODOS LOS ELEMENTOS CON EL TEMPLE STRING, EJEMPLO:
const arregloNuevo = carrito.map( producto => `${producto.nombre}: ${producto.precio}`);

console.log(arregloNuevo);