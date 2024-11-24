// Notification API ejemplo, para notificaciones cuando alguien sube un video a su canal de Youtube y te llega una notificacón.

//EJEMPLO PARA LAS NOTIFICACIONES EN LA WEB.

const boton = document.querySelector('#boton'); // document, estoy seleccionando el documento de HTML y querySelector(Selector de consultas)

//addEventListener (agregar detector de eventos)
boton.addEventListener('click', ()=>{ //requestPermission(solicitar permiso)
    Notification.requestPermission()
           .then(resultado => console.log('El Resultado es ${resultado}'))
})

if(Notification.permission == 'granted'){
    new Notification('Esta es una notificación', {
        icon: 'img/ccj.png',
        body: 'Código con Juan, los mejores tutoriales'
    })
}

