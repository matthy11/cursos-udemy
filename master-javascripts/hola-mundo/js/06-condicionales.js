'use strict';

// CONDICIONALES IF ELSE
/* var edad1 = 15;
var edad2 = 12;

if (edad1 > edad2) {
    console.log('Edad uno es mayor');
}
else {
    console.log('Edad uno es menor');
} */

/*
OPERADORES RELACIONALES
   mayor: >
   menor: <
   mayor o igual: >=
   menor o igual: <=
   igual: ==
   desigual: !=
 */

var edad = 20;
var nombre = "Matias Galdames";

if (edad >= 18) {
    console.log(nombre + ' tiene ' + edad + ' años, es mayor de edad');

    if (edad <=33){
        console.log('Todavia eres millenials');
    }
    else if (edad >=70){
        console.log('Eres ansiano');
    }
    else {
        console.log('Ya no eres millenials');
    }
}
else {
    console.log(nombre + ' es menor de edad');
}

/* 
OPERADORES LOGICOS
AND(Y): &&
OR(O): ||
NEGACION: !
*/
var year = 2023;

// NEGACION
if (year != 2019){
    console.log("El año no es 2019 si no que: " + year);
}

// AND
if (year >= 2020 && year <= 2030){
    console.log("Estamos en la era actual");
} else {
    console.log("Estamos en la post-era");
}

// OR
if (year == 2013 || year == 2023) {
    console.log("El año acaba en 3");
}