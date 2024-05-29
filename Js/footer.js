function Footer() {
    const footer = document.getElementsByTagName("footer");
    const section = document.createElement("section");
    section.classList.add("container-fluid");
  
    section.innerHTML = `
        <article class="row" id="cuerpoFooter">
            <aside class="col-xl-4 col-sm-4 col-md-4">
              <p class="h5">Navegacion</p>
              <ul>
                <li><a href="">Inicio</a></li>
                <li><a href="">Login</a></li>
                <li><a href="">Contactanos</a></li>
                <li><a href="">Acerca de Nosotros</a></li>
              </ul>
            </aside>
            <aside class="col-xl-4 col-sm-4 col-md-4">
              <p class="h5">Legal</p>
              <ul>
                <li><a href="./page/error404.html">Terminos y condiciones</a></li>
                <li><a href="./page/error404.html">Politica de privacidad</a></li>
                <li>
                  <a href="./page/error404.html">Politica de derecho de autor</a>
                </li>
                <li><a href="./page/error404.html">Descargar App Movil</a></li>
              </ul>
            </aside>
            <aside class="col-xl-4 col-sm-4 col-md-4">
              <p class="h5">Redes Sociales</p>
              <ul>
                <li>
                  <a href="./page/error404.html"><i class="bi bi-facebook"></i> Facebook</a>
                </li>
                <li>
                  <a href="./page/error404.html"><i class="bi bi-twitter"></i> Twitter</a>
                </li>
                <li>
                  <a href="./page/error404.html"><i class="bi bi-instagram"></i> Instagram</a>
                </li>
                <li>
                  <a href="./page/error404.html"><i class="bi bi-linkedin"></i> LinkedIn</a>
                </li>
              </ul>
            </aside>
          </article>
          <article class="row" id="copyrightFooter">
            <p class="h6 text-center">&copy; 2023. Todos los derechos reservados.</p>
          </article>
        `;
    footer[0].appendChild(section);
  }
  export { Footer };
  