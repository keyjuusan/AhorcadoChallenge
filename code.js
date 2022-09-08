const menuPrincipal = document.querySelector(".menuPrincipal");
const btnJugar = document.querySelector(".btnJugar");
const btnAdd = document.querySelector(".btnAdd")
const jugando = document.querySelector(".jugando");
const agregaPalabras = document.querySelector(".agregaPalabras");
const btnGuardar = document.querySelector(".btnGuardar")
const btnRendirse = document.querySelector(".btnRendirse");
const btnCancelar = document.querySelector(".btnCancelar");
const palabra = document.querySelector(".palabra")

let palabras = ["dudas", "codigo", "alura", "victoria", "desafio"];

btnJugar.onclick = jugar;
btnGuardar.onclick = guardarJugar;
btnAdd.onclick = añadirPalabra;
btnRendirse.onclick = retornar;
btnCancelar.onclick = retornar;

agregaPalabras.style.display = "none";
jugando.style.display = "none";
// menuPrincipal.style.display = "none";

//Dibujo del Canvas

const lienso = document.querySelector(".lienso");
const pincel = lienso.getContext("2d");

pincel.fillStyle = "#F9F9F9";
pincel.strokeStyle = "#F9F9F9";
pincel.lineWidth = "3.5";
pincel.fillRect(52,360,360,5);
//palo vertical
pincel.fillRect(134,8,5,352);
//palo horizontal
pincel.fillRect(134,8,180,3.5);
//cuerda
pincel.fillRect(314,8,3.5,55);
//cabeza
pincel.beginPath();
pincel.arc(316.5,87,25,0,2*3.14);
pincel.stroke();
//soga en el cuello
// pincel.fillCap = "round";
// pincel.fillRect(308,114,16,4);
pincel.beginPath();
pincel.moveTo(310,116);
pincel.lineWidth = "4.5";
pincel.lineCap = "round";
pincel.lineTo(322,116);
pincel.stroke();

pincel.lineWidth = "3.5";
//torso
pincel.fillRect(314,112,3.5,80);
//brazo derecho
pincel.beginPath();
pincel.moveTo(316,122);
pincel.lineTo(344,152);
pincel.stroke();
//brazo izquierdo
pincel.beginPath();
pincel.moveTo(316,121);
pincel.lineTo(287,152);
pincel.stroke();
//pierna derecha
pincel.beginPath();
pincel.moveTo(316,192);
pincel.lineTo(347,225);
pincel.stroke();
//pierna izquierda
pincel.beginPath();
pincel.moveTo(316,192);
pincel.lineTo(287,225);
pincel.stroke();

//Aprender a escribir te ahorrara un dolor de cabeza.

function jugar(){
    menuPrincipal.style.display = "none";
    jugando.style.display = "block";
    if(btnJugar){
        window.addEventListener("keydown", function(event){
        // console.log(event.key) 
        pincel.font = "20px monospace" ;
        pincel.fillText(event.key, 200, 500);
        });
    }else{
        console.log("algo salio mal");
    } 

}

function guardarJugar(){
    //Aqui va el proceso de guardar la palabra letra por letra
    palabras.push(palabra.value);
    jugar();
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
