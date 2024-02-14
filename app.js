//LA Variable numeroSecreto afuera de una funcion es de alcance global y dentro de una funcion es solo de bloque
let numeroSecreto = generaNumeroSecreto();

console.log (numeroSecreto);

function intentoDeUsuario(){
    alert("Click desde el boton");
    return;
}


function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

asignarTextoElemento('h1', 'Juego de el numero');
asignarTextoElemento('p', 'Elija un numero entre 1 y 20')

//Funcion para generar el numero secreto

function generaNumeroSecreto () {
    return Math.floor(Math.random()*10)+1;
  
    
}