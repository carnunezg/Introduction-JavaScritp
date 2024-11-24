// THIS (ESTE O ESTA) esto metodo se usa cuando queremos llamar algun elemento de un objeto con temple string ${this.elemnto} EJEMPLO:

const reservacion = {
    nombre: 'Carlos',
    apellido: 'Nuñez',
    total: 5000,
    pagado: false,
    informacion: function() {
        console.log(`El cliente ${this.nombre} reservo y su total a pagar es: ${this.total}`);
    }
}

reservacion.informacion();

//el elemento de informacion tambien lo podriamos colocar con arrow Function, pero tendriamos que declarar fuera del objeto la variable con windpw.nombre = 'Nombre' Ejemplo:

window.nombre = 'nombre';
window.total = 'total';

const reservacion1 = {
    nombre: 'Carlos',
    apellido: 'Nuñez',
    total: 5000,
    pagado: false,
    informacion: () => {
        console.log(`El cliente ${this.nombre} reservo y su total a pagar es: ${this.total}`);
    }
}

reservacion.informacion();

//NOTA: esto podria ser una pregunta para la entrevista: te pueden colocar el siguinet ejemplo y te van a decir que resultado te muestra en la consola. ejemplo:
const datos = {
    nombre: 'Carlos',
    apellido: 'Nuñez',
    informacion: () => {
        console.log(`${this.nombre}`);
    }
}
datos.informacion()

//esto como resultado no muestra nada, solo me mostrará nombre pero no lo que contiene nombreo sino un undefined. esto sucede porque lo estoy trabajando con arrow function, para que funcione con arrow fuctions tengo que declarar la variable nombre fuera del odjeto pero es decir en la ventana, seria con window.nombre = 'carlos'; EJEMPLO:

window.nombre = 'carlos'; 

const datos1 = {
    nombre: 'Carlos',
    apellido: 'Nuñez',
    informacion: () => {
        console.log(`${this.nombre}`);
    }
}
datos1.informacion()