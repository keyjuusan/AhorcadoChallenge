var menuPrincipal = document.querySelector(".menuPrincipal");
var btnJugar = document.querySelector(".btnJugar");
var btnAdd = document.querySelector(".btnAdd")
var jugando = document.querySelector(".jugando");
var agregaPalabras = document.querySelector(".agregaPalabras");
var btnRendirse = document.querySelector(".btnRendirse");
var btnCancelar = document.querySelector(".btnCancelar");

btnJugar.onclick = jugar;
btnAdd.onclick = añadirPalabra;
btnRendirse.onclick = retornar;
btnCancelar.onclick = retornar;

agregaPalabras.style.display = "none";
jugando.style.display = "none";


//Aprender a escribir te ahorrara un dolor de cabeza.

function jugar(){
    menuPrincipal.style.display = "none";
    jugando.style.display = "block";
    if(btnJugar){
    window.addEventListener("keydown", function(event){
    console.log(event.key)  });
    }else{
        console.log("algo salio mal");
    }
}

function añadirPalabra(){
    menuPrincipal.style.display = "none";
    agregaPalabras.style.display = "block";

}

function retornar(){
    // menuPrincipal.style.display = "block";
    // jugando.style.display = "none";
    // agregaPalabras.style.display = "none";
    location.reload();
}

// window.addEventListener("keydown", function(event) {

//     if(event.key !== undefined) {
//         console.log(event.key);
//     } else if (event.wich !== undefined) {
//         // Manipula el evento con KeyboardEvent.wich
//     }
// });
