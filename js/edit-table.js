"use strict"
let btnAgregarFila = document.querySelector(".btn-agregar");
btnAgregarFila.addEventListener("click", agregarFila);
let btnVaciar = document.querySelector(".btn-vaciar");
btnVaciar.addEventListener("click", vaciarTabla);
let btnInsertar = document.querySelector(".btnEnviar");
btnInsertar.addEventListener("click", insertarFila);

function vaciarTabla{} // Esto vaciaría de elementos la tabla

function agregarFila{ // Esto agrega hasta 3 grupo de input para la entrada de datos
  /*let form = '<div class="form-group">'+
    +'<input class="form-control"placeholder="Servicios">'
    +'<input class="form-control"placeholder="Servicios">'
    +'<p>Destino</p>'
    +'<select class="form-control">'
        +'<option value="madrid">Madrid</option>'
        +'<option value="cataratas">Cataratas</option>'
        +'<option value="mexico">Mexico</option>'
        +'<option value="brasil">Brasil</option>'
        +'<option value="londres">Londres</option>'
        +'<option value="paris">Paris</option>'
        +'<option value="roma">Roma</option>'
        +'<option value="berlin">Berlin</option>'
    +'</select>'; // input a agregar */
    // no debería haber mas de 3 form abiertos
}

function insertarFila{
} //Esto agregaría las filas de input que genera agregarFila
