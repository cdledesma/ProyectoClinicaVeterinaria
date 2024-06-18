let selectorPaciente = document.getElementById("labelnombremascota");
let secDatos = document.getElementById("cont-dat");
let contenedorRegMasc = document.getElementById("cformMas");
const myModalRegMas = new bootstrap.Modal(
  document.getElementById("registroMasc")
);
const formMasc = (event) => {
  event.preventDefault();
  cargarforReg();
  myModalRegMas.show();
};


const cargarforReg = () => {

  contenedorRegMasc.innerHTML = "";
  let formularioRegMasc = document.createElement("form");
  formularioRegMasc.classList = "row h-100 w-100";
  let cardformularioregistroMasc = ` 
  <div class="col-xl-12 col-md-12">
  <div class="col-xl-12 col-md-12 mb-5 text-center text-primary-emphasis">
    <h3 class="tituloform"> Datos de la mascota</h3>
  </div>
    <div class="my-3">
     <label for="">Paciente</label>
            <input type="text" class="form-control" id="nombre-mas" placeholder="Nombre de Mascota">
      </div>
   <div class="my-3">
   <label for="">Especie</label>
            <input type="text" class="form-control" id="especie-mas" placeholder="Ingrese la Especie de su mascota">
      </div>
         <div class="my-3">
                     <label for="">Sexo</label>
            <input type="text" class="form-control" id="sexo-mas" placeholder="ingrese el Sexo de su mascota">
      </div>
         <div class="my-3">
         <label for="">Raza</label>
            <input type="text" class="form-control" id="raza-mas" placeholder="Ingrese la raza de su mascota">
      </div>
         <div class="my-3">
                     <label for="">Peso</label>
            <input type="text" class="form-control" id="peso-mas" placeholder="Ingrese el peso de su mascota">
      </div>
         <div class="my-3">
          <label for="">imagen</label>
            <input type="text" class="form-control" id="img-mas" placeholder="Adjunte una foto">
      </div>
          <div class="text-center">
                <button type="button" class="buttonguardarformulario1 btn fw-semibold w-50 rounded-5" onclick="registroMascota (event)">Guardar</button>
              </div>

     `;
  formularioRegMasc.innerHTML = cardformularioregistroMasc;
  contenedorRegMasc.append(formularioRegMasc);

};


const cargaDatos = () => {
  secDatos.innerHTML = "";
  let cont = document.createElement("div");
  cont.classList = "card informacion usuario w-100";
  let conte = `<div class="contenedor-imagen-perfil">
         <img
           src="${usuarioConectado.imagen}"
           class="card-img-top img-perfil" alt="foto de perfil de ${usuarioConectado.nombre}" />
       </div>
       <div class="card-body">
         <h5 class="card-title">${usuarioConectado.apellido} ${usuarioConectado.nombre}</h5>
         <p class="card-text">
           ver que poner aqui
         </p>
       </div>`;
  cont.innerHTML = conte;
  secDatos.append(cont);
};

const registroMascota = (event) => {
  event.preventDefault();
  let nombre = document.getElementById("nombre-mas").value;
  let especie = document.getElementById("especie-mas").value;
  let sexo = document.getElementById("sexo-mas").value;
  let raza = document.getElementById("raza-mas").value;
  let peso = document.getElementById("peso-mas").value;
  let imagen = document.getElementById("img-mas").value;
  let id = new Date().getTime();

  let nuevaMascota = new Mascota(id, nombre, especie, sexo, raza, peso, imagen);
  if (usuarioConectado) {
    // Convertir usuarioConectado a una instancia de Propietario
    let propietarioActual = Object.assign(new Propietario(), usuarioConectado);
    propietarioActual.agregarMascota(nuevaMascota);

    // Actualizar el propietario en la lista de propietarios
    const propietarioIndex = propietarios.findIndex(
      (prop) => prop.id === usuarioConectado.id
    );
    if (propietarioIndex !== -1) {
      propietarios[propietarioIndex] = propietarioActual;
      localStorage.setItem("propietarios", JSON.stringify(propietarios));
      alert("Mascota registrada y guardada exitosamente!");
    }
  }
  myModalRegMas.hide();
};

// let formMascota = document.getElementById("formulario-mascota").addEventListener("submit", registroMascota);

// let btnTurno = document.getElementById("confirmar-turno");

