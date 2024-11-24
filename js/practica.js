// Ejercicio 1
//Empezemos por lo más sencillo, usa el console.log para imprimir "Hola Mundo" en la consola.

// console.log('Hola Mundo!');

// Ejercicio 2
// Escribe una función llamada "isOldEnoughToDrink".
// Dado un número, en este caso una edad, "isOldEnoughToDrink" retorna si la persona de esa edad tiene la edad necesaria para beber legalmente en los Estados Unidos.
// Pista
// La edad legal para poder beber en los Estados Unidos es de 21 años.

// let ageToDrink;

// function isOldEnoughToDrink(ageToDrink){
//     return ageToDrink >= 21;

// }
// console.log(isOldEnoughToDrink(22));

// Ejercicio 3
// Escribe una función llamada "isOldEnoughToDrive".
// Dado un número, en este caso una edad, "isOldEnoughToDrive" retorna si la persona de esa edad tiene la edad necesaria para conducir legalmente en los Estados Unidos.
// Pista: La edad legal para poder conducir en los Estados Unidos es de 16 años.

// let ageToDriver;

// function isOldEnoughToDrive(ageToDriver){
//     return ageToDriver >=16;
// }

// console.log(isOldEnoughToDrive(22));

// Ejercicio 4
// Escribe una función llamada "isOldEnoughToVote".
// Dado un número, en este caso una edad, 'isOldEnoughToVote' retorna si la persona de esa edad tiene la edad necesaria para votar legalmente en los Estados Unidos.
// Pista: La edad legal para poder beber en los Estados Unidos es de 18 años.

// let ageToVote;

// function isOldEnoughToVote(ageToVote){
//     return ageToVote >=18;
// }
// console.log(isOldEnoughToVote(17));

// Ejercicio 5
// Escribe una función llamada "isOldEnoughToDrinkAndDrive".
// Dado un número, en este caso una edad, "isOldEnoughToDrinkAndDrive" retorna si la persona de esa edad tiene la edad necesaria para beber y conducir legalmente en los Estados Unidos.
// La edad legal para poder beber en los Estados Unidos es de 21 años.* Siempre es ilegal beber y conducir en los Estados Unidos. // --> false

// function isOldEnoughToDrinkAndDrive(age){
//     return `"${false}" Siempre es ilegal beber y conducir en los EEUU.`
// }
// console.log(isOldEnoughToDrinkAndDrive(22));

//_______________________________________________
// function isOldEnoughToDrinkAndDrive(age){
//     if(age >= 21){
//         return `"${age} años": Tienes la edad necesaria para beber y conducir legalmente en los Estados Unidos. Pero recuerda que Siempre es ilegal beber y conducir en los Estados Unidos.`;
//     }
//     else if(age >=16){
//         return `"${age} años": Tienes edad para manejar, pero no tienes edad para beber en los Estados Unidos.`;
//     }
//     else{
//         return `"${age} años": No tienes edad para manejar y beber en los Estados Unidos.`;
//     }
// }
// console.log(isOldEnoughToDrinkAndDrive(22));
// console.log(isOldEnoughToDrinkAndDrive(17));
// console.log(isOldEnoughToDrinkAndDrive(10));

// Ejercicio 6
// Escribe una función llamada "getProperty".
// Dado un objeto y una key, "getProperty" retorna el valor de la propiedad con esa key.
// Pista: Si no hay una propiedad en esa key, debería retornar undefined.

// let car = {
//     id: 1,
//     model: 'Mercedes Benz',
//     price: '$500.000'
// }

// function getProperty(car, key){
//     return car[key];
// }

// console.log(getProperty(car, 'model'));


// Ejercicio 7
// Escribe una función llamada "addProperty".
// Dado un objeto y una key, "addProperty" establece una nueva propiedad en ese objeto saso con un valor verdadero. // --> true

// let myObj = {};

// function addProperty(myObj, key){
//     return myObj[key] = true;
// }

// myObj.id = 1;
// myObj.name = 'Carlos';

// console.log(addProperty(myObj, 'disponible'));
// console.log(myObj);


// Ejrcicio 8
// Escribe una función llamada "removeProperty".
// Dado un objeto y una key, "removeProperty" elimina esa llave de ese objeto dado.

// let obj = {
//     name: 'Carlos',
//     age: 36
// };

// function removeProperty(obj, key){
//     delete obj[key];
// }

// console.log(removeProperty(obj, 'name'));
// console.log(obj.name);
// console.log(obj);


// Ejercicio 9
// Escribe una función llamada "checkAge".
// Dado el nombre y la edad de una persona, "checkAge" retorna uno de estos dos mensajes:
// ¡Para la casa, {insert_name_here}!, si son menores de 21.
// ¡Bienvenido {insert_name_here}!, si son mayores de 21..
// Reeplaza "{insert_name_here}" con el nombre dado. :)

// function checkAge(name, age){
    
//     if(age < 21){        
//         return `¡Para la casa "${name}"!`;

//     }else{
//         return `¡"${name}" Bienvenido!`;

//     }
// }

// console.log(checkAge('Carlos', 36));
// console.log(checkAge('Juan', 15));

// Ejercicio 10
// Escribe una función llamada "getFullName".
// Dado un nombre y un apellido, "getFullName" retorna un string con el nombre y apellido separados por un espacio.

// function getFullName(name, lastname){
//     return `${name} ${lastname}`;
// }

// console.log(getFullName('Carlos', 'Nuñez'));

// Ejercicio 11
// Escribe una función llamada "getLengthOfWord".
// Dada un palabra, "getLengthOfWord" retorna la cantidad de letras que tiene esa palabra.
// Resultado 'some' // --> 4

// function getLengthOfWord(word){
//     return word.length;
// }

// console.log(getLengthOfWord('some'));
// console.log(getLengthOfWord('Carlos'));

// Ejercicio 12
// Escribe una función llamada "getLengthOfTwoWords".
// Dado dos palabras, "getLengthOfTwoWords" retorna la suma de sus letras.
// Resultado: ('some', 'words'); // --> 9

// function getLengthOfTwoWords(word1, word2){
//     return word1.length + word2.length;
// }

