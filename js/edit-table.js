"use strict"
let btnVaciar = document.querySelector(".btn-vaciar");
btnVaciar.addEventListener("click", vaciarTabla);
let btnInsertar = document.querySelector(".btnEnviar");
btnInsertar.addEventListener("click", insertarFila);
let btnAgregar = document.querySelector(".btn-agregar");
btnAgregar.addEventListener("click", insertarForm);

let destino = document.querySelector(".destinoSelect");
let estadia = document.querySelector(".estadiaSelect");
let servicio = document.querySelector(".servicioSelect");
let pago = document.querySelector(".pagoSelect");
// tengo que agregar un evento que escuche cambios de la tabla y llame a mostrarTabla

let tabla = {
  "destinos": [],
  "estadia": [],
  "servicios": [],
  "forma de pago": []
};
let forms[
  "form1" {
    "destinos",
    "estadia",
    "servicio",
    "pago"
  }, 
  "form2" {
    "destinos",
    "estadia",
    "servicio",
    "pago"
  },
  "form3" {
    "destinos",
    "estadia",
    "servicio",
    "pago"
  }
];
mostrarTabla();

function mostrarTabla {
  let tblBody = document.querySelector(".tebodi");
  let tRow = tblBody.insertRow(); // aca insertamos una fila a tbody
  let tCell0 = tRow.insertCell(0); // con esto insertamos una celda vacia en la fila
  let tCell1 = tRow.insertCell(1);
  let tCell2 = tRow.insertCell(2);
  let tCell3 = tRow.insertCell(3);
}

function insertarFila() {
  // inserción de elementos a la tabla
  tabla.destinos[0] = destino.value; // aca cargamos el valor del select en el json
  tabla.estadia[0] = estadia.value;
  tabla.servicio[0] = servicio.value;
  tabla.pago[0] = pago.value;
  
}

// function vaciarTabla{} Esto vaciaría de elementos la tabla

function insertarForm() {
  let select = document.createElement(<select>)
}