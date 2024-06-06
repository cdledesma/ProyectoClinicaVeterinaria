contenedorTurnAP = document.getElementById("turnosAprobar")

const verTurnAp = () => {
    contenedorTurnAP.innerHTML = "";
    propietarios.turnos.map((item) => {
        if (item.solic === false  && item.especialista === usuarioConectado.especialidad) {
            
            let turno = document.createElement("div");
            turno.classList.add("col");

            let contenido = `
                <div class="card">
                    <div class="card-body d-flex justify-content-between align-items-center">
                        <span>Propietario: ${item.propietarioApellido} ${item.propietarioNombre} <br> MC: ${item.mc} <br> Especialidad: ${item.especialista} </span>
                        <div>
                            <button class="btn btn-success btn-sm" onclick="aprobarTurno(${item.id})">Aprobar</button>
                            <button class="btn btn-danger btn-sm" onclick="rechazarTurno(${item.id})">Rechazar</button>
                        </div>
                    </div>
                </div>    
            `;
            turno.innerHTML = contenido;
            contenedorTurnAP.append(turno);
        }
    });
}


// const aprobarTurno = (sp) => {
//     let i = pacientes.findIndex((item) => {
//   return item.sp == sp;
// });
//  pacientes[i].estadosol = !pacientes[i].estadosol;
//   localStorage.setItem("pacientes", JSON.stringify(pacientes));
//   verTurnAp();
// };

// const aprobarTurno = (sp)=>{
//     let aprob = pacientes.findIndex((item) => {
//     return item.sp == sp;
//     });
//     pacientes[aprob].estadosol = !usuarios[aprob].estadosol;
//     localStorage.setItem("pacientes", JSON.stringify(pacientes));
//     verTurnAp();
//     }


// const verTurnAp = () => {
//     contenedorTurnAP.innerHTML = ""
//     let turnosPendientes = pacientes.filter((item) => {
//         return item.estadosol === false;
//     });
// turnosPendientes.map((item)=>{
//     if (turnosPendientes.especialidad == veterinarioLogueado.especialidad) {
//     console.log(item); 
//     console.log(turnosPendientes);       
//     }
// })

// }




let colaEspera = document.getElementById("colaTurnos")

// const verCola = ()=>{
//     colaEspera.innerHTML = ""
//     pacientes.map((item)=>{
//         if (pacientes.estadoCons == false && pacientes.estadosol == true && pacientes.especialidad == veterinarioLogueado.especialidad){
//             let lista = colaEspera.innerHTML("div")
//             lista.classList = "col"
//             let contenido =`
//             <div class="card">
//                     <div
//                     class="card-body d-flex justify-content-between align-items-center"
//                     >
//                     <span>Propietario: ${item.apellido} ${item.nombre} MC: ${item.motivo} Especialidad: ${item.especialidad} </span>
//                     <button class="btn btn-danger btn-sm" onclick="aprobarTurno(${item.sp})">Atender</button>
//                     </div>
//             </div>    
//             `
//             pacientes.innerHTML = contenido;
//             contenedorTurnAP.append(lista);
//         }
//     })
// }
verTurnAp();
// verCola();   