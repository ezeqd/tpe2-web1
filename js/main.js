"use strict"
// let btnleermas = document.getElementsByClassName(".boton"),
//     mensajeoculto = document.querySelectorAll("#mostrarmas");


// btnleermas.addEventListener("click" , function(){
//     for (let i=0; i<mensajeoculto.length; i++) {
//         mensajeoculto[i].classList.toggle("mostrar");
//     }
// })





let btnEnviar = document.querySelector(".btnEnviar"); //boton de envio de form
let valcap = document.querySelector(".validateCap"); //captcha ingresado, a validar
let captcha = document.querySelector(".captcha"); //lugar donde se va a depositar el captcha
btnEnviar.addEventListener("click", validate);

function generate (captcha){
  let numRandom = Math.floor((Math.random() * 999) + 1);
  captcha.innerHTML = numRandom; //aca se asigna el valor generado
}

function validate (e) {
  e.preventDefault();
  let formulario = document.querySelector(".contacto-form");
  let codigo  = captcha.innerHTML; //tomo el valor que se genero y se asigno anteriormente
  let validar = valcap.value; //tomo el valor del input para comparar
  if (codigo == validar) {
    alert("Datos ingresados correctamente");
    formulario.submit();
  }
  else {
    alert("Codigo de validación erroneo");
    generate(captcha);
  }
}
generate(captcha);