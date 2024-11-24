"use strict"; // me permite correo el JavaStrinpt de forma estricta, es decir me va arrojar error en la consilo cuando algo esta masl escrito o con malas practoca.

//OBJECT METHODS (MÉTODOS DE OBJETO9)

const producto = {
    nombreProducto : "Monitor 20 Pulgadas",
    precio : 300,
    disponible : true,
}

// 1er Metodo de Objeto: freeze: 
//FREEZE: te permite congelar todo, es decir: no puedes agregar, eliminar ni modificar las propiedades de un odjeto. EJEMPLO:

Object.freeze(producto);

producto.precio = 400;//no se puede modificar
producto.imagen = "imagen.png"//agregar nueva propiedad al objeto
delete producto.precio;// eliminar una propiedad del objeto

console.log(producto);

// 2er Metodo de Objeto: seal: 
//SEAL: te permite congelar todo, exceto modificar, es decir: no puedes agregar, eliminar pero si puedes modificar las propiedades de un odjeto. EJEMPLO:

Object.seal(producto);

producto.precio = 400;//si pueder modificar la propiedad de un objeto
producto.imagen = "imagen.png"//no se puedes agregar nueva propiedad al objeto
delete producto.precio;// no se puede eliminar una propiedad del objeto

console.log(producto);


//DIFERENCIA ENTRE FREEZE Y SEAL ES:
//FREZZE: NO TE PERMITE AGREGAR, NI MODIFICA NI ELIMINAR.
//SEAL: NO PUEDES AGREAGR, NI ELIMINAR PERO SI MODIFICAR.