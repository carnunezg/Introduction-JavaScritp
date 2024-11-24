// Objeto Math

let resultado;

resultado = Math.PI; // Este me genera el PI 3.1416
resultado = Math.round(2.5); // El round me redondea resultado: 3 porque llegando siendo >=5 pasa a 3 o <4 es 2
resultado = Math.ceil(2.1); // El ceil redondea hacia arriba, resultado: 3
resultado = Math.floor(2.8); // El floor redondea hacia abajo, resultado: 2
resultado = Math.sqrt(144); // El sqrt me saca la raiz cuadrada, resultado: 12
resultado = Math.min(2, 5, 1, 6, 8, 3); // El min te saca el valor menos de la lista, resultado: 1
resultado = Math.max(2, 5, 1, 6, 10, 20); // El max te saca el valor menos de la lista, resultado: 20
resultado = Math.random(); // El random te saca un número aleatorio, con este comando te saca 0,xxxxx, nunca pasa al 1.
// otra forma de que pase de 1 podemos usar esto:
resultado = Math.floor( Math.random() * 30 ); 