// const guardarTurno = (event) => {
//     event.preventDefault();
//     let id = new Date().getTime();
//     let idprop = usuarioConectado.id;
//     let propietario = `${usuarioConectado.apellido} ${usuarioConectado.nombre}`;
//     let pacienteIndex = document.getElementById("seleccionar-mascota").value - 1;
//     let paciente = usuarioConectado.mascotas[pacienteIndex].nombre;
//     let especie = usuarioConectado.mascotas[pacienteIndex].especie;
//     let mc = document.getElementById("motivo").value;
//     let especialista = document.getElementById("select-especialista").value;
//     let fecha = document.getElementById("select-fecha").value;

//     console.log(id, idprop, propietario, paciente, especie, mc, especialista, fecha,

//     );
//     let nuevoTurno = new Turno(id, idprop, propietario, paciente, especie, mc, especialista, fecha);
//     usuarioConectado.agregarTurno(nuevoTurno);
//     const propietarioI = propietarios.findIndex((prop) => {
//         prop.id === usuarioConectado.id
//     })
//     propietarios[propietarioI] = usuarioConectado;
//     localStorage.setItem("propietarios", JSON.stringify(propietarios));

// }

// document.getElementById("formulario-turno").addEventListener("submit", guardarTurno)

// cargarformturno();

//Capturar contenedor

let contenedorformulario = document.getElementById("cform");
let contenedorformulario2 = document.getElementById("cform2");
let contenedorformulario3 = document.getElementById("cform3");
// Funcion modal
const myModal1 = new bootstrap.Modal(
  document.getElementById("registroturnosmodal1")
);
const myModal2 = new bootstrap.Modal(
  document.getElementById("registroturnosmodal2")
);
const myModal3 = new bootstrap.Modal(
  document.getElementById("registroturnosmodal3")
);
// Llamar modal
const solicTur = (event) => {
  event.preventDefault();
  cargarformulario();
  myModal1.show();
  //   desplegarPaciente();
};

const llamarmodalalcancelar = () => {
  cargarformulario();
  myModal1.show();
};

const llamarmodal2 = () => {
  mostrarturno();
  myModal2.show();
};

const llamarmodal3 = (event) => {
  event.preventDefault();
  myModal2.hide();
  cargarmensajedexito();
  myModal3.show();
};

//Funcion cargar formulario

const cargarformulario = () => {
  alert(`Solo puede solicitar turnos para dias habiles`);

  contenedorformulario.innerHTML = "";
  let formulariotarjeta = document.createElement("form");
  formulariotarjeta.classList = "row h-100 w-100";
  let cardformularioregistro = ` 
           <div class="col-xl-6 col-md-6">
  <div class="col-xl-12 col-md-12 mb-5 text-center text-primary-emphasis">
    <h3 class="tituloform"> Datos de la mascota</h3>
  </div>

  <div class="my-3">
    <label for="seleccionar-mascota" class="form-label">Nombre de la mascota</label>
    <select class="form-select border border-primary-subtle rounded-5" aria-label="Default select example" id="seleccionar-mascota">
    </select>
  </div>
  
  <div class="my-3">
    <label for="labelMc" class="form-label">Motivo de la Consulta</label>
    <textarea type="text" class="form-control border border-primary-subtle rounded-5 " id="labelMc" placeholder="Ingrese el motivo de la consulta"></textarea>
  </div>  
   <div class="my-3">
  <label for="selectservicio" class="form-label">Motivo de la Consulta</label>

    <select class="form-select border border-primary-subtle rounded-5" aria-label="Default select example" id="selectservicio">
                    <option selected value="">Elige un servicio</option>
                    <option value="Cirugía">Cirugía</option>
                    <option value="Clínica General">Clínica General</option>
                    <option value="Traumatología">Traumatología</option>
                    <option value="Oftalmología">Oftalmología</option>
                    <option value="Radiología">Radiología</option>
                    <option value="Ecografía">Ecografía</option>
                    <option value="Cardiología">Cardiología</option>

                  </select>
  </div>
<div class="my-3">
  <label for="selectfecha" class="form-label">Seleccione la fecha</label>

                <input type="date" class="form-select border border-primary-subtle rounded-5" aria-label="Default select example" id="selectfecha">

  </div>
</div>
    <div class="col-xl-6 col-md-6">
              <div class="col-xl-12 col-md-12 text-center text-primary-emphasis mb-5"><h3 class="tituloform">Datos del propietario</h3></div>
              <div class="my-3">
                <label for="exampleFormControlInput1" class="form-label ">Nombre y apellido</label>
                <input type="email" class="form-control border border-primary-subtle rounded-5" id="labelnombredueño" placeholder="${usuarioConectado.apellido} ${usuarioConectado.nombre}" readonly>
              </div>
              <div class="my-3">
                <label for="exampleFormControlInput1" class="form-label">Dni</label>
                <input type="email" class="form-control border border-primary-subtle rounded-5" id="labeldni" placeholder="${usuarioConectado.id}" readonly>
              </div>
              <div class="my-3">
                <label for="exampleFormControlInput1" class="form-label">Email</label>
                <input type="email" class="form-control border border-primary-subtle rounded-5" id="labelemail" placeholder="${usuarioConectado.email}" readonly>
              </div>
              <div class="my-3">
              <label for="exampleFormControlInput1" class="form-label">Telefono</label>
              <input type="email" class="form-control border border-primary-subtle rounded-5" id="labeltelefono" placeholder="${usuarioConectado.telefono}" readonly>
              </div>
            </div>

     

              <div class="text-center">
                <button type="button" class="buttonguardarformulario1 btn fw-semibold w-50 rounded-5" onclick="agregarturnos (event)">Guardar</button>
              </div>
     `;
  formulariotarjeta.innerHTML = cardformularioregistro;
  contenedorformulario.append(formulariotarjeta);
  let seleccionarMascota = document.getElementById("seleccionar-mascota");
  usuarioConectado.mascotas.forEach((mascota, index) => {
    let option = document.createElement("option");
    option.value = index + 1;
    option.text = mascota.nombre;
    seleccionarMascota.appendChild(option);
  });
};

