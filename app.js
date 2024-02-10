//Cree la funcion "intentoDeUsuario", colocando el comando "oneclik"; en html
// dentro de las comillas "intentoDeUsuario();" para conectarlo con js.
function intentoDeUsuario(){
    alert("Click desde el boton")
}


function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

asignarTextoElemento('h1', 'Juego de el numero');
asignarTextoElemento('p', 'Elija un numero entre 1 y 20')