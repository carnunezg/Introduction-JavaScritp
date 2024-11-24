// METODOS DE PROPIEDAD.

//CREAMOS UN REPORODUCTOR DE MUSICA COMO EJEMPLO:

const reproductor = {
    reproducir : function(id){
        console.log(`Reproduciendo Canción con el ID "${id}"`);
    },
    pausar : function() {
        console.log('Pausando...');
    },
    crearPlayList : function(nombre){
        console.log(`Creando PlayList: ${nombre}`);
    },
    reproduciendoPlayList : function(nombre){
        console.log(`Reproduciendo la PlayList: ${nombre}`);
    },
    // eliminarCancion : function(id){ //Ejemplo 
    //     console.log(`Eliminando la Canción ${id}`);
    // }
    
}
reproductor.borrarCancion = function(id){ // esta es para agregar un elimento a un odjeto, como tambien lo podria agreagr antes al objeto con el ejemplo de arriba.
    console.log(`Eliminando la Canción ${id}`);
}

reproductor.reproducir(3840);
reproductor.pausar();
reproductor.crearPlayList('Heavy Metal');
reproductor.reproduciendoPlayList('Heavy Metal');
reproductor.borrarCancion(35);
// reproductor.eliminarCancion(45);