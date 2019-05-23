"use strict"
let btnAgregarFila = document.querySelector(".btn-agregar");
//btnAgregarFila.addEventListener("click", agregarFila);
let btnVaciar = document.querySelector(".btn-vaciar");
//btnVaciar.addEventListener("click", vaciarTabla);
let btnInsertar = document.querySelector(".btnEnviar");
btnInsertar.addEventListener("click", insertarFila);
let btnagregar = document.querySelector(".btn-agregar");
btnagregar.addEventListener("click", insertaritem);

let tabla = {
  "destinos": ["madrid", "roma", "brasil", "mexico", "cataratas"],
  "estadia": ["15 a 20 dias", "20 a 25 noches", "30 a 35 dias", "1 Meses", "2 Meses"],
  "servicios": ["AllInclusive", "Vuelos y traslados", "Vuelos y Hotel", "Vuelos, hotel y traslados"],
  "forma de pago": ["Efectivo", "Tarjeta de Debito", "Tarjeta de Credito", "Pago Express"]
};
  

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
function insertaritem() {
  let select = document.createElement(<select>)
}