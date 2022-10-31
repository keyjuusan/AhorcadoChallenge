const menuPrincipal = document.querySelector(".menuPrincipal");
const jugando = document.querySelector(".jugando");
const agregaPalabras = document.querySelector(".agregaPalabras");

agregaPalabras.style.display = "none";
jugando.style.display = "none";

// ALMACENAJE
let palabras = ["DUDAS", "CODIGO", "ALURA", "VICTORIA", "DESAFIO"];
let letrasSub = [];
let letrasSup = [];

// AL PRECIONAR el boton "NUEVO JUEGO"
const btnJugar = document.querySelector(".btnJugar");

const lienso = document.querySelector(".lienso");
const pincel = lienso.getContext("2d");

pincel.fillStyle = "#F9F9F9";
pincel.strokeStyle = "#F9F9F9";
pincel.lineWidth = "3.5";
pincel.fillRect(0, 355, 294, 5);

function nuevaPartida() {

    // VACIAR ARRAY DE LETRAS INCORRECTAS

    menuPrincipal.style.display = "none";
    jugando.style.display = "flex";

    // AQUI VA EL DESGLOSE DE UNA PALABRA ALEATORIA REPARTIDO EN ESPACIOS LETRA POR LETRA
    const letrasCorrectas = document.querySelector(".letrasCorrectas");
    let palabraAleatoria = Math.floor(Math.random() * palabras.length);


    for (var i = 0; i < palabras[palabraAleatoria].length; i++) {

        const cajaLetra = document.createElement("div");
        cajaLetra.classList.add("cajaLetra");
        letrasCorrectas.appendChild(cajaLetra);
        const letra = document.createElement("p");
        letra.classList.add("p" + i);
        letra.style.display = "none";
        letra.textContent = palabras[palabraAleatoria].charAt(i).toUpperCase();
        cajaLetra.appendChild(letra);
    }

    const letrasIncorrectas = document.querySelector(".letrasIncorrectas");
    document.addEventListener("keydown", function paco(event) {
        let encontrado = false;
        let encontra2 = false;

        // REVELA LAS LETRAS CORRECTAS
        for (var g = 0; g < palabras[palabraAleatoria].length; g++) {
            let verLetra = document.querySelector(".p" + g);
            if (event.key.toUpperCase() == palabras[palabraAleatoria].charAt(g))
                verLetra.style.display = "block";
        }

        for (var j = 0; j < 8; j++) {
            if (event.key.toUpperCase() == letrasSub[j] || event.key.toUpperCase() == palabras[palabraAleatoria].charAt(j)) {

                encontrado = true;
                break;
            } else {
                console.log("pasó algo");
            }
        }

        // VALIDACION PARA IDENTIFICAR CUANDO SE GANA EN EL JUEGO
        for (var h = 0; h < palabras[palabraAleatoria].length; h++) {
            if (event.key.toUpperCase() == palabras[palabraAleatoria].charAt(h)) {
                encontra2 = true;
            } else {  
                letrasSup.push(event.key.toUpperCase());
                break;
            }
        }


        if (letrasSup.length == palabras[palabraAleatoria].length) {
            pincel.font = "24px Monospace";
            pincel.fillStyle = "#7DCE13";
            pincel.fillText("¡Ganaste!", 135, 280);
            document.removeEventListener("keydown", paco)
        }

        if (encontrado == false) {
            letrasSub.push(event.key.toUpperCase());
            letrasIncorrectas.innerHTML += "<p>" + event.key.toUpperCase() + "</p>";

            if (letrasSub.length === 1) {
                //palo vertical
                crearRectangulo(98, 0, 5, 360, "#F9F9F9");

            } else if (letrasSub.length === 2) {
                //palo horizontal
                crearRectangulo(98, 0, 156, 3.5, "#F9F9F9");

            } else if (letrasSub.length === 3) {
                //cuerda
                crearRectangulo(250.5, 0, 3.5, 55, "#F9F9F9");

            } else if (letrasSub.length === 4) {
                //cabeza
                crearCirculo(253, 81, 25, "#F9F9F9");

            } else if (letrasSub.length === 5) {
                //soga en el cuello
                crearLinea(248, 110, 258, 110, "3.5", "#F9F9F9");
                //torso
                crearRectangulo(251.5, 112, 3.5, 80, "#F9F9F9");

            } else if (letrasSub.length === 6) {
                //brazo derecho
                crearLinea(254, 122, 282, 152, "3.5", "#F9F9F9");

            } else if (letrasSub.length === 7) {
                //brazo izquierdo
                crearLinea(252, 122.5, 224, 152, "3.5", "#F9F9F9");

            } else if (letrasSub.length === 8) {
                //pierna derecha
                crearLinea(254, 192, 282, 225, "3.5", "#F9F9F9");

            } else if (letrasSub.length === 9) {
                //pierna izquierda
                crearLinea(252, 192, 224, 225, "3.5", "#F9F9F9");

                pincel.font = "24px Monospace";
                pincel.fillStyle = "#FF1E00";
                pincel.fillText("¡Perdiste!", 135, 280);
                document.removeEventListener("keydown", paco)
            }

        } else {
            console.log("problemon");
        }
    });

}

function crearRectangulo(x, y, ancho, alto, color) {
    pincel.fillStyle = color;
    pincel.fillRect(x, y, ancho, alto);
}
function crearCirculo(x, y, radio, color) {
    pincel.fillStyle = color;
    pincel.strokeStyle = color;
    pincel.beginPath();
    pincel.arc(x, y, radio, 0, 2 * 3.14);
    pincel.stroke();
}
function crearLinea(x1, y1, x2, y2, grosor, color) {
    pincel.fillStyle = color;
    pincel.strokeStyle = color;
    pincel.lineWidth = grosor;
    pincel.beginPath();
    pincel.moveTo(x1, y1);
    pincel.lineTo(x2, y2);
    pincel.stroke();
}

btnJugar.addEventListener("click", nuevaPartida);


// const btnNuevoJuego = document.querySelector(".btnNuevoJuego");
// btnNuevoJuego.addEventListener("click", () => {
//     location.reload();
// });

const btnRendirse = document.querySelector(".btnRendirse");
btnRendirse.addEventListener("click", () => {
    location.reload();
});


// AL PRECIONAR el boton "AGREGAR PALABRA"
const btnAdd = document.querySelector(".btnAdd");
btnAdd.addEventListener("click", () => {
    menuPrincipal.style.display = "none";
    agregaPalabras.style.display = "flex";

    // AL PRECIONAR el boton "CANCELAR"
    const btnCancelar = document.querySelector(".btnCancelar");
    btnCancelar.addEventListener("click", () => {
        agregaPalabras.style.display = "none";
        menuPrincipal.style.display = "flex";
    });

    // AL PRECIONAR el boton "GUARDAR Y JUGAR"
    const btnGuardar = document.querySelector(".btnGuardar");
    btnGuardar.addEventListener("click", () => {
        const palabra = document.querySelector(".palabra");
        palabras.push(palabra.value)
        menuPrincipal.style.display = "none";
        jugando.style.display = "flex";
        nuevaPartida();
    });
});