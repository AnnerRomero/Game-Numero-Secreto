
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

// Funcion para captur el imput(es decir lo que el usuario ingreso, la entrada) (se conecta con el input de HTML)
//Se conecto atravez de el ID de la etiqueta input de HTML
function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value); 
   //Condicion if para ayudar a el usuario a encontrar el numero secre<to, estamos llamando una funcion dentro de otro funcion
    if(numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', 'Acertaste el número');
    } else {
        if (numeroDeUsuario < numeroSecreto){
            asignarTextoElemento('p','El numero secreto es mayor');
        }else {
            asignarTextoElemento('p','El numero secreto es menor');
        }
    }
    return;
}


