// PROGRAMACION ORIENTADA A OBJETO 

// CLASSES EN JAVASCRIPT.

class Producto { //CLASSES es la plantilla donde cada class se comienza con Mayuscula para diferenciarla
    constructor(nombre, precio) {//DATOS O ATRIBUTOS
        this.nombre = nombre;
        this.precio = precio;
    }

    formatearProducto() { //FUNCIONES O METODOS
        return `El Producto ${this.nombre} tiene un precio de: $ ${this.precio}`;
    }
}

const producto1 = new Producto('Monitor Curvo de 49"', 800); //Creando Objetos de la class de Producto
const producto2 = new Producto('Laptop', 300); //Creando Objetos de la class de Producto

// HERENCIA

class Libro extends Producto {// extends(hereda) aqui para repetir class creamos herencias del padre.
    constructor(nombre, precio, isbn) {//constructor son los datos o atributos del objeto
        super(nombre, precio);//super se usa para colocar lo que esta en la class Padre
        this.isbn = isbn;//Y aqui colocamos los nuevos metodos que tendrá la nueva class.
    }

    formatearProducto() { //FUNCIONES O METODOS
        return `${super.formatearProducto()} y su ISBN es ${this.isbn}`;//para no repetir la funcion de la class Padre lo llamamos con el super. mas la funcion de la class Padre
    }

}

const libro = new Libro('JavaScript la Revolución', 120, '827372638723');
console.log(libro.formatearProducto());
console.log(producto2.formatearProducto());

