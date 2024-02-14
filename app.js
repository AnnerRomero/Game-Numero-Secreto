
let numeroSecreto = generaNumeroSecreto();


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

// Funcion para captur el imput (se conecta con el input de HTML)

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value); // parseInt (ffunciona para convertir nuestro datos en numbers)
    console.log(typeof(numeroDeUsuario)); // Muestra en la consola el tipo de valor que esta ingresando el usuario en la variable
    console.log(typeof(numeroSecreto));
    console.log(numeroDeUsuario);
    console.log (numeroSecreto);
    console.log(numeroDeUsuario === numeroSecreto); // esta pidiendo que los valores sean de el mismo tipo de dato y de el mismo valor para que sea verdadero "value" y si no que sea falso
    return;
}
