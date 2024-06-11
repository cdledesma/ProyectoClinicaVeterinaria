// class turno {
//     constructor(dueño, dni, email, telefono, mascota, raza, tipo, servicio, fecha, id) {
//         this.dueño=dueño
//         this.dni=dni
//         this.email=email
//         this.telefono=telefono
//         this.mascota=mascota
//         this.raza=raza
//         this.tipo=tipo
//         this.servicio=servicio
//         this.fecha=fecha  
//         this.id=id
//     }
// }


let servicios = ["Cirugia", "Esterilizacion", "Vacunacion", "Desparacitacion", "Consulta", "Ecografia"]
let fechas = ["26/6/24", "27/6/24","30/6/24","1/7/24","4/7/24"]
// let turnos = JSON.parse (localStorage.getItem("turnos")) || []

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
}

const llamarmodalalcancelar = () => {
  cargarformulario ()
  myModal1.show ()
}

const llamarmodal2 = () => {
  mostrarturno ()
  myModal2.show ()
}


const llamarmodal3 = (event) => {
    event.preventDefault ()
    myModal2.hide ()
    cargarmensajedexito ()
    myModal3.show ()
}




//Funcion cargar formulario

const cargarformulario = () => {
    contenedorformulario.innerHTML = ""
    let formulariotarjeta = document.createElement ("form");
    formulariotarjeta.classList = "row h-100 w-100";
    let cardformularioregistro = ` 
    <div class="col-xl-6 col-md-6">
              <div class="col-xl-12 col-md-12 text-center text-primary-emphasis mb-5"><h3 class="tituloform">Datos del propietario</h3></div>
              <div class="my-3">
                <label for="exampleFormControlInput1" class="form-label ">Nombre y apellido</label>
                <input type="email" class="form-control border border-primary-subtle rounded-5" id="labelnombredueño" placeholder="Ingrese su nombre">
              </div>
              <div class="my-3">
                <label for="exampleFormControlInput1" class="form-label">Dni</label>
                <input type="email" class="form-control border border-primary-subtle rounded-5" id="labeldni" placeholder="Ingrese su dni">
              </div>
              <div class="my-3">
                <label for="exampleFormControlInput1" class="form-label">Email</label>
                <input type="email" class="form-control border border-primary-subtle rounded-5" id="labelemail" placeholder="Ingrese su email">
              </div>
              <div class="my-3">
              <label for="exampleFormControlInput1" class="form-label">Telefono</label>
              <input type="email" class="form-control border border-primary-subtle rounded-5" id="labeltelefono" placeholder="Ingrese su telefono">
              </div>
            </div>

            <div class="col-xl-6 col-md-6">
              <div class="col-xl-12 col-md-12 mb-5 text-center text-primary-emphasis"><h3 class="tituloform"> Datos de la mascota</h3></div>
              <div class="my-3">
                <label for="exampleFormControlInput1" class="form-label">Nombre de la mascota</label>
                <div class="text-center">
                <input type="email" class="form-control border border-primary-subtle rounded-5" id="labelnombremascota" placeholder="Ingrese el nombre de la mascota">
               </div>
               <div class="my-3">
                <label for="exampleFormControlInput1" class="form-label">Raza</label>
                <input type="email" class="form-control border border-primary-subtle rounded-5" id="labelraza" placeholder="Ingrese la raza">
              </div>
              <div class="my-3">
                <label for="exampleFormControlInput1" class="form-label">Especie</label>
                <input type="email" class="form-control border border-primary-subtle rounded-5" id="labelespecie" placeholder="Ingrese la especie">
              </div>
              </div>
           </div>
                     
              <div class="mt-5 mb-3 col-xl-6 col-md-6">
                <select class="form-select border border-primary-subtle rounded-5" aria-label="Default select example" id="selectservicio">
                    <option selected value="">Elige un servicio</option>
                    <option value="Cirugia">Cirugia</option>
                    <option value="Esterilizacion">Esterilizacion</option>
                    <option value="Vacunacion">Vacunacion</option>
                    <option value="Desparacitacion">Desparacitacion</option>
                    <option value="Consulta">Consulta</option>
                    <option value="Ecografia">Ecografia</option>
                  </select>
              </div>
              <div class="mt-5 col-xl-6 col-md-6">
                <select class="form-select border border-primary-subtle rounded-5" aria-label="Default select example" id="selectfecha">
                    <option selected value="">Elige una fecha</option>
                    <option value="26/6/24">26/6/24</option>
                    <option value="27/6/24">27/6/24</option>
                    <option value="30/6/24">30/6/24</option>
                    <option value="1/7/24">1/7/24</option>
                    <option value="4/7/24">4/7/24</option>
                  </select>
              </div>
              <div class="text-center">
                <button type="button" class="buttonguardarformulario1 btn fw-semibold w-50 rounded-5" onclick="agregarturnos (event)">Guardar</button>
              </div>
     `
    formulariotarjeta.innerHTML = cardformularioregistro
    contenedorformulario.append (formulariotarjeta);
}


//Agregar turno

const agregarturnos = (event) => {

    // detener submit
    event.preventDefault();

    //capturar valores
    let dueño = document.getElementById ("labelnombredueño").value;
    let dni = document.getElementById ("labeldni").value;
    let mascota = document.getElementById ("labelnombremascota").value;
    let email = document.getElementById ("labelemail").value;
    let telefono = document.getElementById ("labeltelefono").value;
    let raza = document.getElementById ("labelraza").value;
    let servicio = document.getElementById ("selectservicio").value;
    let fecha = document.getElementById ("selectfecha").value;
    let tipo = document.getElementById ("labelespecie").value;

    // Validaciones

      if (dueño.length >= 5 && dni.length >=5 && mascota.length >= 3 &&  email.length >= 5 && telefono.length >= 5 && raza.length >= 4 && tipo.length >= 5 && !servicio == "" && !fecha == "" ) {
        if ((email.match(/([a-z]\w+@[a-z]+\.[a-z]{2,5})/))) {
          if (telefono.match(/^(?=\w*\d)/)) {
            // Ver que hacer con las mayusculas ya que no queda estetico cuando se imprime el turno
            turnos.push (new turno (dueño.toUpperCase(), dni, email.toUpperCase(), telefono, mascota.toUpperCase(), raza.toUpperCase(), tipo.toUpperCase(), servicio.toUpperCase(), fecha, id=new Date().getTime()))
            localStorage.setItem ("turnos", JSON.stringify (turnos));
            document.getElementById ("labelnombredueño").value = "";
            document.getElementById ("labeldni").value = "";
            document.getElementById ("labelnombremascota").value = "";
            document.getElementById ("labelemail").value = "";
            document.getElementById ("labeltelefono").value = "";
            document.getElementById ("labelraza").value = "";
            document.getElementById ("selectservicio").value= "";
            document.getElementById ("selectfecha").value ="";
            document.getElementById ("labelespecie").value ="";

            myModal1.hide ()
            llamarmodal2 ()  
          }
          else {
            Swal.fire ({
              text: "Telefono y Dni no puede contener letras",
              icon: 'warning'
            })
          }         
        } 
        
        else {
          Swal.fire ({
            text: "El email debe contener un @",
            icon: 'warning'
          })
        }
    } else {
        Swal.fire ({
          text: "Complete todos los campos",
          icon: 'warning'
      })
    
}

}

// Imprimir en pantalla el turno (array)

const mostrarturno = () => {
    contenedorformulario2.innerHTML = ""
    let turnonuevo = turnos.filter ((turno)=> {
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

