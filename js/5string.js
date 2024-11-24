// String o Cadenas de Textos

const producto = 'Monitor de 20"';
const producto2 = 'Monitor HD';

// length es para la extension
console.log(producto.length);// el .length es una propiedad, ya que no tiene parentecis, esto me indica cuantos caracteres (contando los espacios) tiene la variable de producto, en este caso: 14
console.log(producto2);

// IndexOf (Retorna posición)
console.log(producto.indexOf('de')); // Este es un metodo porque lleva parentecis, y nos sirve para para ubicar una palabra en especifico dentro de un texto, en este caso arroja el valor 8, porque se encuentra en el caracter 8 contando desde la posicion 0, en el caso que no se encuentre arroja el valor -1 ejemplo:
console.log(producto.indexOf('azul'));

// Hay otros modernos mas nuevo, por ejemplo el:

// Includes (retorna true o false)
console.log(producto.includes('de'));//Este es un metodo porque lleva parentecis, y nos sirve para saber si una palabrase encuentra dentro de un texto, en este caso arroja el valor True, porque si se encuentra la palabra, en el caso que no se encuentre arroja el valor false ejemplo:
console.log(producto.includes('azul'));
