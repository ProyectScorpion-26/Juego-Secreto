//Seleccionar los elementos
let numeroSecreto = 0;
let numeroIntentos = 0;
let numeroRepeticion = 5;
let listaNumeroSorteados = [];
numeroMaximo = 10;
console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
//Funcion al precionar el boton
function verificarValor(){
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(numeroSecreto);
    console.log(numeroIntentos);
    if (numeroSecreto === numeroUsuario){
        asignarTextoElemento('p', `Acertaste el numero secreto en ${numeroIntentos} ${numeroIntentos == 1 ? 'ves' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        //El usuario no acertó
        if(numeroUsuario > numeroSecreto){
            asignarTextoElemento('p', 'El numero secreto es menor');  
        }else{
            asignarTextoElemento('p', 'El numero secreto es mayor');
        }
        numeroIntentos++;
        limpiarCaja();
        if(numeroIntentos>numeroRepeticion){
            asignarTextoElemento('p', `Ya superaste el numero de repeticion  ${numeroRepeticion}`);
            
        }
    
    }
    return;
}
function limpiarCaja(){
    let valorCaja = document.querySelector('#valorUsuario');
    valorCaja.value = '';
}

function generarNumeroSecreto() {
    let numeorGenerado =  Math.floor(Math.random()*numeroMaximo)+1;
    //Si el numero generado esta en incluido en la lista
    //Si ya sorteamos todos los numeros
    if(listaNumeroSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los numeros posibles');

    }else{

        if(listaNumeroSorteados.includes(numeorGenerado)){
            return generarNumeroSecreto();

        }else{
            listaNumeroSorteados.push(numeorGenerado);
            return numeorGenerado;
        }
    }
}

function condicionesInciales(){
    asignarTextoElemento('h1', 'Juego del numero secreto de Oscar');
    asignarTextoElemento('p', `Ingresa un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    numeroIntentos = 1;
}
function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de numeros
    condicionesInciales();
    //Generar el numero aleatorio
    //Inicializar el numero de intentos
    //Dehabilitar el boton de nuevo juegos
    document.querySelector('#reiniciar').setAttribute('disabled', 'true')
    

    
}
condicionesInciales();