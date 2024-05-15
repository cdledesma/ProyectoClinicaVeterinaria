function Publicidad() {
    const containerPublicidad = document.getElementById("containerPublicidad");
  
    const publicidad = document.createElement("div");
    publicidad.classList.add("Publicidad");
    publicidad.innerHTML = `
    <div id="containerPublicidad">
    <div class="tituloPublicidad">
      <h2>Únete a nuestra página</h2>
    </div>
    <div class="parrafoPublicidad">
      <p>
        Regístrate para obtener un 20% de descuento en tu primer compra
        y más beneficios exclusivos!
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