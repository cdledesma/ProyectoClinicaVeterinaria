let selectorPaciente = document.getElementById("labelnombremascota");
let secDatos = document.getElementById("cont-dat");

const cargaDatos = ()=>{
    secDatos.innerHTML = ""
    let cont = document.createElement("div")
    cont.classList = "card informacion usuario w-100"
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
       </div>`
    cont.innerHTML = conte;
    secDatos.append(cont)
    
}

const registroMascota = (e) => {
    e.preventDefault()
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
        const propietarioIndex = propietarios.findIndex(prop => prop.id === usuarioConectado.id);
        if (propietarioIndex !== -1) {
            propietarios[propietarioIndex] = propietarioActual;
            localStorage.setItem("propietarios", JSON.stringify(propietarios));
            alert("Mascota registrada y guardada exitosamente!");
        } 
    } 
}

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

let contenedorformulario = document.getElementById ("cform")
let contenedorformulario2 = document.getElementById ("cform2")
let contenedorformulario3 = document.getElementById ("cform3")
// Funcion modal
const myModal1 = new bootstrap.Modal (document.getElementById("registroturnosmodal1"));
const myModal2 = new bootstrap.Modal (document.getElementById("registroturnosmodal2"));
const myModal3 = new bootstrap.Modal (document.getElementById("registroturnosmodal3"));
// Llamar modal
const solicTur = (event) => {
  event.preventDefault ()
  cargarformulario ()
  myModal1.show ()
//   desplegarPaciente();

}

const llamarmodalalcancelar = () => {
  cargarformulario ()
  myModal1.show ()
}

const llamarmodal2 = () => {
  mostrarturno ();
  myModal2.show ();
}


const llamarmodal3 = (event) => {
    event.preventDefault ()
    myModal2.hide ()
    cargarmensajedexito ()
    myModal3.show ()
}

//Funcion cargar formulario

const cargarformulario = () => {
    alert(`Solo puede solicitar turnos para dias habiles`)

    contenedorformulario.innerHTML = ""
    let formulariotarjeta = document.createElement ("form");
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
                    <option value="1">Cirugia</option>
                    <option value="2">Clinica General</option>
                    <option value="3">Traumatologia</option>
                    <option value="4">Oftalmologia</option>
                    <option value="5">Radiologia</option>
                    <option value="6">Ecografia</option>
                    <option value="7">Cardiologia</option>

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
     `
    formulariotarjeta.innerHTML = cardformularioregistro
    contenedorformulario.append (formulariotarjeta);
    let seleccionarMascota = document.getElementById("seleccionar-mascota");
    usuarioConectado.mascotas.forEach((mascota, index) => {
        let option = document.createElement("option");
        option.value = index + 1;
        option.text = mascota.nombre;
        seleccionarMascota.appendChild(option);
    });
}


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
    console.log(id, idprop, propietario, paciente, especie, mc, especialista, fecha)

    


    // let mascota = document.getElementById ("labelnombremascota").value;
    // let email = document.getElementById ("labelemail").value;
    // let telefono = document.getElementById ("labeltelefono").value;
    // let raza = document.getElementById ("labelraza").value;
    // let servicio = document.getElementById ("selectservicio").value;
    // let fecha = document.getElementById ("selectfecha").value;
    // let tipo = document.getElementById ("labelespecie").value;

    // Validaciones

      if ( !especialista == "" && !fecha == "" ) {
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
                        const propietarioIndex = propietarios.findIndex(prop => prop.id === usuarioConectado.id);
                        if (propietarioIndex !== -1) {
                            propietarios[propietarioIndex] = propietarioActual;
                            localStorage.setItem("propietarios", JSON.stringify(propietarios));
                            alert("Turno guardado Exitosamente");
                        } 
                        document.getElementById ("selectfecha").value = "";
                        document.getElementById ("selectservicio").value = "";
                        document.getElementById ("labelMc").value = "";
                        document.getElementById ("seleccionar-mascota").value = "";

            
                        myModal1.hide ()
                        llamarmodal2 ()  
            
                } else {
                    Swal.fire ({
                      text: "Complete todos los campos",
                      icon: 'warning'
                  })
                
            }
                    } 


                    


          

}

