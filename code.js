const menuPrincipal = document.querySelector(".menuPrincipal");
const btnJugar = document.querySelector(".btnJugar");
const btnAdd = document.querySelector(".btnAdd");
const jugando = document.querySelector(".jugando");
const btnNuevoJuego = document.querySelector(".btnNuevoJuego");
const letrasCorrectas = document.querySelector(".letrasCorrectas");
const letrasIncorrectas = document.querySelector(".letrasIncorrectas");
const agregaPalabras = document.querySelector(".agregaPalabras");
const btnGuardar = document.querySelector(".btnGuardar");
const btnRendirse = document.querySelector(".btnRendirse");
const btnCancelar = document.querySelector(".btnCancelar");
const palabra = document.querySelector(".palabra");

let palabras = ["dudas", "codigo", "alura", "victoria", "desafio"];
let letrasSup = [];
let letrasSub = [];
let coorDeLetras =[];
let divs = [];

var i=0,h=0;

btnJugar.onclick = jugar;
btnNuevoJuego.onclick = nuevoJuego;
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
pincel.fillRect(0,355,294,5);



//Aprender a escribir te ahorrara un dolor de cabeza.

function jugar(){
    
    menuPrincipal.style.display = "none";
    jugando.style.display = "block";

    var palabraAleatoria = Math.floor(Math.random() * palabras.length);
    var acumulaBloques = new String("");

    while(i < palabras[palabraAleatoria].length){
        
        letrasSup.push(palabras[palabraAleatoria].charAt(i));
        divs.push("<div class='cajaLetra' > <p class='p"+i+"' style='display:none;'>"+ palabras[palabraAleatoria].charAt(i).toUpperCase() +"</p></div>");
        coorDeLetras.push("p"+i);
        acumulaBloques = acumulaBloques + divs[i];
        letrasCorrectas.innerHTML = acumulaBloques;
    i++;
    }
            
    window.addEventListener("keydown", function juegoEstructura(event){
        
        var encontrado = false; 
        var k=0;
        
            

        for(var j=0; j<27;j++){
            var verLetra = document.querySelector("."+coorDeLetras[j]);
            
            if(event.key == letrasSub[j] || event.key == palabras[palabraAleatoria].charAt(j)){
                verLetra.style.display = "block";
                encontrado = true;
            }else{
                console.log("pasó algo");
            }
        }

        if(encontrado == false){
            letrasSub.push(event.key);
            letrasIncorrectas.innerHTML = letrasIncorrectas.innerHTML + "<p>"+event.key.toUpperCase()+"</p>";
            if (letrasSub.length === 1) {   
                //palo vertical
                pincel.fillStyle = "#F9F9F9";
                pincel.strokeStyle = "#F9F9F9";

                pincel.fillRect(98,0,5,360);
            }else if(letrasSub.length === 2){
                //palo horizontal
                pincel.fillStyle = "#F9F9F9";
                pincel.strokeStyle = "#F9F9F9";
                pincel.fillRect(98,0,156,3.5);
                
            }else if(letrasSub.length === 3){
                //cuerda
                pincel.fillStyle = "#F9F9F9";
                pincel.strokeStyle = "#F9F9F9";
                pincel.fillRect(250.5,0,3.5,55);
                
            }else if(letrasSub.length === 4){
                //cabeza
                pincel.fillStyle = "#F9F9F9";
                pincel.strokeStyle = "#F9F9F9";
                pincel.beginPath();
                pincel.arc(253,81,25,0,2*3.14);
                pincel.stroke();
                
            }else if(letrasSub.length === 5){
                //soga en el cuello
                pincel.fillStyle = "#F9F9F9";
                pincel.strokeStyle = "#F9F9F9";
                pincel.beginPath();
                pincel.moveTo(248,110);
                pincel.lineWidth = "4.5";
                pincel.lineCap = "round";
                pincel.lineTo(258,110);
                pincel.stroke();

                pincel.lineWidth = "3.5";
                //torso
                pincel.fillRect(251.5,112,3.5,80);
                
            }else if(letrasSub.length === 6){
                //brazo derecho
                pincel.fillStyle = "#F9F9F9";
                pincel.strokeStyle = "#F9F9F9";
                pincel.beginPath();
                pincel.moveTo(254,122);
                pincel.lineTo(282,152);
                pincel.stroke();
                
            }else if(letrasSub.length === 7){
                //brazo izquierdo
                pincel.fillStyle = "#F9F9F9";
                pincel.strokeStyle = "#F9F9F9";
                pincel.beginPath();
                pincel.moveTo(252,122.5);
                pincel.lineTo(224,152);
                pincel.stroke();
                
            }else if(letrasSub.length === 8){
                //pierna derecha
                pincel.fillStyle = "#F9F9F9";
                pincel.strokeStyle = "#F9F9F9";
                pincel.beginPath();
                pincel.moveTo(254,192);
                pincel.lineTo(282,225);
                pincel.stroke();
                
            }else if(letrasSub.length === 9){
                //pierna izquierda
                pincel.fillStyle = "#F9F9F9";
                pincel.strokeStyle = "#F9F9F9";
                pincel.beginPath();
                pincel.moveTo(252,192);
                pincel.lineTo(224,225);
                pincel.stroke();

                pincel.fillStyle = "#FF1E00";
                pincel.fillText("¡Perdiste!", 160, 250);
            }

            

        }else{
            console.log("problemon");
        }
        // if (letrasSup.length === palabraAleatoria) {
        //         pincel.fillStyle = "#59CE8F";
        //         pincel.fillText("¡Ganaste!", 160,250);
        //         window
        //     }     
    });
}

function nuevoJuego(){
    //Aqui va el proceso de guardar la palabra letra por letra
    
    return jugar();

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


//DIBUJO DEL AHORCADO

//palo vertical
// pincel.fillRect(98,0,5,360);
//palo horizontal
// pincel.fillRect(98,0,156,3.5);
//cuerda
// pincel.fillRect(250.5,0,3.5,55);
//cabeza
// pincel.beginPath();
// pincel.arc(253,81,25,0,2*3.14);
// pincel.stroke();
//soga en el cuello
// pincel.beginPath();
// pincel.moveTo(248,110);
// pincel.lineWidth = "4.5";
// pincel.lineCap = "round";
// pincel.lineTo(258,110);
// pincel.stroke();

// pincel.lineWidth = "3.5";
//torso
// pincel.fillRect(251.5,112,3.5,80);
//brazo derecho
// pincel.beginPath();
// pincel.moveTo(254,122);
// pincel.lineTo(282,152);
// pincel.stroke();
//brazo izquierdo
// pincel.beginPath();
// pincel.moveTo(252,122.5);
// pincel.lineTo(224,152);
// pincel.stroke();
//pierna derecha
// pincel.beginPath();
// pincel.moveTo(254,192);
// pincel.lineTo(282,225);
// pincel.stroke();
//pierna izquierda
// pincel.beginPath();
// pincel.moveTo(252,192);
// pincel.lineTo(224,225);
// pincel.stroke();