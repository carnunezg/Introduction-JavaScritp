//ARROW FUNCTIONS O FUNCIONES DE FLECHAS

//NOTA ARROW FUNCTIONS NO SON UTILIZADAS EN DECLARACION DE FUNCION, EJEMPLO: 
//DECLARACION DE FUNCION
function sumar() {
    console.log(10+10);
}
sumar();

// ARROW FUNCTION SON UTILIZADAS EN EXPRESION DE LA FUNION EJEMPLO:
//EXPRESION DE LA FUNCION

//UN ARROW FUNTIONS ES CUANDO SUSTITUYES FUNCTION POR UNA => FUERA DEL PARENTECIS EJEMPLO:

//ANTES
const sumar2 = function(n1, n2){
    console.log(n1 + n2);
}
sumar2(3, 5); //RESULTADO 

//CON ARROW FUNCTIONS
const sumar1 = (n1, n2) => console.log(n1 + n2);//QUITAMOS FUNCTION Y FUREA DEL PARENTECIS COLOCAMOS => Y ELIMINAMOS LAS { } Y JUNTAMOS TODO EL CODIGO EN UNA SOLA LINEA.
sumar1(3, 5); //RESULTADO 

//OTRO EJEMPLO CON ARROW FUNCTIONS:

//SINTAXIS BASICA: 

const aprendiendo = tecnologia => console.log(`Aprendiendo ${tecnologia}`);//cuando dentro del parentecis hay 2 o mas parametros lo dejamos con los () ejemplo: (num1, num2), pero cuando hay un solo parametros le podemos quitar los parenticis y no paa nada.
aprendiendo('JavaScript');

//MAS EJEMPLOS:

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

// forEach: Buscar un elemento dentro de un array o arreglo (UTILIZANDO ARROW FUNCTIONS)
arreglos.forEach( arreglo =>{
    if(arreglo == 'Carlos'){
        console.log('Carlos si Existe');
    }
})

// Some (alguno), esto es ideal para arreglos o Arrays con objetos, (UTILIZANDO ARROW FUNCTIONS) 
// CODIGO ANTES:
// resultado = carrito.some(function(producto){
//     return producto.nombre === 'Celular '
// });

//COMO QUEDARIA CON ARROW FUNCTION: 
let resultado;
resultado = carrito.some( producto => producto.nombre === 'Celular'); //EL RETURN SE SIMPLIFICA O SE QUITA, PORQUE ES OPCIONAL



// Reduce (Reducir) // Esta funcion me suma todos los valores que hay en un arreglo u objeto. (UTILIZANDO ARROW FUNCTIONS)  
// CODIGO ANTES:
// resultado=carrito.reduce(function(total, producto){
//     return total + producto.precio;
// }, 0);

// console.log(resultado);

//COMO QUEDARIA CON ARROW FUNCTION: 
resultado=carrito.reduce((total, producto) => total + producto.precio, 0);


// Filter (Filtro) : Esta funcion me filtra lo que yo necesito, ejemplo: quiero que me muestr los precios menor de 400 (UTILIZANDO ARROW FUNCTIONS)  
// CODIGO ANTES:
// resultado=carrito.filter(function(producto){
//     return producto.precio < 400;
// });
// console.log(resultado);

//COMO QUEDARIA CON ARROW FUNCTION: 
resultado=carrito.filter( producto => producto.precio < 400);


// Otro ejemplo de Filter:
//Que me traiga todos menos Celular: !== (UTILIZANDO ARROW FUNCTIONS)  
// CODIGO ANTES:
// resultado=carrito.filter(function(producto){
//     return producto.nombre !== 'Celular';
// });
// console.log(resultado);

//COMO QUEDARIA CON ARROW FUNCTION: 
resultado=carrito.filter(producto => producto.nombre !== 'Celular');

//Que me traiga todos los llamados Celular: !==
//COMO QUEDARIA CON ARROW FUNCTION: 
resultado=carrito.filter( producto => producto.nombre === 'Celular');

console.log(resultado);

