"use strict"
let btnVaciar = document.querySelector(".btn-vaciar");
     btnVaciar.addEventListener("click", vaciartabla);
let btnInsertar = document.querySelector(".btnfinalizar");
btnInsertar.addEventListener("click", mostrarTabla);
let btnAgregar = document.querySelector(".btn-agregar");
// btnAgregar.addEventListener("click", insertarForm);

let destino = document.querySelector(".destinoSelect");
let estadia = document.querySelector(".estadiaSelect");
let servicio = document.querySelector(".servicioSelect");
let pago = document.querySelector(".pagoSelect");
// tengo que agregar un evento que escuche cambios de la tabla y llame a mostrarTabla

document.addEventListener('DOMContentLoaded', iniciar);
function iniciar (event) {

  destino.addEventListener("change" , function(){ //aca guardo el valor ingresado en el campo destino
    tabla.destinos[0] = destino.value; 
    
  });
  estadia.addEventListener("change" , function (){ //aca guardo el valor ingresado en el campo estadia
    tabla.estadia[0] = estadia.value;
  });
  servicio.addEventListener("change" , function(){ // aca guardo el valor ingresado en el campo servicio
    tabla.servicios[0] = servicio.value;
  });
  pago.addEventListener("change" , function(){// aca guardo el valor ingresado en el campo pago
    tabla.pago[0] = pago.value;
  });
}




let tabla = {
  "destinos": [],
  "estadia": [],
  "servicios": [],
  "pago": []
};
function mostrarTabla () {
  let tblBody = document.querySelector(".tebodi")
  let tRow = tblBody.insertRow(); // aca insertamos una fila a tbody
  let tCell0 = tRow.insertCell(0); // con esto insertamos una celda vacia en la fila
  let tCell1 = tRow.insertCell(1);
  let tCell2 = tRow.insertCell(2);
  let tCell3 = tRow.insertCell(3);
  tCell0.innerHTML = tabla.destinos[0]; //aca tomamos el valor de la celda y le pintamos el valor ingresado en el form
  tCell1.innerHTML = tabla.estadia[0]; // lo mismo para cada una de las celdas
  tCell2.innerHTML = tabla.servicios[0];
  tCell3.innerHTML = tabla.pago[0]; 
}
function vaciartabla (tabla) {
  
 }
iniciar();







// let forms[
  //     "form1" {
    //             "destinos"
    //             "estadia"
    //             "servicio"
    //             "pago"
    //     }, 
    //   "form2" {
      //     "destinos",
      //     "estadia",
      //     "servicio",
      //     "pago"
      //   },
      //   "form3" {
        //     "destinos",
        //     "estadia",
        //     "servicio",
        //     "pago"
        //   }
        // ];
        // mostrarTabla();
        





// function insertarForm() {
//   let select = document.createElement(<select>)
// }