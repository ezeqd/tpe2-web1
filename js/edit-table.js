"use strict"
let btnVaciar = document.querySelector(".btn-vaciar");
btnVaciar.addEventListener("click", vaciarTabla);

let btnInsertar = document.querySelector(".btnEnviar");
btnInsertar.addEventListener("click", mostrarTabla);

let btnAgregar = document.querySelector(".btn-agregar");
btnAgregar.addEventListener("click", agregarForm);

let destino = document.querySelector(".destinoSelect");
let estadia = document.querySelector(".estadiaSelect");
let servicio = document.querySelector(".servicioSelect");
let pago = document.querySelector(".pagoSelect");

let contadorForm = 0;

let forms[
  {
    "destinos":"",
    "estadia":"",
    "servicio":"",
    "pago":""
  }]

let tabla = {
  "destinos": [],
  "estadia": [],
  "servicios": [],
  "pago": []
};

function agregarForm (){
  if (contadorForm<2){
    let nuevoFormulario = {"destinos":"", "estadia":"", "servicios":"", "pago":""}
    forms.push(nuevoFormulario); // .push() inserta el json nuevoFormulario en el arreglo forms
    contadorForm++;
  }
  mostrarForm();
}

function mostrarTabla () {
  let tblBody = document.querySelector(".tebodi")
  let tRow = tblBody.insertRow(); // aca insertamos una fila a tbody
  for (let celdas = 0; celdas < 4; celdas++){
    // con esto insertamos una celda vacia en la fila. sabemos que tenemos 4 celdas por fila (row)
    let tCell[celdas] = tRow.insertCell(celdas);
  }

  /*tCell0.innerHTML = tabla.destinos[0]; //aca tomamos el valor de la celda y le pintamos el valor ingresado en el form
  tCell1.innerHTML = tabla.estadia[0]; // lo mismo para cada una de las celdas
  tCell2.innerHTML = tabla.servicios[0];
  tCell3.innerHTML = tabla.pago[0];*/
}

function vaciarTabla (tabla) {
  let cantTabla = Object.keys(tabla).length; // Object.keys devuelve un arreglo con las prop del objeto. de eso, hacemos length
  for (let i = 0; i < cantTabla; i++){
    tabla.pop(); // elimina el ultimo elemento del json
  }
  mostrarTabla();
}

function mostrarForm(forms){
  let formsHTML = document.querySelector(."form-container");
  for (let i = 0; i < contadorForm; i++){
    //aca mostrar forms[i]
  }

}

/*function insertarForm() {} */
