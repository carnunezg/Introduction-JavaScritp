//PROGRAMACION ORIENTADA A OBJETO (POO)

// **Object Literal ** de esta forma nosotros le damos valores a los elemnto manual, es decir es oblogatorio colocarlo, ejemplo
const producto = {
    nombre: 'Carlos',
    precio: 800
}

// Ahora con el Object Constructor: con esto nosotros colocamos los paraentros y luego podemos darles argunmentos a esos parametros sin necesidad de colocarlselos dentro del objeto, ejemplo:

//NOTA: la diferencia que hay con Object Literal vs Object Constructor es que con Object Constructor se comienza con function, y usamos el this. ejemplo

function Producto(nombre, precio, disponible){ //Producto es la clase de esta funcion, por eso los colocamos en mayusculo al inicio para diferenciarla.
    this.nombre = nombre;// es recomendable usar los mismo nombre que usamos en los parametros para no confundirnos
    this.precio = precio; //Los this son los valores del objeto
    this.disponible = disponible; //Los this son los valores del objeto
}
//El ProtoType: son funciones. y nos va a prmitir crear funciones que solo se utilizan en un objeto en especifico y nos mantiene el código mas organizado.
Producto.prototype.formatearProducto = function() {// llamamos la clase.prototype.formatearLaClase = y su funcion
    return `El Producto ${this.nombre} tiene un precio de: $ ${this.precio}`; //Los this son los valores del objeto
}

//Para darles argumentos en Object Constructor creamos una variable = new y el objeto(colocamos los argumentos que le vamos a dar, si es un string, number or boolens)
const producto2 = new Producto('Monitor Curvo de 49"', 900, false);
const producto3 = new Producto('Laptop', 500, true);

function formatearProducto(producto) {
    return `El Producto ${producto.nombre} tiene un precio de: $ ${producto.precio}`;
}

console.log(producto2);
console.log(producto3);

console.log(producto2.formatearProducto());
console.log(producto3.formatearProducto());

//_______________________________________________________________________________//
//PARA UNA ENTREVISTA DE TRABAJO, TE PUEDEN PEDIR QUE REALICES ESTE CODIGO.

function Producto(nombre, precio, disponible){ //Producto es la clase de esta funcion, por eso los colocamos en mayusculo al inicio para diferenciarla.
    this.nombre = nombre;// es recomendable usar los mismo nombre que usamos en los parametros para no confundirnos
    this.precio = precio; //Los this son los valores del objeto
    this.disponible = disponible; //Los this son los valores del objeto
}
//El ProtoType: son funciones. y nos va a prmitir crear funciones que solo se utilizan en un objeto en especifico y nos mantiene el código mas organizado.
Producto.prototype.formatearProducto = function() {// llamamos la clase.prototype.formatearLaClase = y su funcion
    return `El Producto ${this.nombre} tiene un precio de: $ ${this.precio}`; //Los this son los valores del objeto
}

//Para darles argumentos en Object Constructor creamos una variable = new y el objeto(colocamos los argumentos que le vamos a dar, si es un string, number or boolens)
// const producto2 = new Producto('Monitor Curvo de 49"', 900, false);
// const producto3 = new Producto('Laptop', 500, true);








