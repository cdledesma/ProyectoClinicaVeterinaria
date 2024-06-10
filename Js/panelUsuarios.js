let selectorPaciente = document.getElementById("seleccionar-mascota");
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
        } else {
            alert("Propietario no encontrado!");
        }
    } else {
        alert("Usuario no conectado!");
    }
}

let formMascota = document.getElementById("formulario-mascota").addEventListener("submit", registroMascota);


// const desplegarPaciente = () => {
//     if (usuarioConectado && usuarioConectado.mascotas) {
//         selectorPaciente.innerHTML = "";
//         usuarioConectado.mascotas.map((item, i) => {
//             let opcion = document.createElement("option");
//             opcion.value = i + 1;
//             opcion.textContent = item.nombre;
//             selectorPaciente.appendChild(opcion);
//         });
//     }
// };




// desplegarPaciente();

let btnTurno = document.getElementById("confirmar-turno");

const guardarTurno = (event) => {
    event.preventDefault();
    let id = new Date().getTime();
    let idprop = usuarioConectado.id;
    let propietario = `${usuarioConectado.apellido} ${usuarioConectado.nombre}`;
    let pacienteIndex = document.getElementById("seleccionar-mascota").value - 1;
    let paciente = usuarioConectado.mascotas[pacienteIndex].nombre;
    let especie = usuarioConectado.mascotas[pacienteIndex].especie;
    let mc = document.getElementById("motivo").value;
    let especialista = document.getElementById("select-especialista").value;
    let fecha = document.getElementById("select-fecha").value;

    console.log(id, idprop, propietario, paciente, especie, mc, especialista, fecha,

    );
    let nuevoTurno = new Turno(id, idprop, propietario, paciente, especie, mc, especialista, fecha);
    usuarioConectado.agregarTurno(nuevoTurno);
    const propietarioI = propietarios.findIndex((prop) => {
        prop.id === usuarioConectado.id
    })
    propietarios[propietarioI] = usuarioConectado;
    localStorage.setItem("propietarios", JSON.stringify(propietarios));

}


// document.getElementById("formulario-turno").addEventListener("submit", guardarTurno)


// cargarformturno();
cargaDatos();




















