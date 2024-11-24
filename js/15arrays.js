// Arreglos o Arrays
// Esto tambien sirve para un carrito de compras.

//NOTA: los arreglos se identifican con corhetes [] miestras que los objetos se identifican con llaves {}

const numeros = [10,20,30,40,50];
//console.log(numeros);
//console.table(numeros); //Este me lo muestras como tabla y en la posicion que se encuentrar, recordando que en los arrglos se comienza con 0,1,2,3,.....

//Antes se usaba la del construsctor ejemplo:

const meses = new Array('Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo');
// console.log(meses);
// console.table(meses); //Este me lo muestras como tabla y en la posicion que se encuentrar, recordando que en los arrglos o el Index o Indice se comienza con 0,1,2,3,.....

// Los arreglos o Arrays, pueden estar cobinados, con string, number, boolean ejemplo:

const arreglos = [10,'Enero', true, 45, 'Carlos', false, '56'];

if(arreglos <=0){//condicional en el caso que el arreglo este vacio
    console.log('El Carrito esta vacio');
}

//console.table(arreglos);



// Acceder a los valores de un Arreglo o Array
// 
//Cuantos elementos hay en un Arreglo o Array:
//console.log(arreglos.length);

//Para que te muestre lo que hay en el arreglo podemos usar esta sintaxis:

arreglos.forEach(function(arreglo){ //forEach significa (por cada uno)
    //console.log(arreglo);
});


//METODOS PARA LOS ARRAYS.

//- AGREGAR ARREGLOS

//Antes se hacia de esta forma:
// arreglos[6]=60;
// arreglos[7]=true;
// arreglos[8]='Negro';

//La que se usa actualmente es el Push (empujar) el cual te lo coloca al final del arreglo
arreglos.push(60);
arreglos.push(false);
arreglos.push('Luis');

//Tambien lo puedes usar con coma , ejemplo:
arreglos.push(90,true,'Blanco');

//Tambien tenemos el unshift(desacelerar), el cual lo coloca al inicio del arreglo. ejemplo

arreglos.unshift(-12);
arreglos.unshift(true);

//NOTA: Esto te lo pueden preguntar en una entrevista: El Push es para colocar un elemento dentro de un arrglo al final, mientras que el Unshift es para colocarlo al inicio de un Arreglo. 


//- QUITAR O ELIMANAR ARRGLOS
//arreglos.pop(); //Elimina el ultimo elemento del Arreglo
//arreglos.shift(); //Elimina el primer elemento del arreglo
//arreglos.splice(2, 1); // Elimina el que yo deseo, (laPosicionDelElemento, una sola cantidad)

//console.table(arreglos);

//Las desventajas de esto es que estamos modificando el arreglo original.

// Hoy en dia se esta usando esta sintaxis, y que no modificas el Arreglo original:

//const nuevoArreglo=[...arreglos, 'Nuñez', 90, true]; // Este simula un push, ya que lo coloca al final de un arreglo

//Tambien lo podemos colocar al inicio de un arreglo

const nuevoArreglo=['Nuñez', 90, true, ...arreglos]; 

console.table(nuevoArreglo);


// 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.

// let text='Hola Mundo',
//     resultado=contarstring(text);

// function contarstring(text){
//     return text.length
// }
// console.log(`la palabra "${text}" tiene "${resultado}" caracteres`);

// 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".

//Ejemplo de uso
// let texto = "Hola Mundo";
// let caracteres = 4;
// let resultado1 = recortarTexto(texto, caracteres);

// function recortarTexto(texto, caracteres) {
//     return texto.slice(0, caracteres);
// }

// console.log(`Te devolvemos solo "${resultado1}"`);

// 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].

// function separarTexto(texto, separador) {
//     return texto.split(separador);
// }

// // Ejemplo de uso
// let texto = "hola que tal";
// let separador = " ";
// let resultado = separarTexto(texto, separador);
// console.log(resultado);

// // 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo

// function repetirTexto(texto, veces) {
//     let resultado = '';
//     for (let i = 0; i < veces; i++) {
//         resultado += texto + ' ';
//     }
//     return resultado.trim(); // Eliminar el espacio adicional al final
// }

// // Ejemplo de uso
// let texto = "Hola Mundo";
// let veces = 3;
// let resultado = repetirTexto(texto, veces);
// console.log(resultado);