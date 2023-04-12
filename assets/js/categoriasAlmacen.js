
export let frutas = [];
export let verduras = [];
export let colores = [];


fetch('./assets/json/categorias.json')
.then(res => res.json())
.then(data => almacenandoPalabras(data));

function almacenandoPalabras(datos){
    frutas = datos.frutas;
    verduras = datos.verduras;
    colores = datos.colores;
}
