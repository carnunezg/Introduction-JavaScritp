// FUNCIONES CON PARAMETROS Y ARGUMENTOS


//Los PARAMENTROS van dentro de los parentecis() de una funcion. Ejemplo:
function sumar(num1, num2) { //num1 y num2 son paramentros y actuan como variables dentro de una funcion.
    console.log(num1 + num2);
}
sumar(10, 10); // Esto son ARGUMENTOS o los valores reales que colocamos en los paramentros num1 y num2
//y de esta forma es mas dinamica y podemos usar esta funcion varias veces, ejemplo:
sumar(10, 4); 
sumar(6, 10); 
sumar(7, 6); 

// Tambien es importante que cuando creas un formulario y cuando los campos no son completados en su totalidad, podemos darle valores 0 a nuestras variables dentro de la funcion, ya que sino le damos valor = 0 retornara un NaN. EJEMPLO:
const sumar2 = function(n1=0, n2=0){
    console.log(n1 + n2);
}
sumar2();//retorna = 0
sumar2(2);//retorna = 2
sumar2(5, 5);//retorna = 10