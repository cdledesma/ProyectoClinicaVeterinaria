function Publicidad() {
    const containerPublicidad = document.getElementById("containerPublicidad");
    const publicidad = document.createElement("div");
    publicidad.classList.add("Publicidad");
    publicidad.innerHTML = `
    <div class="wrap-texto">
        <h3>Únete a nuestra Clinica</h3>
        <p>Accede a una atencion personalizada registrandote como cliente. Contamos con más de 10 especialidades y Guardia de Emergencias las 24hs.</p>
        <button class="btn btn-outline-primary">Registrate</button>
      </div>
    `;
    containerPublicidad.appendChild(publicidad);
  }
  
  export { Publicidad };