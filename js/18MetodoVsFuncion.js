//DIFERENCIA ENTRE METODO Y UNA FUNCION.

// Una funcion son los que NO comienzan con punto y terminan con un parentecis ejemplo:
const num1 = 20;
const num2 = '20';

console.log( parseInt(num2) ); // parseInt() es una funcion porque no comineza con punto y termina en parentecis y esta funcion sirve para convertir un string en un numero.

// en cambio un metodo son los que comienzan con punto y terminan con un parentecis ejemplo:
console.log(num1.toString()); // .toString() es un metodo porque comienza con un punto y termina en parentecis y este metodo sirve para convertir un numero en un string.