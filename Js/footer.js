function Footer() {
    const footer = document.getElementsByTagName("footer");
    const section = document.createElement("section");
    section.classList.add("container-fluid");
  
    section.innerHTML = `
        <article class="row" id="CuerpoFooter">
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
                <li><a href="./Pages/error404.html">Terminos y condiciones</a></li>
                <li><a href="./Pages/error404.html">Politica de privacidad</a></li>
                <li>
                  <a href="./Pages/error404.html">Politica de derecho de autor</a>
                </li>
                <li><a href="./Pages/error404.html">Descargar App Movil</a></li>
              </ul>
            </aside>
            <aside class="col-xl-4 col-sm-4 col-md-4">
              <p class="h5">Redes Sociales</p>
              <ul class="social-icons">
                <li>
                  <a href="https://www.facebook.com/?locale=es_ES" class="social-icons"><i class="fa fa-facebook"></i> Facebook</a>
                </li>
                <li>
                  <a href="https://x.com/?lang=es" class="social-icons"><i class="fa fa-twitter"></i> Twitter</a>
                </li>
                <li>
                  <a href="https://www.instagram.com/" class="social-icons"><i class="fa fa-instagram"></i> Instagram</a>
                </li>
                <li>
                  <a href="https://es.linkedin.com/?src=go-pa&trk=sem-ga_campid.18146679037_asid.140850334975_crid.694860685343_kw.linkedin_d.c_tid.kwd-148086543_n.g_mt.e_geo.9047063&mcid=6968657504633266178&cid=&gad_source=1&gclid=CjwKCAjw1K-zBhBIEiwAWeCOFxuW93R-7KcD9DucfjppOLs3BVpdj5OA0L44u9xlNM1n-_ja4tH7YxoCPYoQAvD_BwE&gclsrc=aw.ds" class="social-icons"><i class="fa fa-linkedin"></i> LinkedIn</a>
                </li>
              </ul>
            </aside>
          </article>
          <article class="row" id="copyrightFooter">
            <br/>
            <div id="contenedorFooter"><img src="/Assets/Images/footer.jpeg" alt="" id="imagenFooter"></div>
            <p class="h6 text-center">&copy; 2023. Todos los derechos reservados.</p>
            </article>
        `;
    footer[0].appendChild(section);
  }
  export { Footer };
  