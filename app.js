import { Carrousell } from "./Js/carrousell.js";
import { Publicidad } from "./Js/publicidad.js";
import { CardVeterinario } from "./Js/cardVeterinario.js";
import { Footer } from "./Js/footer.js";
import { navB } from "./Js/navBar.js";

// window.onload = function () {
//   Carrousell();
//   Publicidad();
//   CardVeterinario();
//   Footer();
// };

// import { navB } from "./Js/navBar.js";

window.onload = function () {
  navB();

  const path = window.location.pathname;

  if (path === '/index.html' ) {
    Carrousell();
    Publicidad();
    CardVeterinario();
    Footer();
  } else if (path === '/pages/panelMedicos.html') {
    // Llama a las funciones específicas para la página about
    Footer();
  } 
  // else if (path === '/contact.html') {
  //   // Llama a las funciones específicas para la página contact
  //   Footer();
  // }
};