// console.log(getLengthOfTwoWords('some', 'words'));

// Ejercicio 13
// Escribe una función llamada "isGreaterThanTen".
// Dado un número, "isGreaterThanTen" retorna si éste es mayor a 10. // --> true

// function isGreaterThanTen(number){
//     return number > 10;
// } 

// console.log(isGreaterThanTen(11));
// console.log(isGreaterThanTen(9));

// Ejercicio 14
// Escribe una función llamada "isLessThan30".
// Dado un número, "isLessThan30" retorna si ese número es menor de 30. // --> true

// function isLessThan30(number){
//     return number < 30;
// }

// console.log(isLessThan30(9));
// console.log(isLessThan30(31));

// Ejercicio 15
// Escribe una función llamada "equalsTen".(igual a 10)
// Dado un número, "equalsTen" retorna si el ese número es o no igual a 10. // --> false
// Pista: Recuerda usar tres signos iguales (===) para comparar valores exactos.

// function equalsTen(number){
//     return number === 10; // Los === obliga que el numero tiene que ser estrictamente 10, en cambio el == solo compara que sea igual a 10 no importa si son string o number.
// }

// console.log(equalsTen('10'));
// console.log(equalsTen(10));

// Ejercicio 16
// Escribe una función llamada "isLessThan".(es menor que)
// Dado 2 números, "isLessThan" retorna si num2 es menor que num1. (9, 4) --> verdadero

// function isLessThan(num1, num2){
//     return num2 < num1;
// }

// console.log(isLessThan(9, 4));
// console.log(isLessThan(4, 9));

// Ejercicio 17
// Escribe una función llamada "isGreaterThan".(es mayor que)
// Dado 2 números, "isGreaterThan" retrona si num2 es mayor que num1.  (11, 10); // --> false

// function isGreaterThan(num1, num2){
//     return num2 > num1;
// }

// console.log(isGreaterThan(11, 10));
// console.log(isGreaterThan(10, 11));

// Ejercicio 18
// Escribe una función llamada "isEqualTo". (es igual a)
// Dado 2 números, "isEqualTo" retorna si num2 es igual a num1. 11, 10 // --> false

// function isEqualTo(num1, num2){
//     return num2 == num1;
// }

// console.log(isEqualTo(11, 10));
// console.log(isEqualTo(10, 10));
// console.log(isEqualTo(10, '10'));

// Ejercicio 19
// Escribe una función llamada "isEven". (es par)
// Dado un número, "isEven" retorna si el número es par. numero: 11 // --> falso % Modulo

// function isEven(num){
//     return num % 2 === 0;
// }

// console.log(isEven(11));
// console.log(isEven(12));

// Ejercicio 20
// Escribe una función llamada "isOdd".(es impar)
// Dado un número, "isOdd" retorna si el número es impar.. 11: // --> true

// function isOdd(num){
//     return num % 2 !== 0;
// }

// console.log(isOdd(11));

// Ejercicio 21
// Escribe una función llamada "isSameLength".(es la misma longitud)
// Dado dos palabras, "isSameLength" retorna si ambas palabras tienen la misma cantidad de letras. --> true

// function isSameLength(word1, word2){
//     return word1.length === word2.length;

// }

// console.log(isSameLength('words', 'super'));
// console.log(isSameLength('Hola', 'super'));

// Ejercicio 22 
// Escribe una función llamada "areBothOdd". (son ambos impares)
// Dado 2 números, "areBothOdd" si es verdadero o no que ambos números son impares.  (1, 3) // --> true

// function areBothOdd(num1, num2){
//     return num1 % 2 !== 0 && num2 % 2 !== 0;
// }

// console.log(areBothOdd(1, 3));
// console.log(areBothOdd(2, 3));
// console.log(areBothOdd(2, 4));

// Ejercicio 23
// Escribe una función llamada "isEitherEven". (es cualquiera par)
// Dado 2 números, "isEitherEven" retorna si es verdadero o no que uno de los números es par. (1, 4) // --> true

// function isEitherEven(num1, num2){
//     return num1 % 2 === 0 || num2 % 2 === 0;
// }

// console.log(isEitherEven(1, 4));
// console.log(isEitherEven(2, 4));
// console.log(isEitherEven(1, 3));

// Ejercicio 24
// Escribe una función llamada "isOddLength". (es impar la longitud)
// Dado una palabra, "isOddLength" retorna si la cantidad de letras que tiene la palabra es impar. 'Mundo' // --> true

// function isOddLength(word){
//     return word.length % 2 !== 0;
// }

// console.log(isOddLength('Hola'));
// console.log(isOddLength('Mundo'));

// Ejercicio 25 
// Escribe una función llamada "isEvenLength".(es par la longitud)
// Dado una palabra, "isEvenLength" retorna si la cantidad de letras que tiene la palabra es par.'Mundo' // --> false

// function isEvenLength(word){
//     return word.length % 2 === 0;
// }

// console.log(isEvenLength('Hola'));
// console.log(isEvenLength('Mundo'));

// Ejercicio 26
// Escribe una función llamada "isEvenAndGreaterThanTen".
// Dado un número, "isEvenAndGreaterThanTen" retorna si el número es par y mayor que 10. '13'// --> false

// function isEvenAndGreaterThanTen(num){
//     return num % 2 === 0 && num > 10;
// }

// console.log(isEvenAndGreaterThanTen(13));
// console.log(isEvenAndGreaterThanTen(12));
// console.log(isEvenAndGreaterThanTen(8));

// Ejercicio 27 Promedio
// Escribe una función llamada "average".
// Dado 2 números, "average" retorna su promedio. average(4, 6)// --> 5
// NOTA: Para sacar el promedio se sumas los 2 numeros y se divide con la cantida de numro en este caso / 2

// function average(num1, num2){ 
//     return (num1 + num2) / 2;
// }

// console.log(average(4, 6));

// Ejercicio 28 
// Escribe una función llamada "computeAreaOfATriangle".(calcular el área de un triángulo)
// Dado la base y altura de un triángulo, "computeAreaOfATriangle" retorna el área de un triángulo. computeAreaOfATriangle(4, 6);// --> 12 
// Formula: A=(b*h)/2

