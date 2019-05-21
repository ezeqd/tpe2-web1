"use strict";
let btn = document.querySelectorAll('.boton'),
    mostrarmas = document.querySelectorAll('.oculto');

    for (let i=0; i<btn.length; i++) {
        btn[i].addEventListener("click", function(event){
            mostrarmas[i].classList.toggle("oculto");
           }
        );
    }