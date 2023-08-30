const ganaCompu = "Gana la computadora";
const ganaUsuario = "Gana: ";
const empate = "Empate";
const piedra = "piedra";
const papel = "papel";
const tijeras = "tijera";
const opcion = [piedra , papel , tijeras];
let puntosComputadora=0;
let puntosUsuario=0;
let contador = 0;
let jugadaUsuario =0;
let jugador = main ();

function main (){
    let nombre = prompt ("Ingrese su nombre");
    while (nombre === "" || nombre === " " || !isNaN (nombre)){
        alert ("Debe ingresar su nombre");
        nombre = prompt ("Ingrese un nombre valido");
    }
    document.getElementById ("nombre").innerHTML = nombre;
    return nombre
}

function jugar(){
    let jugadaComputadora = obtenerJugadaComputadora ();
    document.getElementById("eleccionComputadora").innerHTML = "Computadora eligió: " + jugadaComputadora;
    
    if (jugadaUsuario == jugadaComputadora){
        document.getElementById ("resultado").value= empate;
    }
    else if ( (jugadaComputadora === piedra && jugadaUsuario === "tijera")||
    (jugadaComputadora === "papel" && jugadaUsuario==="piedra")||
    (jugadaComputadora === "tijera" && jugadaUsuario === "papel")){
        puntosComputadora ++;
        document.getElementById ("resultado").value= ganaCompu;
    }
    
    else if ( (jugadaComputadora === "tijera" && jugadaUsuario === "piedra")||
    (jugadaComputadora === "piedra" && jugadaUsuario==="papel")||
    (jugadaComputadora === "papel" && jugadaUsuario === "tijera")){
        puntosUsuario++
        document.getElementById("resultado").value= ganaUsuario + jugador;
    }
    document.getElementById ("puntosComputadora").innerHTML ="Puntos Computadora: " + puntosComputadora;
    document.getElementById ("puntosJugador").innerHTML = "Puntos Jugador: " + puntosUsuario;
    contador++

    if (puntosComputadora === 3 || puntosUsuario === 3){
        if (puntosComputadora > puntosUsuario){
            document.getElementById ("resultadoFinal").innerHTML = ("El ganador de la partida es la computadora");
        }
        else{
            document.getElementById ("resultadoFinal").innerHTML = ("El ganador de la partida es: " + jugador)
        }
        limpiar ()
        
        
    }
    //document.getElementById("eleccionDelUsuario").innerHTML = "Jugador eligió: "
    // console.log (puntosComputadora);
    // console.log (puntosUsuario);
    // console.log (jugadaUsuario)
}

function obtenerJugadaComputadora (){
    let numero = Math.floor(Math.random () * 3)
    return opcion[numero];
}

function limpiar (){
    document.getElementById ("puntosComputadora").innerHTML = "Puntos Computadora:";
    document.getElementById ("puntosJugador").innerHTML = "Puntos Jugador:"
    document.getElementById ("eleccionDelUsuario").innerHTML = "Jugador eligió: ";
    document.getElementById("eleccionComputadora").innerHTML = "Computadora eligió: "
    document.getElementById ("resultado").value="";
    puntosComputadora=0;
    puntosUsuario=0;
    jugadaUsuario=0;
    contador = 0;
}

function reset (){
    //document.getElementById ("nombre").value="";
    limpiar ();
    jugador=main ();
    contador =0;
    document.getElementById ("resultadoFinal").innerHTML="";
}

function obtenerJugada (opt){
    document.getElementById("eleccionComputadora").innerHTML = "Computadora eligió: "
    //document.getElementById("eleccionDelUsuario").innerHTML = "Jugador eligió: "
    document.getElementById ("resultado").value="";
    jugadaUsuario =opt;
    document.getElementById("eleccionDelUsuario").innerHTML = "Jugador eligió: " + opt
    if (contador ===0){
        document.getElementById ("resultadoFinal").innerHTML = "El ganador de la partida es:"
    }
}