"use strict"
let btnAgregarFila = document.querySelector(".btn-agregar");
//btnAgregarFila.addEventListener("click", agregarFila);
let btnVaciar = document.querySelector(".btn-vaciar");
//btnVaciar.addEventListener("click", vaciarTabla);
let btnInsertar = document.querySelector(".botonazo");
btnInsertar.addEventListener("click", insertarFila);

function insertarFila() {
  // elementos a agregar
  let destino = document.querySelector(".destinoSelect");
  let estadia = document.querySelector(".estadiaSelect");
  let servicio = document.querySelector(".servicioSelect");
  let pago = document.querySelector(".pagoSelect");
  // inserción de elementos a la tabla
  let tblBody = document.querySelector(".tebodi");
  let tRow = tblBody.insertRow();
  let tCell0 = tRow.insertCell(0);
  tCell0.innerHTML = destino.value;
  let tCell1 = tRow.insertCell(1);
  tCell1.innerHTML = estadia.value;
  let tCell2 = tRow.insertCell(2);
  tCell2.innerHTML = servicio.value;
  let tCell3 = tRow.insertCell(3);
  tCell3.innerHTML = pago.value;
}

//Esto agregaría las filas de input que genera agregarFila
/*function agregarFila{ // Esto agrega hasta 3 grupo de input para la entrada de datos
    // no debería haber mas de 3 form abiertos
}*/

// function vaciarTabla{} Esto vaciaría de elementos la tabla
