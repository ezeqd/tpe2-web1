"use strict"
let btnleermas = document.getElementsByClassName(".boton"),
    mensajeoculto = document.querySelectorAll("#mostrarmas");


btnleermas.addEventListener("click" , function(){
    for (let i=0; i<mensajeoculto.length; i++) {
        mensajeoculto[i].classList.toggle("mostrar");
    }
})