// function computeAreaOfATriangle(base, height){
//     return (base * height) / 2;
// }

// console.log(computeAreaOfATriangle(4, 6));

// Ejercicio 29
// Escribe una función llamada "cube".
// Dado un número, "cube" retorna el cubo de ese número. cube(3);// --> 27

// function cube(num){
//     return num ** 3;
// }

// console.log(cube(5));

// Ejercicio 30
// Escribe una función llamada "square".
// Dado un número, "square" retorna el cuadrado de dicho número.  square(5)// --> 25

// function square(num){
//     return num ** 2;
// }

// console.log(square(5));

// Ejercicio 31
// Escribe una función llamada "computeAverageLengthOfWords". (calcular el promedio de la longitud de las palabras)
// Dado dos palabras, "computeAverageLengthOfWords" retorna el promedio de la cantidad de letras de ambas..('code', 'programs');// --> 6

// function computeAverageLengthOfWords(word1, word2){
//     return (word1.length + word2.length) / 2;
// }

// console.log(computeAverageLengthOfWords('code', 'programs'));

// Ejercicio  32
// Escribe una función llamada "getAverageOfElementsAtProperty". (obtener el promedio de elementos en la propiedad)
// Dado un objeto y una key, "getAverageOfElementsAtProperty", retorna el promedio de todos los elementos en el array ubicado en esa key.
// Notas:
// Si el array en esa key está vacío, debería retornar 0.
// Si la propiedad en esa key no es un array, debería retornar 0.
// Si no hay ninguna propiedad en esa key, debería retornar 0.
// key: [1, 2, 3] Resultado: // --> 2

// let obj = {
//     key: [1, 2, 3]
// };

// function getAverageOfElementsAtProperty(obj, key) {

//     if (obj[key] && obj[key].length > 0) { // obj[key]: para que me muestre 0 cuando se elimine el arreglo - obj[key].length: para que me muestre 0 cuando el array este vacio.
//         let sum = obj[key].reduce(function(total, num){//siempre lleva el total(es el resultado acumulado de todas las sumas anteriores) y el num(es el siguiente elemento del array), el cual se van a sumar
//             return total + num;
//         }, 0);

//         return sum / obj[key].length;
//     }
//     return 0;
// }

// console.log(getAverageOfElementsAtProperty(obj, 'key'));

// __________________________________________//

// let obj = {
//     key: [1, 2, 3]
// };

// function getAverageOfElementsAtProperty(obj, key){
//     if(Array.isArray(obj[key])){
//         let sum = obj[key].reduce(function(acc, num){
//             return acc + num;
//         }, 0);
//         return sum / obj[key].length;
//     }
//     return 0;
// }

// console.log(getAverageOfElementsAtProperty(obj, 'key'));

// Ejercicio 80
// Escribe una función llamada "addToFrontOfNew".(agregar uno nuevo al frente)
// Dado un array y un elemento, "addToFrontOfNew" retorna una nuevo array que contiene todos los elementos de ese array más el elemento dado al frente/ en primer lugar.
// Importante: Debería ser una NUEVA instancia del array y la instancia original del array.
// Resultado: // --> [3, 1, 2,]

// let array = [1, 2];

// function addToFrontOfNew(){
//     // //Nuevo array
//     let newArray = [3, ...array];
//     return newArray;
// }

// console.log(addToFrontOfNew());
// console.log(array);

// //__________________otra forma de agregar nuevo array con SLICE Y agregar al comienzo  un elemento a un array con unshift_______________
// function addToBackOfNew(array, element){
//     let newArray = array.slice();
//     newArray.unshift(element);
//     return newArray; 
// }

// console.log(addToBackOfNew(array, 3));
// console.log(array);

// //Ejercicio 81
// Escribe una función llamada "addToBackOfNew". (agregar un nuevo al final)
// Dado un array y un elemento, "addToBackOfNew" retorna un clon de ese array dado con el elemento añadido al final.
// Importante: Debería ser una NUEVA instancia del array y la instancia original del array.
// Resultado: // --> [1, 2, 3]

// let array = [1,2];

// function addToBackOfNew(){
//     let newArray = [...array, 3];
//     return newArray;
// }
// console.log(addToBackOfNew());
// console.log(array);

// //__________________otra forma de agregar nuevo array con SLICE Y agregar al final un elemento a un array con PUSH_________________________
// function addToBackOfNew(array, element){
//     let newArray = array.slice();
//     newArray.push(element);
//     return newArray; 
// }

// console.log(addToBackOfNew(array, 3));
// console.log(array);

// Ejercicio 82
// Escribe una función llamada "getAllElementsButNth". (obtener todos los elementos menos el enésimo)
// Dado un array y un índice, "getAllElementsButNth" retorna un array con todos los elementos salvo el nth. // --> ['a', 'c']

// let array = ['a', 'b', 'c'];

// function getAllElementsButNth(array, index){
//     return array.filter(function(_, i){ //function(_, i): Aquí estamos definiendo la función de callback que se pasará a filter(). Esta función recibe dos argumentos: _ y i. El primer argumento (_) no se utiliza en la función, ya que estamos interesados únicamente en el índice del elemento (i).
//         return i !== index;
//     });

// }
//  console.log(getAllElementsButNth(array, 1));

//  _______________________Para filtar las b de un array____________

//  let array = ['a', 'b', 'c', 'b'];

// function getAllElementsButNth(array, index){
//     return array.filter(function(i){
//         return i !== index;
//     });

// }
//  console.log(getAllElementsButNth(array, 'b'));

// Ejercicio 83
// Escribe una función llamada "areValidCredentials". (son credenciales válidas)
// Dado un nombre y una contraseña, "areValidCredentials" retorna verdadero si el nombre tiene más de 3 caracteres Y, la contraseña tiene por lo menos 8 caracteres. De lo contrario retorna falso. // --> true

// function areValidCredentials(user, password){
//     if(user.length > 3 && password.length > 8){
//         return true;

//     }else{
//         return false;
//     }
// }

