// -------------------------------------------
// Seleccionar linea o bloque de código + 
// Ctrl + k + u --> Descomentar           
// Ctrl + k + c --> Comentar             
// -------------------------------------------

// alert("Hello World"); // Ejercicio 1

// document.write("Hello World"); // Ejercicio 2

// document.write((3+5)); // Ejercicio 3

// let nombreUsuario = prompt("Ingrese su nombre"); // Ejercicio 4
// document.write("Hola " + nombreUsuario);

// var num1 = parseInt(prompt("Ingrese un número")); // Ejercicio 5
// var num2 = parseInt(prompt("Ingrese otro número"));
// document.write("La suma de los números es: " + (num1 + num2));

// var num1 = parseInt(prompt("Ingrese un número")); // Ejercicio 6
// var num2 = parseInt(prompt("Ingrese otro número"));
// var mayor = num1 > num2 ?  num1 : num2; 
// document.write("El número más grande es: " + mayor);

// var num1 = parseInt(prompt("Ingrese un número.")); // Ejercicio 7
// var num2 = parseInt(prompt("Ingrese el 2do número."));
// var num3 = parseInt(prompt("Ingrese el 3er número."));
// var mayor = num1 > num2 ?  num1 : num2; 
// mayor = mayor > num3 ?  mayor : num3; 
// document.write("El número más grande es: " + mayor);

// var num = parseInt(prompt("Ingrese un número")); // Ejercicio 8
// var divisible = num % 2 == 0 ? " si" : " no";
// document.write("El número " + num + divisible + " es divisible por 2.");

// var num = parseInt(prompt("Ingrese un número")); // Ejercicio 13
// var divisible = " no";
// if ((num % 2 == 0) || (num % 3 == 0) || (num % 5 == 0) || (num % 7 == 0)) divisible = " si";
// document.write("El número " + num + divisible + " es divisible por 2, 3, 5 o 7.");

// var num = parseInt(prompt("Ingrese un número")); // Ejercicio 14
// var divisible = false;
// let valores = " ";
// if ((num % 2 == 0) || (num % 3 == 0) || (num % 5 == 0) || (num % 7 == 0)) divisible = true;
// if (num % 2 == 0) valores = valores + 2 + " ";
// if (num % 3 == 0) valores = valores + 3 + " ";
// if (num % 5 == 0) valores = valores + 5 + " ";
// if (num % 7 == 0) valores = valores + 7 + " ";
// if (divisible) document.write("El número " + num + " es divisible por" + valores);
// else document.write ("El número " + num + " no es divisible por 2, 3, 5 o 7.");

// var num = parseInt(prompt("Ingrese un número")); // Ejercicio 15
// var divisores = " ";
// for (let i = num; i > 0; i--) if (num % i == 0) divisores = divisores + i + " ";
// document.write("Los divisores del número " + num + " son:" + divisores);

// var num1 = parseInt(prompt("Ingrese un número ")); // Ejercicio 16
// var num2 = parseInt(prompt("Ingrese otro número"));
// var mayor = num1 > num2 ?  num1 : num2;
// var divisores = " ";
// for (let i = mayor; i > 0; i--) if ((num1 % i == 0) && (num2 % i == 0)) divisores = divisores + i + " ";
// document.write("Los divisores en común de los números " + num1 + " y " + num2 + " son:" + divisores);

// var num = parseInt(prompt("Ingrese un número ")); // Ejercicio 17
// let esPrimo = " no ";
// if (((num % 2 != 0) && (num % 3 != 0) && (num % 5 != 0) && (num % 7 != 0)) || (num == 2) || (num == 3) || (num == 5) || (num == 7)) esPrimo = " si ";
// document.write("El número " + num + esPrimo + "es primo.");

// var num = parseInt(prompt("Ingrese su edad")); // Ejercicio 18
// let esMayor = num >= 18 ? " si " : " no ";
// document.write("Usted " + esMayor + "puede manejar.");

// let nota = parseFloat(prompt("Ingrese una nota")); // Ejercicio 19
// let calificacion = "Muy deficiente";
// if ((nota > 3.00) && (nota <= 5.00)) calificacion = "Insuficiente";
// else if ((nota > 5,00) && (nota <= 6.00)) calificacion = "Suficiente";
// else if ((nota > 6.00) && (nota <= 7.00)) calificacion = "Bien";
// else if ((nota > 7.00) && (nota <= 9.00)) calificacion = "Notable";
// else if ((nota > 9.00) && (nota <= 10.00)) calificacion = "Sobresaliente";
// document.write("la calificación es: " + calificacion);

// let lista = ""; // Ejercicio 20
// let texto = " ";
// while (texto != "cancelar") {
//     texto = prompt("Ingrese un texto");
//     if (texto != "cancelar") lista = lista + texto + " - ";
// }
// document.write(lista);

// let sumatoriaNumeros = 0; // Ejercicio 21
// var num = " ";
// while (num != "cancelar") {
//     num = prompt("Ingrese un número");
//     if (num != "cancelar"){
//         if (isNaN(num)) alert("Error: no ingresó un valor numérico.");
//         else sumatoriaNumeros += parseInt(num);
//     }
// }
// document.write("La suma total de los números introducidos es: " + sumatoriaNumeros);

// let letras = ["T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E"]; // Ejercicio 22
// var num = " ";
// while (num != "cancelar") {
//     num = prompt("Ingrese su DNI");
//     if (num != "cancelar"){
//         if (isNaN(num)) alert("Error: no ingresó un valor numérico.");
//         else if ((num > 0) && (num <= 99999999)) {
//             let resto = parseInt(num) % 23;
//             alert("Al DNI " + num + " le corresponde la letra: " + letras[resto]);
//         }
//         else alert("Error: número no valido.");
//     }
// }

// for (let i = 1; i <= 30; i++) { // Ejercicio 23
//     for (let j = 1; j <= i; j++) document.write(i);
//     document.write("<br>");
// }

// var num = parseInt(prompt("Ingrese un número")); // Ejercicio 24
// for (let i = num; i >= 1; i--) {
//     for (let j = i; j >= 1; j--) document.write(i);
//     document.write("<br>");
// }

// for (let i = 1; i <= 500; i++) { // Ejercicio 25
//     if ((i % 4 == 0) && (i % 9 == 0)) document.write(i + " \(Múltiplo de 4 y 9\)<br>");
//     else if (i % 4 == 0) document.write(i + " \(Múltiplo de 4\)<br>");
//     else if (i % 9 == 0) document.write(i + " \(Múltiplo de 9\)<br>");
//     else document.write(i + "<br>");
//     if (i % 5 == 0) document.write("<hr>");
// }