//Agregar turno

const agregarturnos = (event) => {
  // detener submit
  event.preventDefault();

  //capturar valores
  let id = new Date().getTime();
  let idprop = usuarioConectado.id;
  let propietario = `${usuarioConectado.apellido} ${usuarioConectado.nombre}`;
  let pacienteIndex = document.getElementById("seleccionar-mascota").value - 1;
  let paciente = usuarioConectado.mascotas[pacienteIndex].nombre;
  let especie = usuarioConectado.mascotas[pacienteIndex].especie;
  let mc = document.getElementById("labelMc").value;
  let especialista = document.getElementById("selectservicio").value;
  let fecha = document.getElementById("selectfecha").value;
  console.log(
    id,
    idprop,
    propietario,
    paciente,
    especie,
    mc,
    especialista,
    fecha
  );

  // let mascota = document.getElementById ("labelnombremascota").value;
  // let email = document.getElementById ("labelemail").value;
  // let telefono = document.getElementById ("labeltelefono").value;
  // let raza = document.getElementById ("labelraza").value;
  // let servicio = document.getElementById ("selectservicio").value;
  // let fecha = document.getElementById ("selectfecha").value;
  // let tipo = document.getElementById ("labelespecie").value;

  // Validaciones

  if (!especialista == "" && !fecha == "") {
    // Ver que hacer con las mayusculas ya que no queda estetico cuando se imprime el turno
    // turnos.push (new Turno (dueño.toUpperCase(), dni, email.toUpperCase(), telefono, mascota.toUpperCase(), raza.toUpperCase(), tipo.toUpperCase(), servicio.toUpperCase(), fecha, id=new Date().getTime()))
    // localStorage.setItem ("turnos", JSON.stringify (turnos));
    let propietarios = JSON.parse(localStorage.getItem("propietarios")) || [];
    let nuevoTurno = new Turno(id, idprop, propietario, paciente, especie, mc, especialista, fecha);

    if (usuarioConectado) {
      // Convertir usuarioConectado a una instancia de Propietario
      let propietarioActual = Object.assign(new Propietario(), usuarioConectado);
      propietarioActual.agregarTurno(nuevoTurno);

      // Actualizar el propietario en la lista de propietarios
      const propietarioIndex = propietarios.findIndex(
        (prop) => prop.id === usuarioConectado.id
      );
      if (propietarioIndex !== -1) {
        propietarios[propietarioIndex] = propietarioActual;
        localStorage.setItem("propietarios", JSON.stringify(propietarios));
        alert("Turno guardado Exitosamente");
      }
      document.getElementById("selectfecha").value = "";
      document.getElementById("selectservicio").value = "";
      document.getElementById("labelMc").value = "";
      document.getElementById("seleccionar-mascota").value = "";

      myModal1.hide();
      llamarmodal2();
    } else {
      Swal.fire({
        text: "Complete todos los campos",
        icon: "warning",
      });
    }
  }
};
// let turnonuevo = usuarioConectado.turnos[usuarioConectado.turnos.length - 1];


