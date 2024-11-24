//FOR LOOP ES EL INDICE O INCREMENTO, 

// for(let i = 0; i <= 10; i++){ //1ero: iniciamos la i (let i=0;) luego la condicion(esto si se cumple se va ir ejecuntandose y por ultimo colocamos (i++) esto para que vaya aumentando en 1. tambien puede ser en par i+2
//     console.log(i);
// }

//OTRO EJEMPLO: ESTO PUEDE SER PREGUNTA EN UNA ENTREVISTA:
//EJERCICIO: Identifica del 1 al 100 si un numero es PAR e IMPAR.

// for(let i = 1; i <= 10; i++){
//     if(i % 2 === 0){ //el %(modulo) es el residuo (coloco 2 por quiero ver los pares)
//         console.log(`El numero ${i} es PAR`)

//     }else{ //esto es para lo Impares
//         console.log(`El numero ${i} es IMPAR`)
//     }
// }

//EN LA VIDA REAL SE USA PARA ARRGLOS U OBJETOS:
//EJEMPLO: CARRITO DE COMPRA.

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

// for( let i = 0; i < carrito.length; i++){// coloco carrito.length por quiero ver cuantos elementos del objeto tengo en el.
//     console.log(carrito[i]);//llamamos el carrito con corchetees porque es un array [i]
// }

// //si solo quiero mostrarel nombre del priducto llamaria
// for( let i = 0; i < carrito.length; i++){ //se coloca que carrito tiene que ser mayor > que i
//     console.log(carrito[i].nombre); //solo estoy llamando el nombre del carrito con el .nombre
// }



//WHILE LOOP

//EJEMPLO PARA ENTREVISTA CON INCREMENTO CON WHILE

// let i = 0; // indice o valor inicial
//  while(i <= 10){ // La condicion
//     console.log(i);
//     i++;//El Incremento se coloca de ultimo.
//  }

 //OTRO EJEMPLO MAS PARA ENTREVISTA CON NUMEROS PARES E IMPARES

//  let i = 1;

//  while(i <= 10){
//     if(i % 2 === 0){
//         console.log(`El numero ${i} es PAR`);
//     }else{
//         console.log(`El numero ${i} es IMPAR`);
//     }
//     i++;
//  }


//DO WHILE LOOP

// let i = 0;

// do{
//     console.log(i);

//     i++;
// }while(i <=10);

//AHORA EN EL CASO QUE EL i sea mayor que la condicion que se le este dando al menos muestra el valor que se le dio a i. EJEMPLO:
let i = 100;

do{
    console.log(i);

    i++;
}while(i <=10);

//diferencia con el while y el do while.

//en el while, si la codicion no se cumple no se ejecuta. en cambio el do while si la condicion no se cumple se ejecuta al menos un vez. pregunta para entrevista.