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
      <button type="button" class="buttonPublicidad">
        Registrarse
      </button>
    </div>
    `;
  
    containerPublicidad.appendChild(publicidad);
  }
  
  export { Publicidad };