// Imprimir en pantalla el turno (array)

const mostrarturno = () => {
    contenedorformulario2.innerHTML = ""
    let turnonuevo = usuarioConectado.turnos.filter ((turno)=> {
        return turno.id == id
    }) 

    turnonuevo.map ((item) => {
        let contenedorturnos = document.createElement ("div");
        let cardturnos = ` 
        <h1 class="text-center mb-4 mt-2 text-primary-emphasis mb-">Informacion del turno</h1>
        <div class="border boder-secondary border-4 rounded-5 border-primary-subtle shadow-lg bg-primary-subtle">
        <div class="row p-5 my-2 padredelcontenedordelacard">
        <div class="my-3 col-xl-4 col-md-4 text-center contenedordelacard">
          <h2 class="fs-4 fw-bold text-primary-emphasis titulocardinfo">Nombre y apellido</h2>
          <p class="fs-5 fw-semibold mt-4 parrafocard">${item.dueño}</p>
        </div>
        <div class="my-3 col-xl-4 col-md-4 text-center contenedordelacard">
          <h2 class="fs-5 fw-bold text-primary-emphasis titulocardinfo">Dni</h2>
          <p class="fs-5 fw-semibold mt-4 parrafocard">${item.dni}</p>
        </div>
        <div class="my-3 col-xl-4 col-md-4 text-center contenedordelacard">
          <h2 class="fs-5 fw-bold text-primary-emphasis titulocardinfo">Nombre de mascota</h2>
          <p class="fs-5 fw-semibold mt-4 parrafocard">${item.mascota}</p>
        </div>
        <div class="my-3 col-xl-4 col-md-4 text-center contenedordelacard" >
          <h2 class="fs-5 fw-bold text-primary-emphasis titulocardinfo">Email</h2>
          <p class="fs-5 fw-semibold mt-4 parrafocard">${item.email}</p>
        </div>
        <div class="my-3 col-xl-4 col-md-4 text-center contenedordelacard">
          <h2 class="fs-5 fw-bold text-primary-emphasis titulocardinfo">Telefeno</h2>
          <p class="fs-5 fw-semibold mt-4 parrafocard">${item.telefono}</p>
        </div>
        <div class="my-3 col-xl-4 col-md-4 text-center contenedordelacard">
          <h2 class="fs-5 fw-bold text-primary-emphasis titulocardinfo">Raza</h2>
          <p class="fs-5 fw-semibold mt-4 parrafocard">${item.raza}</p>
        </div>
        <div class="my-3 col-xl-4 col-md-4 text-center contenedordelacard">
          <h2 class="fs-5 fw-bold text-primary-emphasis titulocardinfo">Especie</h2>
          <p class="fs-5 fw-semibold mt-4 parrafocard">${item.tipo}</p>
        </div>
        <div class="my-3 col-xl-4 col-md-4 text-center contenedordelacard">
          <h2 class="fs-5 fw-bold text-primary-emphasis titulocardinfo">Servicio</h2>
          <p class="fs-5 fw-semibold mt-4 parrafocard">${item.servicio}</p>
        </div>
        <div class="my-3 col-xl-4 col-md-4 text-center contenedordelacard">
          <h2 class="fs-5 fw-bold text-primary-emphasis titulocardinfo">Fecha</h2>
          <p class="fs-5 fw-semibold mt-4 parrafocard">${item.fecha}</p>
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
        `
        contenedorturnos.innerHTML = cardturnos
        contenedorformulario2.append (contenedorturnos);
    })
    
}

// Cancelar turnos

const cancelarturno = (event) => {
  event.preventDefault ()
    let indiceturnos = turnos.findIndex ((turno) => {
        return turno.id == id
    })
    console.log(indiceturnos);
    turnos.splice (indiceturnos, 1)

    localStorage.setItem ("turnos", JSON.stringify(turnos))

    myModal2.hide ()
    llamarmodalalcancelar ()
}

const cargarmensajedexito = () => {
    contenedorformulario3.innerHTML = ""
    let contenedormensajeregistro = document.createElement ("div");
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
    `
    contenedormensajeregistro.innerHTML = carddelmensaje
    contenedorformulario3.append (contenedormensajeregistro)
}


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




cargaDatos();