// console.log(areValidCredentials('Ritu', 'mylongpassword'));
// console.log(areValidCredentials('Ema', '1234'));

// Ejercicio 84
// Escribe una función llamada "getIndexOf". (obtener el índice de)
// Dado un caracter y un string, "getIndexOf" retorna la primera posición de dicho caracter en dicho string.
// Notas:
// El índice de los strings parte desde el 0, esto significa que el primer caracter en un string está en la posición 0.
// Cuando un string tiene un caracter que se repite, debería retornar el índice de su primera ocurrencia.
// Si el caracter no existe en el string, debería retornar -1.
// No uses la función indexOf en tu implementación.
// Resultado: getIndexOf('a', 'I am a hacker'); // --> 2

// FOR
// function getIndexOf(caracter, cadena){
//     for(let i = 0; i < cadena.length; i++){
//         if(cadena[i] === caracter){
//             return i;
//         } 
//     }
//     return -1;
// }

// WHILE 
// function getIndexOf(caracter, cadena){
//     let i = 0;
//     while(i < cadena.length){
//         if(cadena[i] === caracter){
//             return i;
//         }
//         i++;
//     }
//     return -1;
// }

// DOWHILE
// function getIndexOf(caracter, cadena){
//     let i = 0;
//     do{
//         if(cadena[i] === caracter){
//             return i;
//         }
//         i++;

//     }while(i < cadena.length);

//     return -1;
// }

// console.log(getIndexOf('a', 'I am a hacker'));

// Ejercicio 86
// Escribe una función llamada "findMinLengthOfThreeWords". (Encuentre la longitud mínima de tres palabras)
// Dado 3 palabras, "findMinLengthOfThreeWords" retorna la cantidad de letras de la palabra más corta.('a', 'be', 'see'); // --> 1

// function findMinLengthOfThreeWords(word1, word2, word3){
//     let minLength = Math.min(word1.length, word2.length, word3.length);
//     return minLength;
// }

// console.log(findMinLengthOfThreeWords('a', 'be', 'see'));

// Ejercicio 87
// Escribe un función llamada "findMaxLengthOfThreeWords".(Encuentre la longitud maxima de tres palabras)
// Dado 3 palabras, "findMaxLengthOfThreeWords" retorna la cantidad de letras de la palabra más larga.('a', 'be', 'see'); // --> 3

// function findMaxLengthOfThreeWords(word1, word2, word3){
//     let maxLength = Math.max(word1.length, word2.length, word3.length);
//     return maxLength;
// }
//  console.log(findMaxLengthOfThreeWords('a', 'be', 'see'));


// Ejercicio 88
// Escribe una función llamada "getElementsThatEqual10AtProperty".
// Dado un objeto y una key, "getElementsThatEqual10AtProperty" retorna un array que contiene todos los elementos de un array ubicado en la key dado que sean iguales a 10.
// Notas:
// Si el array está vacío, debería retornar un array vacío.
// Si el array no contiene ningún elemento igual a 10, debería retornar una array vacío.
// Si la propiedad en esa key dada no es un array, debería retornar una array vacío.
// Si no hay ninguna propiedad en dicha key, debería retornar una array vacío.
// var output = getElementsThatEqual10AtProperty(obj, 'key');
// --> [10, 10]

// let obj = {
//     key: [1000, 10, 50, 10]
// }

// function getElementsThatEqual10AtProperty(obj, key){
//     if(obj[key]){// Si obj[key] es null, undefined, 0, false o una cadena vacía ("") return [];
//      return obj[key].filter(function(element){
//         return element === 10;
//          });
//     }
//     return [];
        
// }

// console.log(getElementsThatEqual10AtProperty(obj, 'key'));

// Ejercicio 89
// Escribe una función llamada "getElementsLessThan100AtProperty".
// Dado un objeto y una key, "getElementsLessThan100AtProperty" retorna un array que contiene todos los elementos del array ubicado en esa key que sean menores a 100.
// Notas:
// Si el array está vacío, debería retornar un array vacío.
// Si el array no contiene ningún elemento menor a 100, debería retornar una array vacío.
// Si la propiedad en esa key dada no es un array, debería retornar una array vacío.
// Si no hay ninguna propiedad en dicha key, debería retornar una array vacío.
// getElementsLessThan100AtProperty(obj, 'key');// --> [20, 50]

// let obj = {
//     key: [1000, 20, 50, 500]
// };

// function getElementsLessThan100AtProperty(obj, key){
//     if(obj[key]){
//         return obj[key].filter(function(element){
//             return element < 100;
//         });
//     }
//     return [];
// }

// console.log(getElementsLessThan100AtProperty(obj, 'key'));

// Ejercicio 90
// Escribe una función llamada "countAllCharacters".

// Dado un string, "countAllCharacters" retorna un objeto en el cual cada key es un caracter del string dado. El valor de cada key debería corresponder a la cantidad de veces que el caracter aparece en el string.
// Notas:
// Si el string está vacío, countAllCharacters debería retornar un array vacío.
// var output = countAllCharacters('banana');console.log(output); // --> {b: 1, a: 3, n: 2}

// function countAllCharacters(word){
//         return word.split('').reduce(function(charCount, char){
//             charCount[char] = (charCount[char] || 0) + 1;
//             return charCount;
    
//         }, []);

//     }

// console.log(countAllCharacters('banana'));

// Ejercicio 91
// Escribe una función llamada "getElementsGreaterThan10AtProperty".
// Dado un objeto y una llave, "getElementsGreaterThan10AtProperty" retorna un array que contiene los elementos del array ubicado en esa key que sean mayores a 10.
// Notas:
// Si el array está vacío, debería retornar un array vacío.
// Si el array no contiene ningún elemento mayor a 10, debería retornar una array vacío.
// Si la propiedad en esa key dada no es un array, debería retornar una array vacío.
// Si no hay ninguna propiedad en dicha key, debería retornar una array vacío.
// resultado: getElementsGreaterThan10AtProperty(obj, 'key'); // --> [20, 30]

// let obj = {
//     key: [1, 20, 30]
// };

