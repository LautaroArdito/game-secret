/*let parrafo = document.querySelector("p");
parrafo.innerHTML = "Indica un nro del 1 al 10"*/

// == para comparar valores
// === para comparar valores y tipo de datos
let nroSecret,nroIntentos;
let nroSorteados = [];
const MAXIMO = 3;

function asignarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function generarNumeroSecreto() {
    let nroGenerado = Math.floor(Math.random()*MAXIMO)+1;
    console.log(nroGenerado)
    console.log(nroSorteados.length)
    if (nroSorteados.length == MAXIMO){
        asignarTextoElemento("p","Ya se sortearon todos los numeros");
    }else{
        if (nroSorteados.includes(nroGenerado)){
            return generarNumeroSecreto();
        }else{
            nroSorteados.push(nroGenerado);
            return nroGenerado;
        }
    }
}

function limpiarCaja(){
    // El # en el querySelector es para buscar por ID
    document.querySelector("#valorUsuario").value = "";
}

function condicionesIniciales() {
    asignarTextoElemento("h1","Juego del numero secreto");
    asignarTextoElemento("p",`Indica un nro del 1 al ${MAXIMO}`);
    nroSecret = generarNumeroSecreto();
    nroIntentos = 1;
}

function reiniciarJuego(){
    // Limpiar caja
    limpiarCaja();
    condicionesIniciales();
    // Deshabilitar el boton nuevamente
    document.querySelector("#reiniciar").setAttribute("disabled",true);
}

// Evento que se ejecuta en HTML en linea 26 (onclick...)
function verificarIntento(){
    //Forma clasica
    //let numeroDeUsuario = document.querySelector("input");
    //Buscar por ID
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);

    if (numeroDeUsuario === nroSecret){
        asignarTextoElemento("p",`Acertaste el numero en ${nroIntentos} ${nroIntentos == 1 ? "vez":"veces"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    }else{
        if(numeroDeUsuario > nroSecret){
            asignarTextoElemento("p","El numero es menor");
        }else{
            asignarTextoElemento("p","El numero es mayor");
        } 
        nroIntentos++;
        limpiarCaja();
    }
    return;
}

condicionesIniciales();