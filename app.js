
let numeroSecreto = 0;
let intentos = 0;
let listaNumeroSorteado = [];
let numeroMaximo = 10;

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}


//Funcion para generar el numero secreto

function generaNumeroSecreto () {
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;

    console.log(` ${numeroGenerado} es el numero secreo`);
    console.log(listaNumeroSorteado);

    if(listaNumeroSorteado.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon el maximo de numeros posibles');

    }else{
        if (listaNumeroSorteado.includes(numeroGenerado)){
            return generaNumeroSecreto();
        }else{
            listaNumeroSorteado.push(numeroGenerado);
            return numeroGenerado;
        }  
       
    }
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
    asignarTextoElemento('p', `Elija un numero entre 1 y ${numeroMaximo}`);
    numeroSecreto = generaNumeroSecreto();
    
    intentos = 1;
   
}

function reiniciarJuego() {
    limpiarCaja();

    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled',true);  
}

condicionesIniciales();