// function getElementsGreaterThan10AtProperty(obj, key){
//     if(Array.isArray(obj[key])){
//         return obj[key].filter(function(element){
//             return element > 10;
//         });
//     }
//     return [];
// }
//  console.log(getElementsGreaterThan10AtProperty(obj, 'key'));

// Ejercicio 92
// Escribe una función llamada "removeElement".
// Dado un array de elementos y un parámetro "por eliminar", "removeElement" retorna un array que contiene los items de dicho array que no coinciden con el parámetro "por eliminar"
// Notes:
// Si todos los elementos coinciden, debería retornar un array vacío.
// Si le pasamos un array vacío, debería retornar un array vacío.
// var output = removeElement([1, 2, 3, 2, 1], 2); console.log(output); // --> [1, 3, 1]

// let array = [1, 2, 3, 2, 1];

// function removeElement(array, index){
//     if(Array.isArray(array)){
//         return array.filter(function(element){
//             return element !== index;
//         });
//     }
//     return [];
// }

// console.log(removeElement([1, 2, 3, 2, 1], 2));

// Ejercicio 93
// Escribe una función llamada "getFirstElementOfProperty".
// Dado un objeto y una key, "getFirstElementOfProperty" retorna el elemento de un array ubicado la key dada.
// Notas:
// Si el array está vacío, debería retornar undefined.
// Si el propiedad en la key dada no es un array, debería retornar undefined.
// Si la key no tiene propiedad, debería retornar undefined.
// vResultado (obj, 'key'); // --> 1

// let obj = {
//     key: [1, 2, 3]
// };

// function getFirstElementOfProperty(obj, key){
//     if(Array.isArray(obj[key])){
//         return obj[key][0];
//     }
//     return undefined;
    
// }

// console.log(getFirstElementOfProperty(obj, 'key'));

// Ejercicio 94
// Escribe una función llamada "getNthElementOfProperty".
// Dado un objeto y una key, "getNthElementOfProperty" retorna el elemento nth de un array ubicado en la key dada.
// Notas:
// Si el array está vacío, debería retornar undefined.
// Si n está fuera de rango, debería retornar undefined.
// Si el propiedad en la key dada no es un array, debería retornar undefined.
// Si la key no tiene propiedad, debería retornar undefined.
// getNthElementOfProperty(obj, 'key', 1);// --> 2

// let obj = {
//   key: [1, 2, 6]
// };

// function getNthElementOfProperty(obj, key, index){
//     if(Array.isArray(obj[key])){
//         return obj[key][index];
//     }
//     return undefined;    
// }

// console.log(getNthElementOfProperty(obj, 'key', 2));

// Ejercicio 95
// Escribe una función llamada "getLastElementOfProperty".
// Dado un objeto y una key, "getLastElementOfProperty" retorna el último elemento de un arrya en dicha key.
// Notas:
// Si el array está vacío, debería retornar undefined.
// Si el propiedad en la key dada no es un array, debería retornar undefined.
// Si la key no tiene propiedad, debería retornar undefined.
// (obj, 'key'); // --> 5

// let obj = {
//     key: [1, 2, 5]
// };

// function getLastElementOfProperty(obj, key){
//     if(Array.isArray(obj[key])){
//         return obj[key][obj[key].length - 1];
//     }
//     return undefined;
// }

// console.log(getLastElementOfProperty(obj, 'key'));

// Ejercicio 96
// Escribe una función llamada "keep". (Guardar)
// Dado un array y un elemento, "keep" retorna una array que contiene los items que coinciden con el elemento dado.
// Notas:
// Si no coincide ningún elemento, "keep" debería retornar un array vacío.
// keep([1, 2, 3, 2, 1], 2)  --> [2, 2]

// let array = [1, 2, 3, 2, 1];

// function keep(array, items){
//     if(Array.isArray(array)){
//         return array.filter(function(element){
//             return element === items;
//         });

//     }
//     return [];
// }

// console.log(keep([1, 2, 3, 2, 1], 2));

// Ejercicio 97
// Escribe una función llamada "getOddLengthWordsAtProperty".
// Dado un objeto y una key, "getOddLengthWordsAtProperty" retorna un array que contiene todo los elementos de dicho array ubicados en esa key que corresponden a palabras con una cantidad de letras impar.
// Notas:
// Si el array está vacío, debería retornar un array vacío.
// Si el array no contiene ningún elemento que corresponda a una palabr con una cantidad de letras impar, debería retornar una array vacío.
// Si la propiedad en esa key dada no es un array, debería retornar una array vacío.
// Si no hay ninguna propiedad en dicha key, debería retornar una array vacío.
// var obj = {
//   key: ['It', 'has', 'some', 'words']
// };
// var output = getOddLengthWordsAtProperty(obj, 'key');
// console.log(output); // --> ['has', 'words']

// let obj = {
//     key: ['It', 'has', 'some', 'words']
// };

// function getOddLengthWordsAtProperty(obj, key){
//     if(Array.isArray(obj[key])){
//         return obj[key].filter(function(impar){
//             return impar.length % 2 !== 0;
//         })

//     }
//     return [];
// }

// console.log(getOddLengthWordsAtProperty(obj, 'key'));

// Ejercicio 98
// Escribe una función llamada "computeAverageOfNumbers".
// Dado un array de números, "computeAverageOfNumbers" retorna su promedio.
// Notas:
// Si el array está vacío, debería retornar 0.
// var input = [1,2,3,4,5];
// var output = computeAverageOfNumbers(input);
// console.log(output); // --> 3

// let input = [1,2,3,4,5];

// function computeAverageOfNumbers(input){
//     if(Array.isArray(input)){
//         let suma = input.reduce(function(acc, num){
//             return acc + num;
//         }, 0);
//         return suma / input.length;
//     }
//     return 0;
// }

// console.log(computeAverageOfNumbers(input));


//***********************EJERCICIOS EXTRAS**************************//

// Ejercicio 1
// Muestrame "Hola Mundo" en inversa. resultado: "odnuM aloH"

// function inverso(cadena){
//     return cadena.split('').reverse().join('');
// }

// console.log(inverso('Hola Mundo'));

