
/*
let elementoP = document.querySelector('p');
elementoP.innerHTML = "Digite un numero entre 1 y 10";

let elementoP = document.querySelector('p');
elementoP.innerHTML = "Digite un numero entre 1 y 10";

Este codigo necesitaba ser optimizado, por ello se crea las funcion donde se reduce el codigo
*/

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

asignarTextoElemento('h1', 'Juego de el numero');
asignarTextoElemento('p', 'Elija un numero entre 1 y 20')