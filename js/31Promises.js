// PROMISES (PROMESAS)

//Siempre es una funcion y lo podemos hacer con arrows fuctions y lleva resolve(cuando cumpla la funcion(IF)), reject(cuando no se cumple la funcion(ELSE))

const usuarioAutenticado = new Promise((resolve, reject) => {
    const auth = true;

    if(auth){
        resolve('Usuario Atenticado');

    }else{
        reject('No se pudo iniciar sesión');

    }
});

//Para que lo pueda mostrar como Usuario Atenticado o No se pudo iniciar sesión, colocamos esta funcion.
usuarioAutenticado
      .then(function(resultado){ //then (entonces)
        console.log(resultado);
      })
      .catch(function(error){ // catch(atrapar)
        console.log(error);
      })

//con Arrow Functions
usuarioAutenticado
      .then(resultado => console.log(resultado))//then (entonces)
      .catch(error => console.log(error))// catch(atrapar)


//console.log(usuarioAutenticado);

// En lo Promises existen 3 valores:
// Pending: No se ha cumplido pero tampoco se ha rechazado.
// Fulfilled: Ya se cumplio la promises.
// Rejected: Se ha rechazado o no se pudo cumplir la promises.