// Ejercicio 2
// Suma de números pares: Escribe una función que reciba un array de números y devuelva la suma de todos los números pares en el array.

// let arrayNum = [1, 2, 1, 3, 2];

// function sumaNumPares(arrayNum){
//     let suma = 0;
//     for(i = 0; i < arrayNum.length; i++){// el for es para iterar sobre cada número.
//         if(arrayNum[i] % 2 === 0){
//             suma += arrayNum[i]; // el += equivale a: suma = suma + arrayNum[i];
//         }
//     }
//     return suma;
// }

// console.log(arrayNum);
// console.log(sumaNumPares([1, 2, 1, 3, 2]));

// _____________reduce()_________________________
// let arrayNum = [1, 2, 1, 3, 2];

// function sumaNumPares(arrayNum){
//    return arrayNum.reduce(function(acc, num){
//          if(num % 2 === 0){
//             return acc + num;
//          }else{
//             return acc;
//          }         

//    }, 0);
// }

// console.log(arrayNum);
// console.log(sumaNumPares([1, 2, 1, 3, 2]));

// Invertir un número: Escribe una función que reciba un número entero positivo y devuelva el número con sus dígitos invertidos. Por ejemplo, si se recibe 123, la función debería devolver 321.

// function numInvertido(num){
//     return parseInt(num.toString().split('').reverse().join(''));
// }

// console.log(numInvertido(123));

// Ejercicio 3
// Ordenar palabras alfabéticamente: Escribe una función que reciba una cadena de texto con varias palabras separadas por espacios y devuelva la cadena con las palabras ordenadas alfabéticamente.

// function cadenaTexto(cadena){
//     return cadena.split(' ').sort().join(' ');//sort(te lo ordena alfabeticamente)
// }

// console.log(cadenaTexto('hola como estas'));

// Ejercicio 4
// ____________oredenar numeros_____________
// function cadenaNum(num){
//     return num.split(' ').sort((a, b) => a - b).join(' ');//sort(te lo ordena alfabeticamente)
// }

// console.log(cadenaNum('12 123 1'));

// function cadenaNum(num){
//     return num.split(' ').sort((a, b) => a - b).join(' ');//sort((a, b) => a - b): El método sort se utiliza para ordenar los elementos de un array. En este caso, estamos utilizando una función de comparación (a, b) => a - b) que compara los números como números y los ordena de forma ascendente. Si a es menor que b, la función devuelve un valor negativo, indicando que a debe colocarse antes que b en el orden. Si a es mayor que b, devuelve un valor positivo, indicando que b debe colocarse antes que a en el orden. Si son iguales, devuelve 0.
// }

// console.log(cadenaNum('1 34 2 5 12 77 8 65'));

// Ejercicio 5
//Sumar todos los valores del array
//________REDUCE_________
// let myArray = [2, 13, 34, 5];

// function sumarArray(myArray){
//     return myArray.reduce(function(acc, num){
//         return acc + num;

//     }, 0);
// }
// console.log(sumarArray(myArray));

//______________FOR____________
// let myArray = [2, 13, 34, 5];
// let number = 0;

// for(let i=1; i <= myArray.length; i++){
//     number += myArray[i - 1];
// }

// console.log(number);

// Ejercicio 6
// Compara el elemento si es 1, inserta el número en el arreglo 1
// Compara el elemento si es 0, introduce "Yahoo" en el arreglo  (en lugar del número)
// Ejemplo de la salida para [0,0,1,1,0]:

// ['Yahoo','Yahoo','1','1','Yahoo']

// let arraysNumbers = [0,0,1,1,0];
// let newArrays = [];

// for(let i=1; i<= arraysNumbers.length; i++){
//     let item = arraysNumbers[i-1];
//     if(item === 0){
//          newArrays.push('Yahoo');
//     }else{
//          newArrays.push('1');
//     }
// }

// console.log(newArrays);

// Ejercicio 7
//Mostrar el ultimo elemento del arreglo
// let myArray = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday'];

// for(let i = 1; i <= myArray.length; i++){
//     console.log(myArray[i - 1]);
// }

// Ejercicio 8
//Agrega 10 enteros aleatorios a un arreglo e imprime el 
//arreglo en la consola.

// let myArray=[];

// function number () {
//     let number1 = Math.floor((Math.random()*100) + 1)
//     return number1
// }

// for(let i=1; i<=10; i++){
//     myArray.push(number())
// }

// console.log(myArray)

// Ejercicio 9
//Mostrar cada dos elementos del array
// let mySampleArray = [3423,5,4,47889,654,8,867543,23,48,56432,55,23,25,12]

// for(let i=1; i<=mySampleArray.length; i=i+2){
//     console.log(mySampleArray[i - 1])
// }

//Teoria de Arreglos y objetos

// let array = []
// let object = {}

// let amigos = ['Juliany', 'juany', 'isaias', 'jeshua']

// let isaias = {
//     nombre: 'Isaias Gomez',
//     fotos: ['url1, url2, url3'],
//     informacion: [
//         { trabajo: 'Capitalizarme', direccionTrabajo: 'las condes' },
//         { estudio: 'urbe', carrera: 'diseño' }
//     ],
//     datosPersonales: {
//         fechaNacimiento: '03/11/1986',
//         lugar: 'punto fijo'
//     }
// }


// console.log('Amigos:', amigos)
// console.log('amigo:', amigos[2])
// console.log('Isaias:', isaias)
// console.log('Nombre de isaias:', isaias.nombre)
// console.log('Direccionde trabajo de isaias:', isaias.informacion[0].direccionTrabajo)
// console.log('fecha de nacimiento de isaias:', isaias.datosPersonales.fechaNacimiento)

