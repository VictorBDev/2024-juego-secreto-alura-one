//1. Función que muestra "¡Hola, mundo!" en la consola:
function saludarMundo() {
  console.log("¡Hola, mundo!");
}

saludarMundo();

//2. Función que recibe un nombre como parámetro y muestra un saludo personalizado:
function saludarPersona(nombre) {
  console.log(`¡Hola, ${nombre}!`);
}

saludarPersona("María");

//3. Función que recibe un número y devuelve su doble:
function calcularDoble(numero) {
  return numero * 2;
}

console.log(calcularDoble(5)); // Imprime: 10

//4. Función que recibe tres números y devuelve su promedio:
function calcularPromedio(num1, num2, num3) {
  return (num1 + num2 + num3) / 3;
}

console.log(calcularPromedio(4, 7, 10)); // Imprime: 7

//5. Función que recibe dos números y devuelve el mayor:
function obtenerMayor(a, b) {
  return a > b ? a : b;
}

console.log(obtenerMayor(15, 9)); // Imprime: 15

//6. Función que recibe un número y devuelve el resultado de multiplicarlo por sí mismo:
function cuadrado(numero) {
  return numero * numero;
}

console.log(cuadrado(4)); // Imprime: 16


//DESAFIOS:
// Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros.
// Crea una función que calcule el valor del factorial de un número pasado como parámetro.
// Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor equivalente en reales(moneda brasileña,si deseas puedes hacerlo con el valor del dólar en tu país). Para esto, considera la cotización del dólar igual a R$4,80.
// Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, utilizando la altura y la anchura que se proporcionarán como parámetros.
// Crea una función que muestre en pantalla el área y el perímetro de una sala circular, utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.
// Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.
// Enlace a desafios: https://github.com/alura-es-cursos/js-curso/blob/main/3.md

// Desafíos
// Crea una lista vacía llamada "listaGenerica".
// Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.
// Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.
// Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.
// Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.
// Crea una función que calcule el promedio de los elementos en una lista de números.
// Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.
// Crea una función que devuelva la suma de todos los elementos en una lista.
// Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.
// Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.
// Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.
// solución: https://github.com/alura-es-cursos/js-curso/blob/main/4.md