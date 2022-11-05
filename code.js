const menuPrincipal = document.querySelector(".menuPrincipal");
const jugando = document.querySelector(".jugando");
const agregaPalabras = document.querySelector(".agregaPalabras");

agregaPalabras.style.display = "none";
jugando.style.display = "none";

// ALMACENAJE
let palabras = ["dudas", "codigo", "alura", "victoria", "desafio"];
let letrasSub = [];
// let letrasSup;

// AL PRECIONAR el boton "NUEVO JUEGO"
const btnJugar = document.querySelector(".btnJugar");

const lienso = document.querySelector(".lienso");
const pincel = lienso.getContext("2d");

pincel.fillStyle = "#F9F9F9";
pincel.strokeStyle = "#F9F9F9";
pincel.lineWidth = "3.5";
pincel.fillRect(0, 355, 294, 5);

let palabraAleatoria = 0;
let tecla;

function nuevaPartida() {

    menuPrincipal.style.display = "none";
    jugando.style.display = "flex";

    // AQUI VA EL DESGLOSE DE UNA PALABRA ALEATORIA REPARTIDO EN ESPACIOS LETRA POR LETRA
    palabraAzar();

    const letrasIncorrectas = document.querySelector(".letrasIncorrectas");
    document.addEventListener("keydown", function paco(event) {
        let encontrado = false;

        const cajaLetra = document.querySelectorAll('.cajaLetra')

        for (let h = 0; h < palabras[palabraAleatoria].length; h++) {
            if (event.key == palabras[palabraAleatoria].charAt(h)) {
                cajaLetra[h].innerHTML = `<p>${palabras[palabraAleatoria].charAt(h).toUpperCase()}</p>`;
                encontrado = true;
            }
        }

        for (let j = 0; j < palabras[palabraAleatoria].length; j++) {
            if (event.key.toLowerCase() == letrasSub[j]) {
                encontrado = true;
            } else {
                // console.log("pasó algo");
            }
        }

        if (encontrado == false) {
            letrasSub.push(event.key.toLowerCase());
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
                document.removeEventListener("keydown", paco);
                for(let i=0;i<27;i++){tecla[i].disabled = true;}
            }

        } else if (document.querySelectorAll('.cajaLetra p').length == palabras[palabraAleatoria].length) {
            pincel.font = "24px Monospace";
            pincel.fillStyle = "#7DCE13";
            pincel.fillText("¡Ganaste!", 135, 280);
            document.removeEventListener("keydown", paco);
            for(let i=0;i<27;i++){tecla[i].disabled = true;}
            
        } else {
            // console.log("problemon");
        }
    });

// PARTE LOGICA DEL TECLADO

    for (let k = 0; k < 27; k++) {
        tecla = document.querySelectorAll('.teclado button');
        tecla[k].addEventListener('click', function pacoKeys(event) {
            // console.log(event.target.innerHTML)

            let encontrado = false;

            const cajaLetra = document.querySelectorAll('.cajaLetra')

            for (let h = 0; h < palabras[palabraAleatoria].length; h++) {
                if (event.target.innerHTML.toLowerCase() == palabras[palabraAleatoria].charAt(h)) {
                    cajaLetra[h].innerHTML = `<p>${palabras[palabraAleatoria].charAt(h).toUpperCase()}</p>`;
                    encontrado = true;
                }
            }

            for (let j = 0; j < palabras[palabraAleatoria].length; j++) {
                if (event.target.innerHTML.toLowerCase() == letrasSub[j]) {
                    encontrado = true;
                } else {
                    // console.log("pasó algo");
                }
            }

            if (encontrado == false) {
                letrasSub.push(event.target.innerHTML.toLowerCase());
                letrasIncorrectas.innerHTML += "<p>" + event.target.innerHTML.toUpperCase() + "</p>";

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
                    for(let i=0;i<27;i++){tecla[i].disabled = true;}
                    
                }

            } else if (document.querySelectorAll('.cajaLetra p').length == palabras[palabraAleatoria].length) {
                pincel.font = "24px Monospace";
                pincel.fillStyle = "#7DCE13";
                pincel.fillText("¡Ganaste!", 135, 280);
                for(let i=0;i<27;i++){tecla[i].disabled = true;}
            } else {
                // console.log("problemon");
            }

        });
    }

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

function palabraAzar() {
    const letrasCorrectas = document.querySelector(".letrasCorrectas");
    palabraAleatoria = Math.floor(Math.random() * palabras.length);


    for (let i = 0; i < palabras[palabraAleatoria].length; i++) {
        const cajaLetra = document.createElement("div");
        cajaLetra.classList.add("cajaLetra");
        letrasCorrectas.appendChild(cajaLetra);
    }
};

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