// MAS METODOS DE ARRAYS O ARREGLOS

// Esto es un Array o Arreglo Lineal

const arreglos = [10,'Enero', true, 45, 'Carlos', false, '56'];

// Esto es un Array o Arreglos con objetos
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

// forEach: Buscar un elemento dentro de un array o arreglo
arreglos.forEach(function(arreglo){
    if(arreglo == 'Carlos'){
        console.log('Carlos si Existe');
    }
})

// Includes //Te muestra con un boleeano, si consigue el elemento dentro de array arroja true de lo contrario false, ejemplo: 
let resultado=arreglos.includes('Enero');
console.log(resultado);

// De lo contrario:
let resultado1=arreglos.includes('Mayo'); // Mayo no existe y devuleve un false.

console.log(resultado1);

// Some (alguno), esto es ideal para arreglos o Arrays con objetos, ejemplo:
resultado = carrito.some(function(producto){
    return producto.nombre === 'Celular '
});

// Reduce (Reducir) // Esta funcion me suma todos los valores que hay en un arreglo u objeto. Ejemplo:
resultado=carrito.reduce(function(total, producto){
    return total + producto.precio;
}, 0);

// Filter (Filtro) : Esta funcion me filtra lo que yo necesito, ejemplo: quiero que me muestr los precios menor de 400
resultado=carrito.filter(function(producto){
    return producto.precio < 400;
});

// Otro ejemplo de Filter:
//Que me traiga todos menos Celular: !==
resultado=carrito.filter(function(producto){
    return producto.nombre !== 'Celular';
});

//Que me traiga todos los llamados Celular: !==
resultado=carrito.filter(function(producto){
    return producto.nombre === 'Celular';
});

console.log(resultado);

