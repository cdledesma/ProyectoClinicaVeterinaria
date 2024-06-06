let selectorPaciente = document.getElementById("seleccionar-mascota");

let formMascota = document.getElementById("formulario-mascota").addEventListener("submit", registroMascota);
const registroMascota = (e)=>{
  event.preventDefault()
  let nombre = document.getElementById(nombre-mas).value;
  let especie = document.getElementById(especie-mas).value;
  let sexo = document.getElementById(sexo-mas).value;
  let raza = document.getElementById(raza-mas).value;
  let peso = document.getElementById(peso-mas).value;
  let imagen = document.getElementById(imagen-mas).value;
  let id = new Date().getTime();

  let nuevaMascota = new Mascota(id, nombre, especie, sexo, raza, peso,imagen);
  console.log(nuevaMascota);

}

const desplegarPaciente = () => {
    if (usuarioConectado && usuarioConectado.mascotas) {
        selectorPaciente.innerHTML = "";
        usuarioConectado.mascotas.map((item, i) => {
            let opcion = document.createElement("option");
            opcion.value = i + 1;
            opcion.textContent = item.nombre; 
            selectorPaciente.appendChild(opcion);
        });
    }
};



console.log(usuarioConectado);

desplegarPaciente();

let btnTurno = document.getElementById("confirmar-turno");

const guardarTurno = ()=>{
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
  
console.log( id, idprop, propietario, paciente, especie, mc, especialista, fecha, 

);
let nuevoTurno = new Turno (id, idprop, propietario, paciente, especie, mc, especialista, fecha);
usuarioConectado.agregarTurno(nuevoTurno);
const propietarioI = propietarios.findIndex((prop) => {
prop.id === usuarioConectado.id
})
propietarios[propietarioI] = usuarioConectado;
localStorage.setItem("propietarios", JSON.stringify(propietarios));

}


document.getElementById("formulario-turno").addEventListener("submit", guardarTurno)


cargarformturno();