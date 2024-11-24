//Objetos 
// NOTA: ESTO SI SE UTILIZA MUCHO EN JAVA.

const nombreProducto = "Monitor 20 Pulgadas";
const precio = 300;
const disponible = true;

// El objeto: El objeto reemplaza lo de arriba, ya que no tendriamos que estar creando varias variables, sino que lo creamos todos dentro de un objeto.

//Los Obejetos van dentro de unas const xxxx = { } y las variables no van con = sino con : y se separan con , no con ; EJEMPLO:

const producto = {
    nombreProducto : "Monitor 20 Pulgadas",
    precio : 300,
    disponible : true,
}

console.log(producto);

// // como hago para que me muestro algunos de los productos ejemplo el precio hago lo siguiente:
// // coloco el objeto + un . ejemplo:
console.log(producto.nombreProducto); 
console.log(producto.precio); 
console.log(producto.disponible); 

// // Tambien hay otra forma de llamarla, pero esta ya no se usa
console.log(producto["precio"]);

// MODIFICAR OBJETOS (QUITAR O AGREGAR)

//AGREGAR nueva propiedad 
// NOTA: llamas al objeto + . y la nueva variable ojo: lleva = no : EJEMPLO:
producto.imagen = "imagen.jpg";
console.log(producto);

// ELIMINAR propiedad solo se le agrega el delete adelante + el objeto . y la varible que quieres eliminar o quitar EJEMPLO:
delete producto.disponible;




