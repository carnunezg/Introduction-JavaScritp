//FUNCIONES QUE RETORNA VALORES:

function sumar(n1, n2){
    return n1 + n2;
}
 const resultado = sumar(2, 3);
 
 console.log(resultado); //ESTO ES MUY SENCILLO.

//VEAMOS ALGO MAS COPMPLEJO.

//SIMULANDO UN CARRITO DE COMPRA:

let total = 0; //Iniciamos con 0

function agregarCarrito(precio){ //precio de los productos
    return total += precio; // llamamos el total=0 y lo vamos icrementando con el += es una forma de hacer incremento seguido con el paramentro que se le asigno en la funcion para que luego se agreguen los argumentos o valores reales.

};

//Podemos Tener una segunda funcion para agregar el impuesto de la compra
function calcularImpuesto(total){ //tomamos el total de la compra para realizar el calculo de impuesto
    return 1.19 * total;// formula 
}

total = agregarCarrito(200);
total = agregarCarrito(200);
total = agregarCarrito(200);

console.log(`Su Total es: "$${total}"`);

//Agregamos una constante despues del total = agregarCarrito(200); porque sino dara 0, y la llamamos const para que no se repita esta variable para realizar el calculo:
const totalAPagar = calcularImpuesto(total);// creamos una variable llamada totalAPagar y llamamos la funcion a esa nueva variable, done me esta haciendo el calculo (1.19 * total)

//veamoslo en la consola

console.log(`El Total a Pagar con Impuesto es: "${totalAPagar}$"`)


// ## 📝 Instrucciones
// Escribe una función llamada "isOldEnoughToDrink".
// Dado un número, en este caso una edad, "isOldEnoughToDrink" retorna si la persona de esa edad tiene la edad necesaria para beber legalmente en los Estados Unidos. Y devuelva true si es mayor de edad. Pista: 21 años es mayor de edad.

let age= 'Is Old Enough To Drink';

function IsOldEnoughToDrink(age){
    return age >= 21;
}

age = IsOldEnoughToDrink(20);
console.log(age);

// OTRA FORMA DE UTILIZAR CONDICIONES Y MAS CORTA

// let age= 22;

// let result = (age >=21) ? 'Is Old Enough To Drink (Es bastante viejo para beber)' : 'Too Young To Drink (Muy Joven para beber)';

// // se llama la variable con su funcion en parentecis y para el IF lo llamamos con un ? y en comillas le colocamos la condicion y para el else con : y en comillas su condicion.

// console.log(result);


// ## 📝 Instrucciones
//CREAR CARRITO DE COMPRA QUE MUESTRE  EL SUBTOTAL Y EL TOTAL CON IMPUESTO, NOTA: IMPUESTO ES DE 19%

let subTotal=0;

function addToCar(price){
    return subTotal + price; 
}

function calTax(subTotal){
    return 1.19 * subTotal;
}

 subTotal = addToCar(200);
 subTotal = addToCar(200);
 subTotal = addToCar(200);
 subTotal = addToCar(200);
 subTotal = addToCar(200);
 

 const TotalWithTax = calTax(subTotal);
 console.log(`The Subtotal is: $${subTotal}`);
 console.log(`The Total Whith Tax is: $${TotalWithTax}`);









