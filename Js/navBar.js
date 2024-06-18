const navB = () => {
    let contNavB = document.getElementById("navbar");
    contNavB.innerHTML = "";
    let contenedor = document.createElement("div");
    contenedor.classList = "container-fluid";

    contenedor.innerHTML = `
        <a class="navbar-brand" style="color:black;" href="#">Hospital Escuela de Veterinaria</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link btn btn-primary" aria-current="page" href="/index.html">Inicio</a>
            </li>
            <li class="nav-item">
              <a type="button" class="nav-link btn btn-primary col-12" data-bs-toggle="modal"
                data-bs-target="#exampleModal" id="btn-iniciar">
              </a>

              <!-- Modal -->
              <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h1 class="modal-title fs-5" id="exampleModalLabel">Login</h1>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">

                      <form id="form-login">
                        <div class="row g-3 align-items-center">
                          <div class="row">
                            <label for="email" class="col-form-label col-3">Email</label>
                            <input type="email" id="email" class="form-control w-50" placeholder="name@example.com">
                          </div>
                          <div class="row">
                            <label for="inputPassword" class="col-form-label col-3">Password</label>
                            <input type="password" id="inputPassword" class="form-control w-50"
                              aria-describedby="passwordHelpInline">
                          </div>
                        </div>
                        <div class="modal-footer">
                          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"
                            id="btn-cancelar">Cancelar</button>
                          <button type="submit" class="btn btn-primary" id="btn-login">Iniciar sesión</button>
                        </div>
                      </form>

                    </div>
                  </div>
                </div>
            </li>
            <li>
              <a href></a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle d-none btn btn-primary" id="dropdown" role="button"
                data-bs-toggle="dropdown" aria-expanded="false">
                Opciones
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#" id="enlace-panel">Ir al Panel de control</a></li>
                <li>
                  <hr class="dropdown-divider">
                </li>
                <li><a class="dropdown-item" id="btn-cerrar">Cerrar Sesión</a></li>
              </ul>
            </li>
            <li class="nav-item">
             
                  <a type="button" class="nav-link btn btn-primary col-12" data-bs-toggle="modal"
                data-bs-target="#registroturnosmodal11" id="registrarse">Registrarse
              </a>
            </li>
          </ul>
          <div class="modal fade" id="registroturnosmodal11" tabindex="-1" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div class="modal-dialog modal-xl">
              <div class="modal-content">
                <div class="modal-header">
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <div class="contenedorformulario p-5 my-5 rounded-5 shadow-lg" id="cformm">
                  <form class="row h-100 w-100">
<div class="col">
              <div class="col-xl-12 col-md-12 text-center text-primary-emphasis mb-5"><h3 class="tituloform">Datos del propietario</h3></div>
              <div class="my-3">
                <label for="exampleFormControlInput1" class="form-label ">Nombre </label>
                <input type="text" class="form-control border border-primary-subtle rounded-5" id="labelnombredueño" placeholder="Ingrese su nombre">
              </div>
              <div class="my-3">
              <label for="exampleFormControlInput1" class="form-label ">Apellido</label>
              <input type="text" class="form-control border border-primary-subtle rounded-5" id="labelapellidodueño" placeholder="Ingrese su Apellido">
            </div>
            <div class="my-3">
            <label for="exampleFormControlInput1" class="form-label ">Domicilio </label>
            <input type="text" class="form-control border border-primary-subtle rounded-5" id="labeldomiciliodueño" placeholder="Ingrese su direccion">
          </div>
              <div class="my-3">
                <label for="exampleFormControlInput1" class="form-label">Dni</label>
                <input type="text" class="form-control border border-primary-subtle rounded-5" id="labeldni" placeholder="Ingrese su dni">
              </div>
              <div class="my-3">
              <label for="exampleFormControlInput1" class="form-label">Telefono</label>
              <input type="text" class="form-control border border-primary-subtle rounded-5" id="labeltelefono" placeholder="Ingrese su telefono">
              </div>
              <div class="my-3">
                <label for="exampleFormControlInput1" class="form-label">Email</label>
                <input type="email" class="form-control border border-primary-subtle rounded-5" id="labelemail" placeholder="Ingrese su email">
              </div>
              <div class="my-3">
                <label for="exampleFormControlInput1" class="form-label">Contraseña</label>
                <input type="password" class="form-control border border-primary-subtle rounded-5" id="labelcontraseña" placeholder="Ingrese su email">
              </div>
              <div class="my-3">
                <label for="exampleFormControlInput1" class="form-label">Repetir contraseña</label>
                <input type="password" class="form-control border border-primary-subtle rounded-5" id="labelrepcontraseña" placeholder="Ingrese su email">
              </div>
              <div class="my-3">
                <label for="exampleFormControlInput1" class="form-label">Foto de Perfil</label>
                <input type="text" class="form-control border border-primary-subtle rounded-5" id="labelfoto" placeholder="ingrese url de foto">
              </div>
            </div>

            
              <div class="text-center">
                <button type="button" class="buttonguardarformulario1 btn fw-semibold w-50 rounded-5" onclick="registroPropietario(event)">Registrarse</button>
              </div>
</form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br> <br> <br>
      `;
    contNavB.appendChild(contenedor);

    const login = (event) => {
        event.preventDefault();
        let email = document.getElementById("email").value;
        let contraseña = document.getElementById("inputPassword").value;
        // Validaciones min, espacio, etc

        let propietarios = JSON.parse(localStorage.getItem("propietarios")) || [];
        let veterinarios = JSON.parse(localStorage.getItem("veterinarios")) || [];

        let propietarioValido = propietarios.find((item) => {
            return item.email === email && item.pass === contraseña;
        });

        if (propietarioValido) {
            console.log("enviar a panel de prop");
            localStorage.setItem("user", JSON.stringify(email));
            alert(`Felicidades, iniciaste sesión correctamente!`);
            location.replace("/pages/panelUsuarios.html");
            actualizarNav();
            return;
        }

        let veterinarioValido = veterinarios.find((item) => {
            return item.email === email && item.pass === contraseña;
        });

        if (veterinarioValido) {
            localStorage.setItem("user", JSON.stringify(email));
            alert(`Felicidades, iniciaste sesión correctamente!`);
            location.replace("/pages/panelMedicos.html");
            actualizarNav();
            return;
        }

        alert("Los Datos ingresados son Incorrectos");
    };

    let formLogin = document.getElementById("form-login").addEventListener("submit", login);

    let uss = JSON.parse(localStorage.getItem("user"));
    let veterinarios = JSON.parse(localStorage.getItem("veterinarios")) || [];
    let propietarios = JSON.parse(localStorage.getItem("propietarios")) || [];
    let usuarios = veterinarios.concat(propietarios);
    let usuarioConectado = usuarios.find((item) => {
        return item.email === uss;
    });

    // console.log(usuarioConectado);

    const actualizarNav = () => {
        let dropdown = document.getElementById("dropdown");
        let btnIniciar = document.getElementById("btn-iniciar");
        let enlacePanel = document.getElementById("enlace-panel");
        let btnReg = document.getElementById("registrarse");
        btnIniciar.innerText = "Iniciar Sesión";

        if (uss) {
            btnIniciar.innerText = `Bienvenid@  ${usuarioConectado.nombre}`;
            btnReg.classList = "d-none";
            dropdown.classList.remove("d-none");
            btnIniciar.removeAttribute("data-bs-toggle");
            btnIniciar.classList.remove("btn");
            if (usuarioConectado && usuarioConectado.especialidad) {
                enlacePanel.href = "/pages/panelMedicos.html";
            } else if (usuarioConectado && !usuarioConectado.especialidad) {
                enlacePanel.href = "/pages/panelUsuarios.html";
            }
        } else {
            btnIniciar.innerText = "Iniciar Sesión";
        }
    };

    const cerrarSe = () => {
        let conf = confirm(`${usuarioConectado.nombre}, estas seguro que quieres cerrar sesión?`);
        if (conf) {
            alert(`Sesión cerrada con éxito!`);
            localStorage.removeItem("user");
            location.replace("../index.html");
            actualizarNav();
        } else {
            alert(`Cierre de sesión cancelado`);
        }
    };

    let btnCerrar = document.getElementById("btn-cerrar").addEventListener("click", cerrarSe);

    actualizarNav();
    // const llamarmodal11 = ()=>{
    //     cargarformularioR();
    //     myModal11.show();
    //   }
    //   let btnReg = document.getElementById("registrarse").addEventListener("click", llamarmodal11);
    
};

export { navB };
