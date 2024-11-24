// FUNCIONES, es una serie de procedimiento o instrucciones que te ayuda a realizar una accion o funcion

// Nota: Te ayuda a tener un código mas ordenado y facil de entender. Las funciones son reutilizables, podemos usar la misma funcion en varios formularios

// HAY 3 FORMAS o CUERPO DE CREAR FUNCIONES:

//1. DECLARACION DE FUNCION
function sumar() {
    console.log(10+10);
}
sumar();


//2. EXPRESION DE LA FUNCION
const sumar2 = function(){
    console.log(3+3);
}
sumar2();

//3. IIFE, ESTA ES UNA FUNCION QUE SE MANDAN A LLAMAR ELLAS MISMAS
(function() {
    console.log('Esto es una función');
})();

//NOTA: Esta funcion no es recomendable para reutilizarse, porque esta solo sirve para proteger las variables para que no se mezcle con otros archivos.js, es para que no salga de ese archivo.js en espeifico.

//DIFERENCIA ENTRE DECLARACION DE FUNCION VS 
// DECLARACION DE FUNCION: En JavaScript primero se ejecutan las funciones y luego se mandan a llmar sin importa que hayas mandado a llamar la funcion antes. Ejemplo:

sumar();
function sumar() {
    console.log(10+10);
}

// En cambio EXPRESION DE LA FUNCION, al llamar la funcion antes de la funcion arroja error y es porque la EXPRESION DE LA FUNCION la reconoce como una variable u no como funcion, por lo que tiene que llamar la funcion despues de la misma. EJEMPLO:

// CORRECTO
const sumar3 = function(){
    console.log(3+3);
}
sumar3();

// INCORRECTO
// sumar4();
// const sumar4 = function(){
//     console.log(3+3);
// }

// ## 📝 Instrucciones

// Escribe una función llamada "isOldEnoughToDrink".

// Dado un número, en este caso una edad, "isOldEnoughToDrink" retorna si la persona de esa edad tiene la edad necesaria para beber legalmente en los Estados Unidos.

let menor='menor de edad';
function edadParaTomar(edad){
    return edad >=21;

}
console.log(edadParaTomar(18));
console.log(edadParaTomar(25));
console.log(`"${edadParaTomar(18)}" ${menor}`);






