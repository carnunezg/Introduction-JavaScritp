// Orden de las Operaciones

let resultado;

resultado = (20 + 30 * 2); // Como en la escuela, primero el signo que tiene mas peso ejemplo, primero la multiplicación y despues la suma.

// En el caso que quieras controlar la opración puedes añadir parentecis, ejemplo:
resultado = (20 + 30) * 2; //resultado: 100
resultado = (100 + 200 + 300) * .2; // Para sacar el porcentaje de una suma lo multiplicamos ejemplo: el 20% de 600 es, resultado: 120 NOTA: esto se úede usar para un carrito de compra o para un cupon de descuento.

resultado = (100 + 200 + 300) * 1.19; // Esto es para cobrale algun Impuesto resultado: 714
resultado = (600 + 600) * 1.05; // Tambien sirve para cobrar algun porcentaje de algun boleto resultado: 1260

console.log(resultado);

// Incrementos

let puntaje = 10;
let puntaje1 = 10;

// Incremento en 1 ++
//puntaje++; // resultado: 10 
//++puntaje; // resultado: 12 

console.log(puntaje++); // si lo uso de esta manera el incremento se detiene en puntaje, ahora, si coloco esto seguido del anterior 
console.log(++puntaje); // me arroja resultado: 12, ¿porque 12 y no 11?, porque 1+1+10=12

//Tambien puedes incrementa el doble del valor que tu deseas, ejemplo:
console.log(puntaje+=10); 
// o Tambien puedes desminuir el doble del valor que tu deseas, ejemplo:
console.log(puntaje-=10); 

// Disminución en 1 --
//puntaje1--; // resultado: 10 
//--puntaje1; // resultado: 12 

console.log(puntaje1--); // si lo uso de esta manera el incremento se detiene en puntaje1, ahora, si coloco esto seguido del anterior 
console.log(--puntaje1); // me arroja resultado: 12, ¿porque 12 y no 11?, porque 1-1-10=8