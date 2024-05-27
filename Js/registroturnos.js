
//Creacion del objeto

class turno {
    constructor(dueño, dni, email, telefono, mascota, raza, tipo, servicio, fecha, id) {
        this.dueño=dueño
        this.dni=dni
        this.email=email
        this.telefono=telefono
        this.mascota=mascota
        this.raza=raza
        this.tipo=tipo
        this.servicio=servicio
        this.fecha=fecha  
        this.id=id
    }
}

//Declaracion de variables

let servicios = ["Cirugia", "Esterilizacion", "Vacunacion", "Desparacitacion", "Consulta", "Ecografia"]
let fechas = ["26/6/24", "27/6/24","30/6/24","1/7/24","4/7/24"]
let turnos = JSON.parse (localStorage.getItem("turnos")) || []

//Capturar contenedor

let contenedorformulario = document.getElementById  ("cform")
console.log(contenedorformulario);

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
    if (dueño.length > 5 ) {

        turnos.push (new turno (dueño, dni, email, telefono, mascota, raza, tipo, servicio, fecha, id=new Date().getTime()))
        localStorage.setItem ("turnos", JSON.stringify (turnos));
        document.getElementById ("labelnombredueño").value = "";
        document.getElementById ("labeldni").value = "";
        document.getElementById ("labelnombremascota").value = "";
        document.getElementById ("labelemail").value = "";
        document.getElementById ("labeltelefono").value = "";
        document.getElementById ("labelraza").value = "";
        document.getElementById ("selectservicio").value= "1";
        document.getElementById ("selectfecha").value ="1";
        document.getElementById ("labelespecie").value ="";

        mostrarturno ()
       
    } 
    
}

// Imprimir en pantalla el turno (array)

const mostrarturno = () => {
    contenedorformulario.innerHTML = "";

    let turnonuevo = turnos.filter ((turno)=> {
        return turno.id == id
    }) 
    console.log(turnonuevo);

    turnonuevo.map ((item) => {
        let contenedorturnos = document.createElement ("div");
        contenedorturnos.classList = "row p-5 my-5 rounded-5 bg-primary-subtle border border-black";
        let cardturnos = ` 
        <h1 class="text-center my-2">Informacion del turno</h1>
        <div class="contenedordelabarra2 my-4">
        <p class="barritadeseparacion2"></p>
        </div>
        <div class="my-3 col-xl-4 text-center">
          <h2 class="fs-4 fw-bold">Nombre y apellido</h2>
          <p class="fs-5 fw-semibold mt-4">${item.dueño}</p>
        </div>
        <div class="my-3 col-xl-4 text-center">
          <h2 class="fs-5 fw-bold">Dni</h2>
          <p class="fs-5 fw-semibold mt-4">${item.dni}</p>
        </div>
        <div class="my-3 col-xl-4 text-center">
          <h2 class="fs-5 fw-bold">Nombre de mascota</h2>
          <p class="fs-5 fw-semibold mt-4">${item.mascota}</p>
        </div>
        <div class="my-3 col-xl-4 text-center">
          <h2 class="fs-5 fw-bold">Email</h2>
          <p class="fs-5 fw-semibold mt-4">${item.email}</p>
        </div>
        <div class="my-3 col-xl-4 text-center">
          <h2 class="fs-5 fw-bold">Telefeno</h2>
          <p class="fs-5 fw-semibold mt-4">${item.telefono}</p>
        </div>
        <div class="my-3 col-xl-4 text-center">
          <h2 class="fs-5 fw-bold">Raza</h2>
          <p class="fs-5 fw-semibold mt-4">${item.raza}</p>
        </div>
        <div class="my-3 col-xl-4 text-center">
          <h2 class="fs-5 fw-bold">Especie</h2>
          <p class="fs-5 fw-semibold mt-4">${item.tipo}</p>
        </div>
        <div class="my-3 col-xl-4 text-center">
          <h2 class="fs-5 fw-bold">Servicio</h2>
          <p class="fs-5 fw-semibold mt-4">${item.servicio}</p>
        </div>
        <div class="my-3 col-xl-4 text-center ">
          <h2 class="fs-5 fw-bold">Fecha</h2>
          <p class="fs-5 fw-semibold mt-4">${item.fecha}</p>
        </div>
        <div class="contenedordelabarra2 my-4">
          <p class="barritadeseparacion2"></p>
        </div>
        <div class="text-center mt-3 col-xl-6"><button type="button" class="btn btn-outline-dark btn-lg w-50 text-center" >Cancelar</button></div>
        <div class="text-center mt-3 col-xl-6"><button type="button" class="btn btn-outline-dark btn-lg w-50 text-center" >Enviar</button></div>
        `
        contenedorturnos.innerHTML = cardturnos
        contenedorformulario.append (contenedorturnos);
    })
    
}