// Ejercicio 10
//Haz un bucle en este arreglo que lo recorra por completo 
//e imprima las posiciones donde se encuentra el string "Waldo".
// let people = [ 'Lebron','Aaliyah','Diamond','Dominique','Aliyah','Jazmin','Darnell','Hatfield','Hawkins','Hayden','Hayes','Haynes','Hays','Head','Heath','Hebert','Henderson','Hendricks','Hendrix','Henry','Hensley','Henson','Herman','Hernandez','Herrera','Herring','Hess','Hester','Hewitt','Hickman','Hicks','Higgins','Hill','Hines','Hinton','Hobbs','Hodge','Hodges','Hoffman','Hogan','Holcomb','Holden','Holder','Holland','Holloway','Holman','Holmes','Holt','Hood','Hooper','Hoover','Hopkins','Hopper','Horn','Horne','Horton','House','Houston','Howard','Howe','Howell','Hubbard','Huber','Hudson','Huff','Waldo','Hughes','Hull','Humphrey','Hunt','Hunter','Hurley','Hurst','Hutchinson','Hyde','Ingram','Irwin','Jackson','Jacobs','Jacobson','James','Jarvis','Jefferson','Jenkins','Jennings','Jensen','Jimenez','Johns','Johnson','Johnston','Jones','Jordan','Joseph','Joyce','Joyner','Juarez','Justice','Kane','Kaufman','Keith','Keller','Kelley','Kelly','Kemp','Kennedy','Kent','Kerr','Key','Kidd','Kim','King','Kinney','Kirby','Kirk','Kirkland','Klein','Kline','Knapp','Knight','Knowles','Knox','Koch','Kramer','Lamb','Lambert','Lancaster','Landry','Lane','Lang','Langley','Lara','Larsen','Larson','Lawrence','Lawson','Le','Leach','Leblanc','Lee','Leon','Leonard','Lester','Levine','Levy','Lewis','Lindsay','Lindsey','Little','Livingston','Lloyd','Logan','Long','Lopez','Lott','Love','Lowe','Lowery','Lucas','Luna','Lynch','Lynn','Lyons','Macdonald','Macias','Mack','Madden','Maddox','Maldonado','Malone','Mann','Manning','Marks','Marquez','Marsh','Marshall','Martin','Martinez','Mason','Massey','Mathews','Mathis','Matthews','Maxwell','May','Mayer','Maynard','Mayo','Mays','Mcbride','Mccall','Mccarthy','Mccarty','Mcclain','Mcclure','Mcconnell','Mccormick','Mccoy','Mccray','Waldo','Mcdaniel','Mcdonald','Mcdowell','Mcfadden','Mcfarland','Mcgee','Mcgowan','Mcguire','Mcintosh','Mcintyre','Mckay','Mckee','Mckenzie','Mckinney','Mcknight','Mclaughlin','Mclean','Mcleod','Mcmahon','Mcmillan','Mcneil','Mcpherson','Meadows','Medina','Mejia','Melendez','Melton','Mendez','Mendoza','Mercado','Mercer','Merrill','Merritt','Meyer','Meyers','Michael','Middleton','Miles','Miller','Mills','Miranda','Mitchell','Molina','Monroe','Lucas','Jake','Scott','Amy','Molly','Hannah','Lucas'] 
// // con FOR
// for(let i=1; i<=people.length; i++){
//     let item = people[i - 1]
//     if (item === 'Waldo'){
//         console.log('Waldo esta en la posicion: ', i-1)
//     }
// }

// // CON .MAP()
// let foo = people.map((item, index) => {
//     if(item === 'Waldo'){
//         console.log('Waldo esta en la posicion: ',index)
//     }
// })

// Ejercicio 11
//Obtener el numero Maximo y el minimo de un arreglo de numeros y me retorne la suma de los 2.
//[1, 2, 5, 17, 65, 1, 33, 90];

// let arraysNumbers = [1, 2, 5, 17, 111, 1, 33, 90];


// let result = arraysNumbers.reduce(function(acc, number){
//         return {
//             max: Math.max(acc.max, number),
//             min: Math.min(acc.min, number),
//             sum: Math.max(acc.max, number) + Math.min(acc.min, number)
//         };
//     }, {max: -Infinity, min: Infinity, sum: 0});

// let max = result.max;
// let min = result.min;
// let sum = result.sum;

// console.log(result);

//___________________-CON FUNCTION________________

// function sumMaxAndMin(arrayNumber){
//     return arrayNumber.reduce(function(acc, num){
//         return {
//             max: Math.max(acc.max, num),
//             min: Math.min(acc.min, num),
//             sum: Math.max(acc.max, num) + Math.min(acc.min, num)
//         };
//     }, {max: 0, min: Infinity, sum: 0});

// }

// console.log(sumMaxAndMin([1, 2, 5, 17, 111, 1, 33, 90]));

//Otra forma

// function sumMaxAndMin(arrayNumber){
//     return arrayNumber.reduce(function(acc, num){// La función de 'reduce()' tiene dos parámetros: acc (acumulador) y num (el elemento actual del array en cada iteración).
//         return {
//             max: Math.max(acc.max, num),
//             min: Math.min(acc.min, num),
//             sum: Math.max(acc.max, num) + Math.min(acc.min, num)
//         };
//     }, {max: 0, min: Infinity, sum: 0})//min: se inicializa en 'Infinity' para asegurarse de que cualquier número en el array sea menor que este valor inicial.

// }

// console.log(sumMaxAndMin([5, 3, 5, 17, 111, 81, 33, 90]));

// Ejercicio 84
// Escribe una función llamada "getIndexOf". (obtener el índice de)
// Dado un caracter y un string, "getIndexOf" retorna la primera posición de dicho caracter en dicho string.
// Notas:
// El índice de los strings parte desde el 0, esto significa que el primer caracter en un string está en la posición 0.
// Cuando un string tiene un caracter que se repite, debería retornar el índice de su primera ocurrencia.
// Si el caracter no existe en el string, debería retornar -1.
// No uses la función indexOf en tu implementación.
// Resultado: getIndexOf('a', 'I am a hacker'); // --> 2

// FOR
// function getIndexOf(caracter, cadena){
//     for(let i = 0; i < cadena.length; i++){
//         if(cadena[i] === caracter){
//             return i;
//         } 
//     }
//     return -1;
// }

// console.log(getIndexOf('a', 'I am a hacker'));

// array.forEach(function(element, index, array) {
    // Código a ejecutar para cada elemento
//});

// element: Es el valor del elemento actual que se está procesando en el array.
// index: Es el índice del elemento actual que se está procesando en el array.
// array: Es el array sobre el cual se está iterando.