// Imprimir en pantalla el turno (array)
let turnonuevo = usuarioConectado.turnos[usuarioConectado.turnos.length - 1];

const mostrarturno = () => {
  contenedorformulario2.innerHTML = "";
  // let turnonuevo = usuarioConectado.turnos.filter((turno) => {
  //   return turno.id == id;
  // });

  // turnonuevo.map((item) => {
    let contenedorturnos = document.createElement("div");
    let cardturnos = ` 
        <h1 class="text-center mb-4 mt-2 text-primary-emphasis mb-">Informacion del turno</h1>
        <div class="border boder-secondary border-4 rounded-5 border-primary-subtle shadow-lg bg-primary-subtle">
        <div class="row p-5 my-2 padredelcontenedordelacard">
        <div class="my-3 col-xl-4 col-md-4 text-center contenedordelacard">
          <h2 class="fs-4 fw-bold text-primary-emphasis titulocardinfo">Nombre y apellido</h2>
          <p class="fs-5 fw-semibold mt-4 parrafocard">${turnonuevo.propietario}</p>
        </div>
        <div class="my-3 col-xl-4 col-md-4 text-center contenedordelacard">
          <h2 class="fs-5 fw-bold text-primary-emphasis titulocardinfo">Dni</h2>
          <p class="fs-5 fw-semibold mt-4 parrafocard">${turnonuevo.idprop}</p>
        </div>
        <div class="my-3 col-xl-4 col-md-4 text-center contenedordelacard">
          <h2 class="fs-5 fw-bold text-primary-emphasis titulocardinfo">Nombre de mascota</h2>
          <p class="fs-5 fw-semibold mt-4 parrafocard">${turnonuevo.paciente}</p>
        </div>
        <div class="my-3 col-xl-4 col-md-4 text-center contenedordelacard" >
          <h2 class="fs-5 fw-bold text-primary-emphasis titulocardinfo">Email</h2>
          <p class="fs-5 fw-semibold mt-4 parrafocard">${usuarioConectado.email}</p>
        </div>
        <div class="my-3 col-xl-4 col-md-4 text-center contenedordelacard">
          <h2 class="fs-5 fw-bold text-primary-emphasis titulocardinfo">Telefeno</h2>
          <p class="fs-5 fw-semibold mt-4 parrafocard">${usuarioConectado.telefono}</p>
        </div>
        <div class="my-3 col-xl-4 col-md-4 text-center contenedordelacard">
          <h2 class="fs-5 fw-bold text-primary-emphasis titulocardinfo">Raza</h2>
          <p class="fs-5 fw-semibold mt-4 parrafocard">${turnonuevo.id}</p>
        </div>
        <div class="my-3 col-xl-4 col-md-4 text-center contenedordelacard">
          <h2 class="fs-5 fw-bold text-primary-emphasis titulocardinfo">Especie</h2>
          <p class="fs-5 fw-semibold mt-4 parrafocard">${turnonuevo.especie}</p>
        </div>
        <div class="my-3 col-xl-4 col-md-4 text-center contenedordelacard">
          <h2 class="fs-5 fw-bold text-primary-emphasis titulocardinfo">Servicio</h2>
          <p class="fs-5 fw-semibold mt-4 parrafocard">${turnonuevo.especialista}</p>
        </div>
        <div class="my-3 col-xl-4 col-md-4 text-center contenedordelacard">
          <h2 class="fs-5 fw-bold text-primary-emphasis titulocardinfo">Fecha</h2>
          <p class="fs-5 fw-semibold mt-4 parrafocard">${turnonuevo.fecha}</p>
        </div>
      </div>
     
      </div>
      <div class="row text-center mt-5 contenedorbotonescard">
        <div class="col-xl-6 col-md-6">
          <button type="button" class="buttoncancelar btn fw-semibold w-75 rounded-5" onclick="cancelarturno (event)">Cancelar</button>
        </div>
        <div class="col-xl-6 col-md-6">
          <button type="button" class="buttonenviarguardar btn fw-semibold w-75 rounded-5" onclick="llamarmodal3 (event)">Enviar</button>
        </div>
      </div>
        `;
    contenedorturnos.innerHTML = cardturnos;
    contenedorformulario2.append(contenedorturnos);
  // }
// );
};

