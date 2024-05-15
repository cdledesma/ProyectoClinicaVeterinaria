function Footer() {
    const footer = document.getElementsByTagName("footer");
    const section = document.createElement("section");
    section.classList.add("container-fluid");
    section.innerHTML = `
        <article class="row" id="cuerpoFooter">
            <aside class="col-xl-3 col-sm-3 col-md-3">
              <p class="h5">XXXXX-XXXXX</p>
              <ul>
                <li>Direccion: Pueblo Paleta 1996</li>
                <li>telefono: + 34 726 731 724</li>
                <li>Email: geunnounn-7992@yopmail.com</li>
              </ul>
            </aside>
            <aside class="col-xl-3 col-sm-3 col-md-3">
              <p class="h5">Navegacion</p>
              <ul>
                <li><a href="">Quienes Somos</a></li>
                <li><a href="">Inicio</a></li>
                <li><a href="">Contactanos</a></li>
                <li><a href="">Nuestra Historia</a></li>
              </ul>
            </aside>
            <aside class="col-xl-3 col-sm-3 col-md-3">
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
            <aside class="col-xl-3 col-sm-3 col-md-3">
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
  