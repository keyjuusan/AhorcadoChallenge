import { frutas, verduras, colores } from "./categoriasAlmacen.js"

const menuPrincipalSect = document.querySelector(".principal__menu");
const btnJugar = document.querySelector(".menu__btnJugar");
const btnAdd = document.querySelector(".menu__btnAdd");
const btnGuardarJugar = document.querySelector(".agregaPalabras__btnGuardar")
const categoriasSect = document.querySelector(".principal__categorias");
const jugandoSect = document.querySelector(".principal__jugando");
const letrasCorrectas = document.querySelector(".sectorLetras__correctas");
const letrasIncorrectas = document.querySelector(".sectorLetras__incorrectas");
const btnHome = document.querySelector(".home__icon");
const btnReintentar = document.querySelector(".reintentar__icon");
const agregaPalabrasSect = document.querySelector(".principal__agregaPalabras");
// const btnAtras = document.querySelector(".agregaPalabras__btnCancelar")

var palabrasAñadidas = [];
var letrasSub = [];
let categoriaActual = [];
let palabraAleatoria = 0;
const teclasTeclado = document.querySelectorAll('.jugando__teclado button');



btnJugar.addEventListener("click", (event) => {
    event.preventDefault();

    mostrarCategoriasSect();    

});

function mostrarCategoriasSect() {
    jugandoSect.style.display = "none";
    menuPrincipalSect.style.display = "none";
    agregaPalabrasSect.style.display = "none";
    categoriasSect.style.display = "flex";
}

btnAdd.addEventListener("click", () => {
    jugandoSect.style.display = "none";
    menuPrincipalSect.style.display = "none";
    agregaPalabrasSect.style.display = "flex";
    categoriasSect.style.display = "none";
})

btnGuardarJugar.addEventListener("click", (event) => {
    event.preventDefault();
    palabrasAñadidas = document.querySelector(".agregaPalabras__campo").value.toLowerCase().split(" ");
    mostrarCategoriasSect();    

})

const lienso = document.querySelector(".jugando__lienso");
const pincel = lienso.getContext("2d");

pincel.fillStyle = "#F9F9F9";
pincel.strokeStyle = "#F9F9F9";
pincel.lineWidth = "3.5";
pincel.fillRect(0, 355, 294, 5);

categoriasSect.addEventListener("click", (e) => {
    iniciandoPartida(e.target.classList[1]);

});

btnHome.addEventListener("click", (event) => {
    volverCasa();



    //crear un if en el nivel local entorno al la interaccion local para esta accion del evento
    // document.removeEventListener("keydown", keysEvent());
});

btnReintentar.addEventListener("click", (event) => {
    event.preventDefault();

    palabraAzar(categoriaActual);

    teclasEvent();
    // jugandoSect.style.display = "none";
    // menuPrincipalSect.style.display = "flex";
    // agregaPalabrasSect.style.display = "none";
    // categoriasSect.style.display = "none";

});

// btnAdd.addEventListener("click", (event) => {
//     event.preventDefault();

//     jugandoSect.style.display = "none";
//     menuPrincipalSect.style.display = "none";
//     agregaPalabrasSect.style.display = "flex";
//     categoriasSect.style.display = "none";

// });

function iniciandoPartida(categoriaBtn) {


    selectCategoria(categoriaBtn);

    teclasEvent();
}

function selectCategoria(event) {
    //Mostrar las botones ne las categorias
    switch (event) {
        case "colores":
            palabraAzar(colores);
            categoriaActual = colores;
            jugandoSect.style.display = "flex";
            categoriasSect.style.display = "none";
            break;
        case "frutas":
            palabraAzar(frutas);
            categoriaActual = frutas;
            jugandoSect.style.display = "flex";
            categoriasSect.style.display = "none";
            break;
        case "verduras":
            palabraAzar(verduras);
            categoriaActual = verduras;
            jugandoSect.style.display = "flex";
            categoriasSect.style.display = "none";
            break;
        case "palabrasAñadidas":
            palabraAzar(palabrasAñadidas);
            categoriaActual = palabrasAñadidas;
            jugandoSect.style.display = "flex";
            categoriasSect.style.display = "none";
            break;

        default:
            console.log("Categoria inexistente!");
            break;
    }
}

function limpiarPartida() {

    //Vaciando sala de partida
    if (document.querySelectorAll(".cajaLetra").length > 0) {
        let cajaLetra = document.querySelectorAll(".cajaLetra");
        let p = document.querySelectorAll(".sectorLetras__incorrectas p");
        pincel.clearRect(0, 0, 294, 360);
        for (let i = 0; i < cajaLetra.length; i++) {
            cajaLetra[i].remove();

        }
        for (let i = 0; i < p.length; i++) {
            p[i].remove();
        }
        letrasSub.length = 0;
        // palabrasAñadidas.length = 0;
        palabraAleatoria = 0;
        for (let i = 0; i < 27; i++) { teclasTeclado[i].disabled = false; }

    }
}

function palabraAzar(categoria) {

    limpiarPartida();

    palabraAleatoria = Math.floor(Math.random() * categoria.length);

    for (let i = 0; i < categoria[palabraAleatoria].length; i++) {
        const cajaLetra = document.createElement("div");
        cajaLetra.classList.add("cajaLetra");
        letrasCorrectas.appendChild(cajaLetra);
    }
};

