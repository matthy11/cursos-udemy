'use strict';

var edad = 18;
var imprime = "";

switch  (edad) {
    case 18:
        imprime = "Tienes la mayoria de edad";
    break;
    case 25:
        imprime = "Eres un adulto";
    break;
    case 40:
        imprime = "Crisis de los 40";
    break;
    case 75:
        imprime = "Eres un ansiano";
    break;
    default:
        imprime = "Tu edad es neutra";
    break;
}
console.log(imprime);