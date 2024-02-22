
let numeroSecreto = generaNumeroSecreto();
let intentos = 1;

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

asignarTextoElemento('h1', 'Juego de el numero secreto');
asignarTextoElemento('p', 'Elija un numero entre 1 y 10');

//Funcion para generar el numero secreto

function generaNumeroSecreto () {
    return Math.floor(Math.random()*10)+1;
  
}

// Funcion para captur el imput(es decir lo que el usuario ingreso, la entrada) (se conecta con el input de HTML)
//Se conecto atravez de el ID de la etiqueta input de HTML son el comando "document.getElemenById ()"

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value); 

     console.log(intentos);

    if(numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste en ${intentos} ${(intentos === 1) ? 'vez':'veces'} `); 
        document.getElementById('reiniciar').removeAttribute('disabled'); 

    }else{
        if (numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p','El numero secreto es menor');
        }else {
            asignarTextoElemento('p','El numero secreto es mayor');
        }
        intentos++;
        
        limpiarCaja();
    }
   
    return;
}

//Funcion para limpiar la caja donde el usuario ingresa el numero depues de fallar cada intento
function limpiarCaja (){
    document.querySelector('#valorUsuario').value = '';
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego de el numero secreto');
    asignarTextoElemento('p', 'Elija un numero entre 1 y 10');
    numeroSecreto = generaNumeroSecreto();
    console.log(numeroSecreto);
    intentos = 1;
    console.log(intentos);
}

function reiniciarJuego() {
    //limpiar la caja
    limpiarCaja();
    //Indicar mensaje de intervalo
   
    //generar el numero aleatorio
    
    //Iniciar el numero intentos
    condicionesIniciales();
    //Deshabilitar el boton de nuevo  juego
    document.querySelector('#reiniciar').setAttribute('disabled',true);  
}