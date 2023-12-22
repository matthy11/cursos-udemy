'use strict';

/* 
Programa que pida dos numeros y que nos diga cual es el mayor, el menor y si son iguales 
PLUS: Si los numeros no son un numero o son menores o iguales 0, nos vuelva a pedir el numero.
*/

var numero1 = parseInt(prompt('Ingresa el primero numero', 0));
var numero2 = parseInt(prompt('Ingresa el segundo numero', 0));

while(numero1 <= 0 || numero2 <= 0 || isNaN(numero1) || isNaN(numero2)){
    numero1 = parseInt(prompt('Ingresa el primero numero', 0));
    numero2 = parseInt(prompt('Ingresa el segundo numero', 0));
}

if (numero1 == numero2){
    alert('Los numeros son iguales');
} else if (numero1 > numero2){
    alert('El mayor es: '+ numero1);
    alert('El menor es: '+ numero2);
} else if (numero2 > numero1){
    alert('El mayor es: '+ numero2);
    alert('El menor es: '+ numero1);
} else {
    alert('Introduce numeros correctos');
}