// function getIndexOf(caracter, cadenaTexto){
//     let indice = -1;

//     cadenaTexto.split('').forEach(function(elemento, index){
//         if(elemento === caracter && indice === -1){
//             indice = index; 

//         }
//     });

//     return indice;
// }

// console.log(getIndexOf('a', 'I am a hacker'));

//Ejercicio extra:
//Restorna true si el numero '12' es un numero y false si 'hola' no es un numero. 

// function esNumero(num){ // isNaN: (no es un número) si lo coloco con !isNaN, me muestra lo contrario
//     return !isNaN(num);
// }

// console.log(esNumero('Hola'));
// console.log(esNumero(12));
// console.log(esNumero('12'));

//___________con if___________
// function esNumero(num){ // isNaN: (no es un número) si lo coloco con !isNaN, me muestra lo contrario
//     if(!isNaN(num)){
//         return `"${num}" Es un número`;
//     }else{
//         return `"${num}" No es un número`;
//     }
// }

// console.log(esNumero('Hola'));
// console.log(esNumero(12));
// console.log(esNumero('12'));

//ejercicios con Spread Operator
//Utilizando Spread Operator (Operador de propagación) esto es solo para array.

//agregar un nuevo array con + con los elementos del array original.

// let arrayOriginal = [1, 2, 3];

// let arrayNew = [...arrayOriginal, 4, 5, 6];

// console.log(arrayNew);

// //forma para sumar los elementos de un array utilizando Spread Operator
// function suma(a, b, c){
//     return a + b + c;
// }

// let numbers = [1, 2, 3];

// console.log(`la suma de los elementos del array [${numbers}] es: ${suma(...numbers)}`);//utilizamos los ... para que me sume lo que contiene ese array

// const carrito=[
//     {nombre: 'Monitor 20 Pulgadas', precio: 500, disponible: false},
//     {nombre: 'Televisor 50 Pulgadas', precio: 700, disponible: true},
//     {nombre: 'Tablet', precio: 300, disponible: true},
//     {nombre: 'Audifonos', precio: 200, disponible: true},
//     {nombre: 'Teclado', precio: 50, disponible: false},
//     {nombre: 'Celular', precio: 500, disponible: true},
//     {nombre: 'Bocina', precio: 300, disponible: true},
//     {nombre: 'Laptop', precio: 800, disponible: true},
// ];

// forEach (por cada elemento) // Solo e muestra cada elemento que hay en el arrays o en el objeto Orginal.

// carrito.forEach(producto => console.log(producto.nombre + ', ' + producto.precio + ', ' + producto.disponible)); // SI quieres ver un elemnto de cada objeto solo agresar .nombre o .precio. console.log(producto.nombre);


// console.log(carrito.producto);

// map me crea una copia del array original con solo agregarle una nueva variable.

// const carritoNew = carrito.map(producto => producto.nombre + ': ' + producto.disponible); // SI quieres ver un elemnto de cada objeto solo agresar .nombre o .precio. console.log(producto.nombre);


// console.log(carritoNew);

//EJERCICIOS EXTRAS
//Crear una función que tome un array de números y devuelva la suma de los elementos.

// let numbers = [2, 1, 4, 6, 10];

// function sumArrayNumber(numbers){
//     return numbers.reduce((acc, num)=> {
//         return acc + num;
//     }, 0);

// }
// console.log(sumArrayNumber(numbers));

// //Escribir una función que reciba un string y devuelva la versión en mayúsculas de las vocales. //toLowerCase () para convertir a « minúsculas », y la función toUpperCase () para convertir a « mayúsculas »

// function vocalesMayusculas(word){
//     return word.replace(/[aeiou]/g, (vocal) =>{ // /[aeiou]/g: Esta es una expresión regular entre barras (/). [aeiou] es una clase de caracteres que coincide con cualquier vocal en minúscula. El modificador g al final indica que la búsqueda debe ser global, lo que significa que buscará todas las coincidencias en el texto en lugar de detenerse después de encontrar la primera.
//         return vocal.toUpperCase();
//     })
// }
// console.log(vocalesMayusculas('hola mundo'));


//Desarrollar un script donde se ingresa el precio de 3 productos por prompt y 
//mostrar como resultado: suma del sub total, iva y precio total en 3 console.log independientes

//Ejecutar en la consola: node ejercicio4.js + enter

// let precio1 = parseFloat(prompt('ingrese el precio 1')); //parseFloat() es para convertir un string en numeros y sirve para numeros decimales.
// let precio2 = parseFloat(prompt('ingrese el precio 2'));
// let precio3 = parseFloat(prompt('ingrese el precio 3'));

// let subTotal = precio1 + precio2 + precio3;
// let iva = subTotal * 0.19;
// let total = subTotal + iva;

// console.log(subTotal);
// console.log(iva);
// console.log(total);

//Ingresar 2 numeros por prompt (fistNumber y secondNumber). 
//Comparar si fistNumber es mayor que secondNumber (Usar operadores mayor y menor que)
// y mostrar por consola su resultado. Si es cierto, debe mostrar true, si es falso sebe mostrar false

// let fistNumber = parseInt(prompt('Ingrese numero 1'));
// let secondNumber = parseInt(prompt('Ingrese numero 2'));

// if(fistNumber > secondNumber){
//      console.log(true)
// }else{
//      console.log(false);
// }

//Generar un numero aleatorio  entre 0 y 1

// let result = Math.random(); 

// console.log(result);

//Generar dos numeros aleatorios entre 1 y 50 y guardarlos en 2 variables (Deben ser numeros enteros, sin decimales).
//Mostrar por console.log los dos numeros.
//En otro console.log mostrar si la variable 1 es menor a la variable 2 con true o false

// let num1= Math.floor( Math.random() * 50 ); 
// let num2= Math.floor( Math.random() * 50 ); 

// console.log(`Número1: ${num1} Número2: ${num2}`);
// console.log('¿ El Número1 es menor que Número2 ?')

// if(num1 < num2){
//         console.log(true);
// }else{
//         console.log(false);
// }