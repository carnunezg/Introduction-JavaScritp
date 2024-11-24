//Ejercicio:
//Ingresa 2 numeros mediante un prompt y almacenar sus valores en 2 variables distintas.
// Realizar una resta entre los 2 valores en JS.
// Almacenar el resultado en una variable.
// Si el resultado de la resta es mayor a 0, mostrar mediante un console.log() "Es mayor a 0".
     // si es mayor a 0, comparar si el numero es par, si lo es mostrar un mensaje "Es par" sino que diga "Es impar".
// En el caso que sea menor a 0, mostrar un mensaje que diga "Es menos o igual a 0".

let num1 = prompt('Ingrese num1');
let num2 = prompt('Ingrese num2');

let resultado = num1 - num2;

if(resultado > 0) {
    console.log(`El numero ${resultado} es mayor que 0`);

    //let parImpar = resultado % 2;

    if(resultado % 2 === 0){
        console.log(`El numero ${resultado} es Par`);

    }else{
        console.log(`El numero ${resultado} es Impar`);
    }
}else{
    console.log(`El numero ${resultado} es menor que 0`);
}

//Ejercicio2:
// Realiza un programa en JS que muestre los numeros del 1 al 35(uno bajo del otro) mediante console.log().
// Utilizar alguna estructura repetitiva. for, while and do while.

//CON FOR
for(let i = 1; i <= 2; i++){
    console.log(i);
}

//CON WHILE
let e=1;
while(e<=5){
    console.log(e); 
    e++;
}

// CON DO WHILE

let a=1;

do{
    console.log(a);
    a++;
}while(a<=20);

//EJERCICIO 2:
// Realiza una cuenta regresiva para el año nuevo, comenzando en 10 en 0.
//Al finalizar mostrar el mensaje "Feliz año nuevo."
//FOR
for(let i=10; i>=0; i--){
    console.log(i);
}
// alert('Feliz Año Nuevo');
console.log('Feliz Año Nuevo FOR');

//WHILE
let q=10;
while(q>=0){
    console.log(q);
    q--;
}
console.log('Feliz Año Nuevo WHILE');

//DO WHILE
let o=10;

do{
    console.log(o);
    o--;
}while(o>=0);

console.log('Feliz Año Nuevo DO WHILE');

//EJERCICIO3:
//Mostrar con una alerta o console.log la fecha, mes, año completo. FECHA A MOSTRAR:  22 - 12 - 1987 - 15:30:22 utilizando POO

let fecha1 = new Date(1987, 11, 22, 14, 29, 21); //año - mes - dia - hora - munutos - segundos - milesegundos

let dia1 = fecha.getDate();
let mes = fecha.getMonth();
let año = fecha.getFullYear();
let hora = fecha.getHours();
let mint = fecha.getMinutes();
let seg = fecha.getSeconds();

console.log(`Dia: "${dia1}" Mes: "${mes + 1}" Año: "${año}" Hora: ${hora+1}:${mint+1}:${seg+1}`);
//alert(`Dia: "${dia}" Mes: "${mes + 1}" Año: "${año}" Hora: ${hora+1}:${mint+1}:${seg+1}`);
//alert(fecha);

//EJERCICIO 4:
//Ingresa mediante prompt 2 valores por teclado.
//Determina cual de ellos es el mayor e informar mediante un alert.

let valor1 = parseInt(window.prompt('Ingrese el numero 1'));// el parseInt: es una funcion que me convierte un string en un entero o numero
let valor2 = parseInt(window.prompt('Ingrese el numero 2'));

//determinar el mayor, con IF
if (valor1 > valor2){
    alert(`El primer valor ingresado: "${valor1}" es mayor`);
}else{
    alert(`El segundo valor ingresado: "${valor2}" es mayor`);
}

//EJERCICIO 5:
//Ingresa una fecha mediante un prompt (formato mes/dia/año - mm/dd//yyyy)
//Mostrar luego, mediante un alert, que dia de la semana corresponde. Utilizando switch 
//ESTRUCTURA DEL SWITCH:

//______________________________________________________________________________________________________
// const variable= 'string';

// switch(variable) {
//     case 'string'://siempre se termina con :  el case es como si fuera el if
//        console.log('Es un String');
//        break; //terminamos con un break (hasta ahi termina, se rompe)
//     default: //siempre se termina con : y va solo,  el default es como si fuera el else
//     console.log('No es un String');
//        break; // el default termina con un break;
// }
//______________________________________________________________________________________________________

let  fechaIngreso = prompt('Ingrese la Fecha', 'ejemplo: mm/dd/yyyy');

let fecha = new Date(fechaIngreso);// Utilizamos POO

let dia = fecha.getDay();

let diaSemana;

switch(dia){
    case 0:
        diaSemana = 'Domingo';
        break;
    case 1:
        diaSemana = 'Lunes';
        break;
    case 2:
        diaSemana = 'Martes';
        break;
    case 3:
        diaSemana = 'Miercoles';
        break;
    case 4:
        diaSemana = 'Jueves';
        break;
    case 5:
        diaSemana = 'Viernes';
        break;
    case 6:
        diaSemana = 'Sabado';
        break;
    default:
        alert('Invalido');
        break;
}

alert(`El dia de la semana de esa fecha es: "${diaSemana}"`);

