//EVENTOS

//EVENTOS  quiere decir que todo lo que haga el usuario en la página es un evento, si da scroll, si da clic en un boton, si llena un formlulario todo eso son eventos.

//tenemos document: el cual toma todo el HTML
//Y tambien tenemos el Windows: el cual tomo toda la venta, es superor al document. EJEMPLO:


window.addEventListener('load', function() { // load: espera a que el JS y los archivos que dependan del HTML este listo, esto incluyen, imagenes u Hojas de estilos
    console.log(2);
});

//NOTA: window.addEventListener('load', function() { cuando el load (es el evento) se cumpla se ejecuta esta funcion, se le conoce como callback

//Otra forma e hacerlo:

window.onload = function(){
    console.log(3);
}

//Otro forma de evento.

//Esta forma simpre se va a ejecutar de primero que todos; porque el evento 'DOMContentLoaded' solo va a descargar el HTML, no espera que se carge los estilos e imagenes. (PREGUNTA PARA ENTREVISTA DE TRABAJO)

// PREGUNTA PARA ENTREVISTA DE TRABAJO ---- DIFERENCIA ENTRE EL 'load' VS el 'DOMContentLoaded':
//RESPUESTA: el load espera que se carge todos lo que esta en Window, el cual son estilos, e imagenes, todo.
// y el DOMContentLoaded: solo va a cargar el HTML, solo el HTML. los estilos e imagenes NO.

//Por lo general usamos mas este, porque es  mas rapido y solo queremos que se carge el HTML: ejemplo:

document.addEventListener('DOMContentLoaded', function(){
    console.log(4);
});

console.log(5);
console.log(8);

//Tambien puedes usar function apartes y luego registralo en los eventos: ejemplo

function imprimir(){
    console.log(22);
}

//Y luego lo mas a llamar en los eventos:

window.addEventListener('load', imprimir);

//Si te fijas no es tan largo el codigo, esto se usa cuando tienes una funcion muy extensa, ademas al llamar la funcion no hace falta que le coloques el () ejemplo imprimir()

//Hay mas eventos ejemplo:

window.onscroll = function() {
    console.log('scrolling...');
}

//Seleccionar elementos y asociarles un evento

// const btnEnviar = document.querySelector('.botonEnviar'); // el querySelector: solo me toma un objeto o una clase y una vez que tengo seleccionado la clase piedo aplicarle el evento; ejemplo:

// btnEnviar.addEventListener('click', function(e){ // muchos utilizan evento con: e, evt, event, pero simepre se usa la e es mas corta
//     console.log(e);
//     e.preventDefault();// Esto es muy impportante porque esta previniendo la acción de envio, esto es muy util para validar un formulario, el preventDefault() siempre se va a requerir en el formulario
//     console.log('Enviado forlulario');
// });
// //el evento de click sirve para cualquier cosa, puede ser para un boton, texto, imagen etc...

//ORGANIZAR NUESTRO CODIGO:

//1ERO: TODAS LAS VARIABLES EN LA PARTE SUPERIOR

//Eventos de los Inputs y los Textarea

const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');

//2DO TODOS LOS addEventListener
//El input me permite ver en tiempo real lo que el usuario esta escribiendo

nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);

//Evento con Submit, este solo lo vamos a utilizar para cuando tenemos un formulario.
// el submit por lo general esta asociado a las clase que tiene el formulario en el HTML.

formulario.addEventListener('submit', function(e){
    e.preventDefault();
    
    //tenemos que validar el formulario

    const {nombre, email, mensaje} = datos;

    if(nombre === '' || email === '' || mensaje === ''){
        mostrarAlerta('Todos los campos son obligatorios.', true);

        return; //corta la ejecucion del codigo, si se cumple la condicion corta  la ejecución.
    }
    
    //Y luego enviar formulario
    // Limpia los valores de los campos de texto

    // document.getElementById("nombre").value = "";
    // document.getElementById("email").value = "";    
    // document.getElementById("mensaje").value = ""; 
    
    //Crear la alerta de envio con exito
    mostrarAlerta('Mensaje enviado exitosamente.');
    // Limpia los valores de los campos de texto   
   
});

//3ER TODAS LAS FUNCIONES

function leerTexto(e){
    datos[e.target.id] = e.target.value; // datos[e.target.id] = e.target.value me indica que almacene dentro del objeto los id de los input y Textarea. 
    
    // console.log(datos);
}

// //Muestrar un error en pantalla.
// function mostrarError(mensaje, error = null){
//     // console.log(mensaje); en vez de mostrarlo por consola, vamos a crear codigo HTML para mostrar en pantalla.
//     const error = document.createElement('P');// Creamos la etiqueta de parrafo.
//     error.textContent = (mensaje); // mostramos el texto que esta en mensaje, el cual es 'Todos los campos son obligatorios.'
//     error.classList.add('error'); // creamos una nueva clase dentro de JS para luego darle estilos en CSS.

//     // console.log(error);//sustituimos el console.log por el :
//     formulario.appendChild(error); // esto es para mostrarlo en la página. llamamos el formulario el cual es la clase y dentro de la funcion e appendChild colocamos la variable error

//     //para que desaparesca el error en 5 segundos utilizamos el setTimeout:
//     setTimeout(()=>{
//         error.remove();//el metodo de remove() es para eliminar un elemento
//     }, 5000);// utlizamos 5segundos para que se elimine el elemento
// }

// //Muestrar un mensaje de envio en pantalla.
// function mostrarEnvioCorrecto(mensaje){
//     // console.log(mensaje); en vez de mostrarlo por consola, vamos a crear codigo HTML para mostrar en pantalla.
//     const envioCorrecto = document.createElement('P');// Creamos la etiqueta de parrafo.
//     envioCorrecto.textContent = mensaje; // mostramos el texto que esta en mensaje, el cual es 'Todos los campos son obligatorios.'
//     envioCorrecto.classList.add('envioCorrecto'); // creamos una nueva clase dentro de JS para luego darle estilos en CSS.

//     // console.log(error);//sustituimos el console.log por el :
//     formulario.appendChild(envioCorrecto); // esto es para mostrarlo en la página. llamamos el formulario el cual es la clase y dentro de la funcion e appendChild colocamos la variable error

//     //para que desaparesca el error en 5 segundos utilizamos el setTimeout:
//     setTimeout(()=>{
//         envioCorrecto.remove();//el metodo de remove() es para eliminar un elemento
//     }, 5000);// utlizamos 5segundos para que se elimine el elemento
// }


//AHORA PODEMOS REFACTORIZAR (SIMPLIFICAR) ESTAS FUNCIONES YA QYUE SON MUY SIMILARES, QUEDARIA DE ESTA FORMA

function mostrarAlerta(mensaje, error = null){
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;

    if(error){
        alerta.classList.add('error');
    }else{
        alerta.classList.add('envioCorrecto');
    }

    formulario.appendChild(alerta);


//para que desaparesca el error en 5 segundos utilizamos el setTimeout:
    setTimeout(()=>{
    alerta.remove();//el metodo de remove() es para eliminar un elemento
    }, 5000);// utlizamos 5segundos para que se elimine el elemento

}



 