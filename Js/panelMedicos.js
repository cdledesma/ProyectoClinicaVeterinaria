let secDatos = document.getElementById("cont-dat");
propietarios = JSON.parse(localStorage.getItem("propietarios")) || [];

  const cargaDatos = () => {
    secDatos.innerHTML = "";
    let cont = document.createElement("div");
    cont.classList = "card informacion usuario w-100 h-50";
    let conte = `<div class="contenedor-imagen-perfil">
           <img
             src="${usuarioConectado.imagen}"
             class="card-img-top img-perfil" alt="foto de perfil de ${usuarioConectado.nombre}" />
         </div>
         <div class="card-body">
           <h5 class="card-title">M.V. ${usuarioConectado.apellido} ${usuarioConectado.nombre}</h5>
           <p class="card-text">
             Especialidad: ${usuarioConectado.especialidad}
           </p>
         </div>`;
    cont.innerHTML = conte;
    secDatos.append(cont);
  };
contenedorTurnAP = document.getElementById("turnosAprobar")

const verTurnAp = () => {
    contenedorTurnAP.innerHTML = "";
    let turnosPendientesEncontrados = false; 

    propietarios.forEach((propietario) => {
        propietario.turnos.forEach((turno) => {
            if (!turno.solic && turno.especialista === usuarioConectado.especialidad) {
                let tarjetaTurno = document.createElement("div");
                tarjetaTurno.classList.add("card");

                let contenido = `
                    <div class="card-body d-flex justify-content-between align-items-center row">
                        <span>Propietario: ${turno.propietario}  </span>
                        <span>MC: ${turno.mc} </span>
                        <span>Especialidad: ${turno.especialista}</span>
                        <span>Fecha: ${turno.fecha} ${propietario.id}  ${turno.id}</span>
                        <div>
                            <button class="btn btn-success btn-sm" onclick="aprobarTurno(${turno.id}, ${propietario.id})">Aprobar</button>
                            <button class="btn btn-danger btn-sm" onclick="rechazarTurno(${turno.id}${turno.idprop})">Rechazar</button>
                        </div>
                    </div>
                `;
                tarjetaTurno.innerHTML = contenido;
                contenedorTurnAP.appendChild(tarjetaTurno);

                turnosPendientesEncontrados = true;
            }
        });
    });

    if (!turnosPendientesEncontrados) {
        let mensaje = document.createElement("div");
        mensaje.classList.add("alert", "alert-info");
        mensaje.innerText = "No hay turnos pendientes de aprobación.";
        contenedorTurnAP.appendChild(mensaje);
    }
};

const aprobarTurno = (id, idprop) => {
    propietarios = JSON.parse(localStorage.getItem("propietarios")) || [];

    let i = propietarios.findIndex((item) => {
  return item.id == idprop;
  
});
console.log(i);
let p = propietarios[i].turnos.findIndex((pi)=>{
    return pi.id == id;
});
propietarios[i].turnos[p].solic = true;

//  propietarios[i].estadosol = !propietarios[i].estadosol;
  localStorage.setItem("propietarios", JSON.stringify(propietarios));
  verTurnAp();
};








let colaEspera = document.getElementById("colaTurnos")
const colaPaciente = () => {
    colaEspera.innerHTML = "";
    let colaPendiente = false; 

    propietarios.forEach((propietario) => {
        propietario.turnos.forEach((turno) => {
            if (turno.solic && turno.especialista === usuarioConectado.especialidad && !turno.estado) {
                let tarjetaCola = document.createElement("div");
                tarjetaCola.classList.add("card");

                let contenido = `
                    <div class="card-body d-flex justify-content-between align-items-center row">
                        <a href="">${turno.paciente}</a>
                    </div>`;
                tarjetaCola.innerHTML = contenido;
                colaEspera.appendChild(tarjetaCola);

                colaPendiente = true;
            }
        });
    });

    if (!colaPendiente) {
        let mensaje = document.createElement("div");
        mensaje.classList.add("alert", "alert-info");
        mensaje.innerText = "No hay turnos pendientes .";
        colaEspera.appendChild(mensaje);
    }
};

let listaAtendidos = document.getElementById("atendidos")

const atendidos = () => {
    listaAtendidos.innerHTML = "";
    let col = false; 

    propietarios.forEach((propietario) => {
        propietario.turnos.forEach((turno) => {
            if (turno.solic && turno.especialista === usuarioConectado.especialidad && turno.estado) {
                let tarjetaCola = document.createElement("div");
                tarjetaCola.classList.add("card");

                let contenido = `
                    <div class="card-body d-flex justify-content-between align-items-center row">
                        <a href="">${turno.paciente}</a>
                    </div>`;
                tarjetaCola.innerHTML = contenido;
                listaAtendidos.appendChild(tarjetaCola);

                col = true;
            }
        });
    });

    if (!col) {
        let mensaje = document.createElement("div");
        mensaje.classList.add("alert", "alert-info");
        mensaje.innerText = "No se atendio a ningun paciente .";
        listaAtendidos.appendChild(mensaje);
    }
};
verTurnAp();
cargaDatos();
colaPaciente();
atendidos();
// verCola();   