// Cancelar turnos

const cancelarturno = (event) => {
  event.preventDefault();
  let turnonuevo = usuarioConectado.turnos[usuarioConectado.turnos.length - 1];

  let indiceturnos = usuarioConectado.turnos.findIndex((turno) => {
    return turno.id == turnonuevo.id;
  });
  if (indiceturnos !== -1) {
    usuarioConectado.turnos.splice(indiceturnos, 1);
    let propietarios = JSON.parse(localStorage.getItem("propietarios")) || [];

    const propietarioIndex = propietarios.findIndex((prop) => {
      return prop.id === usuarioConectado.id;
    });
    if (propietarioIndex !== -1) {
      // Actualiza el usuario conectado en el array de propietarios
      propietarios[propietarioIndex] = usuarioConectado;
      localStorage.setItem("propietarios", JSON.stringify(propietarios));
      alert("Turno cancelado exitosamente!");}
    }

  // localStorage.setItem("turnos", JSON.stringify(turnos));

  myModal2.hide();
  llamarmodalalcancelar();
};

const cargarmensajedexito = () => {
  contenedorformulario3.innerHTML = "";
  let contenedormensajeregistro = document.createElement("div");
  contenedormensajeregistro.classList = "h-100 w-100";
  let carddelmensaje = `
    <div class="h-75 w-100 contenedortitulo">
    <div class="bg-primary-subtle rounded-5 p-5 shadow-lg">
      <div>
        <h1 class="turnoregistrado text-center text-primary-emphasis">¡Tu turno se ha registrado con exito!</h1>
      </div>      
    </div>  
  </div>  
  <div class="w-100 text-center">
    <button type="button" class="buttonenviarguardar btn fw-semibold w-25 rounded-5" onclick="myModal3.hide ()">Cerrar</button>
  </div>   
    `;
  contenedormensajeregistro.innerHTML = carddelmensaje;
  contenedorformulario3.append(contenedormensajeregistro);
};

// const desplegarPaciente = () => {
//     if (usuarioConectado && usuarioConectado.mascotas) {
//         selectorPaciente.innerHTML = "";
//         usuarioConectado.mascotas.map((item, i) => {
//             let opcion = document.createElement("option");
//             opcion.value = i + 1;
//             opcion.textContent = item.nombre;
//             selectorPaciente.appendChild(opcion);
//             console.log(usuarioConectado.mascotas);
//         });
//     }
// };
usuarioConectado
let turnosPendientes = document.getElementById("masc-colaTurnos")
const turnosPen = () => {
    turnosPendientes.innerHTML = "";
    let colaPendiente = false; 

        usuarioConectado.turnos.map((turno) => {
            if (!turno.solic) {
                let tarjetaCola = document.createElement("div");
                tarjetaCola.classList.add("card");

                let contenido = `
                    <div class="card-body d-flex justify-content-between align-items-center row">
                        <a href="">${turno.paciente}</a>
                    </div>`;
                tarjetaCola.innerHTML = contenido;
                turnosPendientes.appendChild(tarjetaCola);

                colaPendiente = true;
            }
        });


    if (!colaPendiente) {
        let mensaje = document.createElement("div");
        mensaje.classList.add("alert", "alert-info");
        mensaje.innerText = "No hay turnos pendientes .";
        turnosPendientes.appendChild(mensaje);
    }
};

let listaAtendidos = document.getElementById("atendidos")

// const atendidos = () => {
//     listaAtendidos.innerHTML = "";
//     let col = false; 

//     propietarios.forEach((propietario) => {
//         propietario.turnos.forEach((turno) => {
//             if (turno.solic && turno.especialista === usuarioConectado.especialidad && turno.estado) {
//                 let tarjetaCola = document.createElement("div");
//                 tarjetaCola.classList.add("card");

//                 let contenido = `
//                     <div class="card-body d-flex justify-content-between align-items-center row">
//                         <a href="">${turno.paciente}</a>
//                     </div>`;
//                 tarjetaCola.innerHTML = contenido;
//                 listaAtendidos.appendChild(tarjetaCola);

//                 col = true;
//             }
//         });
//     });

//     if (!col) {
//         let mensaje = document.createElement("div");
//         mensaje.classList.add("alert", "alert-info");
//         mensaje.innerText = "No se atendio a ningun paciente .";
//         listaAtendidos.appendChild(mensaje);
//     }
// };
cargaDatos();
