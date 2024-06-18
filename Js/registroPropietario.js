let contenedorformulario = document.getElementById("cformm")
// let myModal11 = new bootstrap.Modal(document.getElementById("registroturnosmodal11"));
// const llamarmodal11 = ()=>{
//   cargarformularioR();
//   myModal11.show();
// }


// const llamarmodal11 = (event) => {
//   event.preventDefault()
//   cargarformularioR()
//   myModal11.show()
// }
//Funcion cargar formulario


// const cargarformularioR = () => {
//   contenedorformulario.innerHTML = ""
//   let formulariotarjetaR = document.createElement("form");
//   formulariotarjetaR.classList = "row h-100 w-100";
//   let cardformularioregistroR = ` 
//     <div class="col">
//               <div class="col-xl-12 col-md-12 text-center text-primary-emphasis mb-5"><h3 class="tituloform">Datos del propietario</h3></div>
//               <div class="my-3">
//                 <label for="exampleFormControlInput1" class="form-label ">Nombre </label>
//                 <input type="text" class="form-control border border-primary-subtle rounded-5" id="labelnombredueño" placeholder="Ingrese su nombre">
//               </div>
//               <div class="my-3">
//               <label for="exampleFormControlInput1" class="form-label ">Apellido</label>
//               <input type="text" class="form-control border border-primary-subtle rounded-5" id="labelapellidodueño" placeholder="Ingrese su Apellido">
//             </div>
//             <div class="my-3">
//             <label for="exampleFormControlInput1" class="form-label ">Domicilio </label>
//             <input type="text" class="form-control border border-primary-subtle rounded-5" id="labeldomiciliodueño" placeholder="Ingrese su direccion">
//           </div>
//               <div class="my-3">
//                 <label for="exampleFormControlInput1" class="form-label">Dni</label>
//                 <input type="text" class="form-control border border-primary-subtle rounded-5" id="labeldni" placeholder="Ingrese su dni">
//               </div>
//               <div class="my-3">
//               <label for="exampleFormControlInput1" class="form-label">Telefono</label>
//               <input type="text" class="form-control border border-primary-subtle rounded-5" id="labeltelefono" placeholder="Ingrese su telefono">
//               </div>
//               <div class="my-3">
//                 <label for="exampleFormControlInput1" class="form-label">Email</label>
//                 <input type="email" class="form-control border border-primary-subtle rounded-5" id="labelemail" placeholder="Ingrese su email">
//               </div>
//               <div class="my-3">
//                 <label for="exampleFormControlInput1" class="form-label">Contraseña</label>
//                 <input type="password" class="form-control border border-primary-subtle rounded-5" id="labelcontraseña" placeholder="Ingrese su email">
//               </div>
//               <div class="my-3">
//                 <label for="exampleFormControlInput1" class="form-label">Repetir contraseña</label>
//                 <input type="password" class="form-control border border-primary-subtle rounded-5" id="labelrepcontraseña" placeholder="Ingrese su email">
//               </div>
//               <div class="my-3">
//                 <label for="exampleFormControlInput1" class="form-label">Foto de Perfil</label>
//                 <input type="text" class="form-control border border-primary-subtle rounded-5" id="labelfoto" placeholder="ingrese url de foto">
//               </div>
//             </div>

            
//               <div class="text-center">
//                 <button type="button" class="buttonguardarformulario1 btn fw-semibold w-50 rounded-5" onclick="registroPropietario(event)">Registrarse</button>
//               </div>
//      `
//   formulariotarjetaR.innerHTML = cardformularioregistroR
//   contenedorformulario.append(formulariotarjetaR);
// }
//Agregar turno
const registroPropietario = (event) => {
  // Detener submit
  event.preventDefault();

  // Capturar valores
  let nombre = document.getElementById("labelnombredueño").value;
  let apellido = document.getElementById("labelapellidodueño").value;
  let domicilio = document.getElementById("labeldomiciliodueño").value;
  let id = document.getElementById("labeldni").value;
  let telefono = document.getElementById("labeltelefono").value;
  let email = document.getElementById("labelemail").value;
  let contraseña = document.getElementById("labelcontraseña").value;
  let repcontraseña = document.getElementById("labelrepcontraseña").value;
  let imagen = document.getElementById("labelfoto").value;

  if (nombre.length > 0 && apellido.length > 0 && domicilio.length > 0 && id.length > 0 && telefono.length > 0 && email.length > 0 && contraseña.length > 0 && repcontraseña.length > 0) {
    if (email.includes("@")) {
      if (!isNaN(telefono) && !isNaN(id)) {
        if (contraseña === repcontraseña) {
          document.getElementById("labelnombredueño").value = "";
          document.getElementById("labelapellidodueño").value = "";
          document.getElementById("labeldomiciliodueño").value = "";
          document.getElementById("labeldni").value = "";
          document.getElementById("labeltelefono").value = "";
          document.getElementById("labelemail").value = "";
          document.getElementById("labelcontraseña").value = "";
          document.getElementById("labelrepcontraseña").value = "";
          document.getElementById("labelfoto").value = "";

          let nuevoPropietario = new Propietario(id, nombre, apellido, domicilio, telefono, email, contraseña, imagen);

          let propietarioExistente = propietarios.find((propietario) => {
            return propietario.id === nuevoPropietario.id
          });

          if (propietarioExistente) {
            Swal.fire({
              text: "El DNI ya se encuentra registrado",
              icon: `warning`,

            });
          } else {
            propietarios.push(nuevoPropietario);
            // localStorage.setItem("propietarios", JSON.stringify(""));
            localStorage.setItem("propietarios", JSON.stringify(propietarios));
            Swal.fire({
              text: "Te registraste correctamente",
              icon: `warning`,

            });

          };

let myModal11 = new bootstrap.Modal(document.getElementById("cformm"));

          myModal11.hide()
        } else {
          Swal.fire({
            text: "Las contraseñas no coinciden",
            icon: "warning",
          });
        }
      } else {
        Swal.fire({
          text: "Teléfono y DNI no pueden contener letras",
          icon: "warning",
        });
      }
    } else {
      Swal.fire({
        text: "El email debe contener un @",
        icon: "warning",
      });
    }
  } else {
    Swal.fire({
      text: "Complete todos los campos",
      icon: "warning",
    });
  }
};

// let btnReg = document.getElementById("registrarse").addEventListener("click", llamarmodal11);
