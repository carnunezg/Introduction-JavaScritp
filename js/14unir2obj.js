//UNIR 2 OBJETOS CON EL SPREAD OPERATOR

const producto = {
    nombreProducto : "Monitor 20 Pulgadas",
    precio : 300,
    disponible : true,
}

const medidas = {
    peso : "1kg",
    medida : "1m",
}

// NOTA: las buenas practica o lo que se nos recomienda es que no se modifiquen los datos originales.

//Lo que se puede hacer para unir estos objetos deemos utilizar el metodo de SPREAD OPERATOR, se crea una nueva variable y = y dentro de unas { } s coloca los objetos a unir con ...objeto1, ...objeto2  JEMPLO:

const nuevoProducto = {...producto, ...medidas};
console.log(nuevoProducto);

for(let i=0; i<=10; i++) {
    console.log(i);
}

let contador=1;

while(contador<=10) {
    console.log(contador);
    contador ++;
}