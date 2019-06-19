"use strict"
let tabla = {
  "destinos": "",
  "estadia": "",
  "servicios": "",
  "pago": ""
};

let btnVaciar = document.querySelector(".btn-vaciar");
btnVaciar.addEventListener("click", vaciarTabla);

let btnInsertar = document.querySelector(".btnEnviar");
btnInsertar.addEventListener("click", () => {
  insertarTabla(tabla);
});


let btnAgregar = document.querySelector(".btn-agregar");
btnAgregar.addEventListener("click", () =>{
  agregar3(tabla);
});




// function agregarForm(contadorForm, forms) {
//   let formulario = '<form id="form' + contadorForm + '" class="form-list"><div class="form-group"><p>Destino</p><input type="text" class="form-control" placeholder="Destino"></div><div class="form-group"><p>Estadia</p><input type="text" class="form-control" placeholder="Estadia"></div><div class="form-group"><p>Servicios</p><input type="text" class="form-control" placeholder="Servicios"></div><div class="form-group"><p>Forma de pago</p><input type="text" class="form-control" placeholder="Forma de Pago"></div><button type="button" class="btnEnviar btn btn-primary">Finalizar</button></form>';
//   let containerForm = document.querySelector(".form-container");
//   if (contadorForm <= 2) {
//     let nuevoFormulario = {
//       "destinos": "",
//       "estadia": "",
//       "servicios": "",
//       "pago": ""
//     };
//     forms.push(nuevoFormulario); // .push() inserta el json nuevoFormulario en el arreglo forms
//     contadorForm++;

//     //containerForm.appendChild(formulario);

//   }
//   mostrarForm();
// }

function mostrarTabla() {
  let tblBody = document.querySelector(".tebodi")
  let tRow = tblBody.insertRow(); // aca insertamos una fila a tbody
  /*let celdas = 0;
  let tCell=[];
  tCell[celdas] = 0;
  for (celdas = 0; celdas < 4; celdas++){
    // con esto insertamos una celda vacia en la fila. sabemos que tenemos 4 celdas por fila (row)
    tCell[celdas] = tRow.insertCell(celdas);
  }*/
  let tCell0 = tRow.insertCell(0);
  let tCell1 = tRow.insertCell(1);
  let tCell2 = tRow.insertCell(2);
  let tCell3 = tRow.insertCell(3);
  tCell0.innerHTML = tabla.destinos; //aca tomamos el valor de la celda y le pintamos el valor ingresado en el form
  tCell1.innerHTML = tabla.estadia; // lo mismo para cada una de las celdas
  tCell2.innerHTML = tabla.servicios;
  tCell3.innerHTML = tabla.pago;
}

function vaciarTabla(tabla) {
  let tblBody = document.querySelector(".tebodi")
  let cantTabla = Object.keys(tabla).length; // Object.keys devuelve un arreglo con las prop del objeto. de eso, hacemos length
  while (tblBody.rows.length) {
    tblBody.deleteRow(-1);
  }
}

// function mostrarForm(forms) {
//   let formsHTML = document.querySelector(".form-container");
//   for (let i = 0; i < contadorForm; i++) {
//     //aca mostrar forms[i]
//   }

// }

function insertarTabla(tabla) {
  let destino = document.getElementsByClassName("destinoInput")[0].value;
  let estadia = document.getElementsByClassName("estadiaInput")[0].value;
  let servicio = document.getElementsByClassName("servicioInput")[0].value;
  let pago = document.getElementsByClassName("pagoInput")[0].value;
  tabla.destinos = destino;
  tabla.estadia = estadia;
  tabla.servicios = servicio;
  tabla.pago = pago;
  mostrarTabla();
}

function agregar3(tabla) {
  for (let i = 0; i < 3; i++) {
    insertarTabla(tabla);
  }
}