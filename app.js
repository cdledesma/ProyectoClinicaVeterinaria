
const listarVeterinarios = () => {
  let veterinarios = JSON.parse(localStorage.getItem("veterinarios")) || [];
  contenedor.innerHTML = "";
  veterinarios.forEach((item) => {
    //PRIMER NODO
    let columna = document.createElement("div");
    columna.classList = "col mb-3";

    //SEGUNDO NODO
    let tarjeta = `<div class="card">
    
    <img src="${item.imagen}" alt=" foto del MV ${
      item.apellido
    }">
    
  <h4>
  <p href="./pages/producto.html?id=${item.id}">
    ${item.nombre}
  </p>
  </h4>
  <h4 class="card-title">
  <p class="nav-link" href="./pages/producto.html?id=${item.id}">
    ${item.especialidad}
  </p>
  </h4>
  <a href="#">Pedir Turno</a>
</div>`;

    columna.innerHTML = tarjeta;
    contenedor.appendChild(columna);
  });
};

function Carrousell() {
  const containerCarrousell = document.getElementById("containerCarrousell");

  const section = document.createElement("section");
  section.classList.add("container-fluid");

  section.innerHTML = ` 
      <div class="row">
          <div class="col-xl-12 col-md-12 col-sm-12">
              <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
                  <div class="carousel-inner">
                      <div class="carousel-item active">
                          <img src="/Assets/Images/pastor-aleman-siendo-examinado-veterinario - .jpg" class="d-block w-100" alt="...">
                      </div>
                      <div class="carousel-item">
                          <img src="/Assets/Images/veterinario-cuidando-perro-mascota.jpg" class="d-block w-100" alt="...">
                      </div>
                      <div class="carousel-item">
                          <img src="/Assets/Images/veterinario-examinando-gato.jpg" class="d-block w-100" alt="...">
                      </div>
                  </div>
                  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Previous</span>
                  </button>
                  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Next</span>
                  </button>
              </div>
          </div>
      </div>
  `;

  containerCarrousell.appendChild(section);
}
function Publicidad() {
  const containerPublicidad = document.getElementById("containerPublicidad");

  const publicidad = document.createElement("div");
  publicidad.classList.add("Publicidad");
  publicidad.innerHTML = `
  <div id="containerPublicidad">
  <div class="tituloPublicidad">
    <h2 class="text-center">Se parte de nuestra Clinica</h2>
  </div>
  <div class="parrafoPublicidad">
    <p>
      Accede a una atencion mas practica y personalizada registrandote como cliente. Contamos con más de 10 especialidades y Guardia de Emergencias las 24hs.  
    </p>
  </div>
  <div class="d-flex justify-content-center">
    <button class="btn btn-outline-primary m-2" class="buttonPublicidad">
      Registrarse
    </button>
  </div>
  `;

  containerPublicidad.appendChild(publicidad);
}
Publicidad();
Carrousell();
listarVeterinarios();