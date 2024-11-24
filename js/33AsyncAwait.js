// // Async (asincrona) - Await (esperar) 

// function descargarNuevosClientes(){
//     return new Promise( resolve => {
//         console.log('Descargando Clientes... espere...');

//         setTimeout( () => {
//             resolve('Los Clientes fueron Descargados');
//         }, 5000);//esto son 5 segundos
//     });
// }

// async function app(){
//     try {
//         const resultado = await descargarNuevosClientes();
//         console.log(resultado);
//     } catch (error) {
//         console.log(error);
//     }
// }
// app();

//ENTREVISTA DE TRABAJO, TE PUEDEN PREGUNTAR ¿COMO PUEDES OPTIMIZAR UN LLAMADO ASYNC-AWAIT?
//RESPUESTA: LO REALIZAMOS CON UN Promise.all([dentro de un arreglo las funciones])EJEMPLO:

function descargarNuevosClientes(){
    return new Promise( resolve => {
        console.log('Descargando Clientes... espere...');

        setTimeout( () => {
            resolve('Los Clientes fueron Descargados');
        }, 5000);//esto son 5 segundos
    });
}

function descargarUltimosPerdidos(){
    return new Promise( resolve => {
        console.log('Descargando Pedidos... espere...');

        setTimeout( () => {
            resolve('Los Pedidos fueron Descargados');
        }, 5000);//esto son 5 segundos
    });
}

async function app(){
    try {
        // const clientes = await descargarNuevosClientes();
        // const pedidos = await descargarUltimosPerdidos();
        // console.log(clientes);
        // console.log(pedidos);

//ENTREVISTA DE TRABAJO, TE PUEDEN PREGUNTAR ¿COMO PUEDES OPTIMIZAR UN LLAMADO ASYNC-AWAIT?
//RESPUESTA: LO REALIZAMOS CON UN Promise.all EJEMPLO:

    const resultado = await Promise.all([descargarNuevosClientes(), descargarUltimosPerdidos()]);
    console.log(resultado[0]);
    console.log(resultado[1]);
    } catch (error) {
        console.log(error);
    }
}
app();