// SWITCH: Esto me sive para no usar muchos else if() o munchas condiciones para que no sea tan recargado.

//estructura es:
// const variable= 'string';

// switch(variable) {
//     case 'string'://siempre se termina con :  el case es como si fuera el if
//        console.log('Es un String');
//        break; //terminamos con un break (hasta ahi termina, se rompe)
//     default: //siempre se termina con : y va solo,  el default es como si fuera el else
//     console.log('No es un String');
//        break; // el default termina con un break;
// }

//EJEMPLO: FORMA DE PAGO.

const metodoPago = 'Tarjeta';

switch(metodoPago){
    case 'Tarjeta':
        console.log('Pagaste con Tarjeta.');
        break;
    case 'Cheque':
        console.log('Usuario pagará con Cheque, revisaremos si tiene Fondos.');
        break;
    case 'Efectivo':
        console.log('Pagaste con Efectivo');
        break;
    default:
        console.log('Aún no has pagado');
        break;
}

//EL SWTICH SE USA CUANDO HAY MUCHOS ELSE IF, SI TIENE UN SOLO IF, PODEMOS UTILIZARLO SINO, PODEMOS USAR EL SWTICH



