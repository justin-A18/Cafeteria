let boton = document.getElementById("burger").addEventListener("click",abrirMenu);


function abrirMenu(){
    
    let contenido = document.getElementById("link-container");
    contenido.style.left = "-30" + "px";
}

let cerrar = document.getElementById("cerrar").addEventListener("click",cerrarMenu);

function cerrarMenu(){

    let contenido = document.getElementById("link-container");
    contenido.style.left = "-500" + "px";
}