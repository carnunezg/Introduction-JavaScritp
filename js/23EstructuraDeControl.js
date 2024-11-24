// ESTRUCTURA DE CONTROL

//  const puntaje = 1000;

//  if(puntaje === 1000){//En el parentecis va la condición (UTILIZAMOS EL ===)
//     console.log('Puntaje es igual a 1000');//el mensaje que se muestra si se cumple la condicion
//  } else { //El esle no lleva parentesis, porque es lo ultimo que se muestra si la condicion no se cumple. solo lleva el mensaje que queremos que se muestre si no cumple.
//     console.log('No son Iguales');
//  }

 //USANDO EL !== EL CUAL ME INDICA QUE SI PUNTAJE ES DIFERENTE A 1000
 const puntaje = 1000;

 if(puntaje !== 1000){//En el parentecis va la condición (UTILIZAMOS EL ===)
    console.log('No son Iguales'); //el mensaje que se muestra si se cumple la condicion
 } else { //El esle no lleva parentesis, porque es lo ultimo que se muestra si la condicion no se cumple. solo lleva el mensaje que queremos que se muestre si no cumple.
    console.log('Puntaje es igual a 1000');
 }

 //USANDO EL > Y < EJEMPLO: PAGANDO UNA COMPRA.

 const efectivo = 1000;
 const compra = 800;

 if(efectivo > compra){//Relamente se usa mas el > porque es mas facil de leer, pero tambien se puede usar el < pero es depende como llamas a las variables.
    console.log('El Usuario puede pagar');
 }else{
    console.log('Saldo Insufuciente');
 }

 //USANDO MAS CONDICIONES CON else if() Ejemplo: Acceso como ADMINISTRADOR A UN SISTEMA.

 const rol = 'ADMINISTRADOR';//LO POODEMOS CAMBIAR CON ADMINISTRADOR, EDITOR, VISITANTE

 if(rol === 'ADMINISTRADOR'){
    console.log('Tienes acceso a todo el Sistema.');
 }else if (rol === 'EDITOR'){
    console.log('No tienes acceso como Administrador, pero sino como Editor.');

 } else{
    console.log('No tienes Acceso al Sistema.');
 }