function teclasEvent() {

    const cajaLetra = document.querySelectorAll('.cajaLetra')

    document.addEventListener("keydown", function keysEvent(event) {

        let encontrado = false;

        for (let i = 0; i < categoriaActual[palabraAleatoria].length; i++) {
            // console.log(categoriaActual[palabraAleatoria].charAt(i))
            console.log(event.key.toLowerCase())

            if (event.key.toLowerCase() == categoriaActual[palabraAleatoria].charAt(i).toLowerCase()) {
                cajaLetra[i].innerHTML = `<p>${categoriaActual[palabraAleatoria].charAt(i).toUpperCase()}</p>`;

                encontrado = true;
            }

        }

        for (let j = 0; j < categoriaActual[palabraAleatoria].length; j++) {
            if (event.key.toLowerCase() == letrasSub[j]) {
                encontrado = true;
            } else {
                // console.log("pasó algo");
            }
        }

        if (encontrado == false) {
            letrasSub.push(event.key.toLowerCase());
            // console.log(letrasSub);
            letrasIncorrectas.innerHTML += `<p> ${event.key.toUpperCase()} </p>`;

            switch (letrasSub.length) {

                case 1:
                    //palo vertical
                    crearRectangulo(98, 0, 5, 360, "#F9F9F9");
                    break;
                case 2:
                    //palo horizontal
                    crearRectangulo(98, 0, 156, 3.5, "#F9F9F9");
                    break;
                case 3:
                    //cuerda
                    crearRectangulo(250.5, 0, 3.5, 55, "#F9F9F9");
                    break;
                case 4:
                    //cabeza
                    crearCirculo(253, 81, 25, "#F9F9F9");
                    break;
                case 5:
                    //soga en el cuello
                    crearLinea(248, 110, 258, 110, "3.5", "#F9F9F9");
                    //torso
                    crearRectangulo(251.5, 112, 3.5, 80, "#F9F9F9");
                    break;
                case 6:
                    //brazo derecho
                    crearLinea(254, 122, 282, 152, "3.5", "#F9F9F9");
                    break;
                case 7:
                    //brazo izquierdo
                    crearLinea(252, 122.5, 224, 152, "3.5", "#F9F9F9");
                    break;
                case 8:
                    //pierna derecha
                    crearLinea(254, 192, 282, 225, "3.5", "#F9F9F9");
                    break;

                case 9:
                    //pierna izquierda
                    crearLinea(252, 192, 224, 225, "3.5", "#F9F9F9");

                    pincel.font = "24px Monospace";
                    pincel.fillStyle = "#FF1E00";
                    pincel.fillText("¡Perdiste!", 135, 280);

                    document.removeEventListener("keydown", keysEvent)

                    for (let i = 0; i < 27; i++) { teclasTeclado[i].disabled = true; }
                    break;
                default:
                    console.log("muchos intentos fallidos")
                    break;
            }



        } else if (document.querySelectorAll('.cajaLetra p').length == categoriaActual[palabraAleatoria].length) {
            pincel.font = "24px Monospace";
            pincel.fillStyle = "#7DCE13";
            pincel.fillText("¡Ganaste!", 135, 280);
            document.removeEventListener("keydown", keysEvent);
            for (let i = 0; i < 27; i++) { teclasTeclado[i].disabled = true; }

        } else {
            // console.log("problemon");
        }

    });

    // PARTE LOGICA DEL TECLADO

    for (let k = 0; k < 27; k++) {
        teclasTeclado[k].addEventListener("click", function pacoKeys(evento) {
            // console.log(categoriaActual[palabraAleatoria].length)

            let encontrado = false;

            const cajaLetra = document.querySelectorAll('.cajaLetra')

            for (let h = 0; h < categoriaActual[palabraAleatoria].length; h++) {
                if (evento.target.innerHTML.toLowerCase() == categoriaActual[palabraAleatoria].charAt(h)) {
                    cajaLetra[h].innerHTML = `<p>${categoriaActual[palabraAleatoria].charAt(h).toUpperCase()}</p>`;
                    encontrado = true;
                }
            }

            for (let j = 0; j < categoriaActual[palabraAleatoria].length; j++) {
                if (evento.target.innerHTML.toLowerCase() == letrasSub[j]) {
                    encontrado = true;
                } else {
                    // console.log("pasó algo");
                }
            }

            if (encontrado == false) {
                letrasSub.push(evento.target.innerHTML.toLowerCase());
                letrasIncorrectas.innerHTML += "<p>" + evento.target.innerHTML.toUpperCase() + "</p>";

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
                    for (let i = 0; i < 27; i++) { teclasTeclado[i].disabled = true; }

                }

            } else if (document.querySelectorAll('.cajaLetra p').length == categoriaActual[palabraAleatoria].length) {
                pincel.font = "24px Monospace";
                pincel.fillStyle = "#7DCE13";
                pincel.fillText("¡Ganaste!", 135, 280);
                for (let i = 0; i < 27; i++) { teclasTeclado[i].disabled = true; }
            } else {
                // console.log("problemon");
            }

        });
    }
}

function volverCasa() {
    window.location.reload()

    //Vaciando sala de partida
    // if (document.querySelectorAll(".cajaLetra").length > 0) {
    //     let cajaLetra =  document.querySelectorAll(".cajaLetra");
    //     let p = document.querySelectorAll("p").length
    //     pincel.clearRect(0, 0, 294, 360);
    //     for (let i = 0; i < cajaLetra.length; i++) {
    //         cajaLetra[i].remove();

    //     }
    //     for (let i = 0; i < p.length; i++) {
    //         p[i].remove();
    //     }
    //     letrasSub.length = 0;
    // }


    // jugandoSect.style.display = "none";
    // menuPrincipalSect.style.display = "flex";
    // agregaPalabrasSect.style.display = "none";
    // categoriasSect.style.display = "none";


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