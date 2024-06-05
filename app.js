import { Carrousell } from "./Js/Carrousell.js";
import { Publicidad } from "./Js/publicidad.js";
import { Footer } from "./Js/footer.js";

window.onload = function () {
  Carrousell();
  Publicidad();
  Footer();
};

//Clase Veteninario con su constructor

class Veterinario {
  constructor(
    id,
    nombre,
    apellido,
    email,
    pass,
    telefono,
    imagen,
    especialidad,
    estado = false
  ) {
    this.id = id;
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.pass = pass;
    this.telefono = telefono;
    this.imagen = imagen;
    this.especialidad = especialidad;
    this.estado = estado;
  }
}
// ------------------------------------------------------------------------------------------

//Variable que trae los prod de localS

const veterinario = JSON.parse(localStorage.getItem("veterinario")) || [];
// ------------------------------------------------------------------------------------------

//Funcion inicializacion

const inicializacion = () => {
  const data = [
    {
      id: 9,
      nombre: "Daniela",
      Apellido: "Fernandez",
      email: "danielafernandez@hotmail.com",
      pass: "12345678",
      telefono: "3815018678",
      image: "",
      especialidad: "Imagenes",
    },
    {
      id: 10,
      nombre: "Jose Antonio",
      Apellido: "Gomez",
      email: "joseagoez@gmail.com",
      pass: "12345678",
      telefono: "3814567655",
      image: "",
      especialidad: "Cirujano",
    },
    {
      id: 11,
      nombre: "Raul",
      Apellido: "Perez Hernandez",
      email: "raulperez@gmail.com",
      pass: "12345678",
      telefono: "3816789065",
      image: "",
      especialidad: "Cardiologia",
    },
    {
      id: 12,
      nombre: "Mariana",
      Apellido: "Jimenez de Gonzalez",
      email: "marianajgonzalez@gmail.com",
      pass: "12345678",
      telefono: "3815671234",
      image: "",
      especialidad: "Oftalmologia",
    },
  ];

  // data.forEach((item) => {
  //   let prod = new Producto(
  //     item.id,
  //     item.title,
  //     item.description,
  //     item.category,
  //     item.price,
  //     item.image
  //   );

  //   productos.push(prod);
  // });

  // localStorage.setItem("productos", JSON.stringify(productos));

  localStorage.setItem("veterinario", JSON.stringify(data));
};
// ------------------------------------------------------------------------------------------

//CONTENEDOR: donde iran las tarjetas en HTML (index.html)
let contenedor = document.querySelector("#contenedor");

/*
PRIMER NODO
<div class="col mb-3">
    SEGUNDO NODO
  <div class="card">
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>


*/

// Funcion listarVeterinarios - C READ UD

const listarVeterinarios = () => {
  contenedor.innerHTML = "";
  veterinario.forEach((item) => {
    //PRIMER NODO
    let columna = document.createElement("div");
    columna.classList = "col mb-3";

    //SEGUNDO NODO
    let tarjeta = `<div class="card">
    
    <img src="${item.imagen}" alt="${
      item.title
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
//------------------------------------------------------------------

// // Funcion marcarFavorito
// //!comentar

// const marcarFavorito = (id) => {
//   //Obtenemos con el id la posicion
//   let index = productos.findIndex((item) => {
//     return item.id == id;
//   });
//   //cambiamos el valor de favorito
//   productos[index].favorito = !productos[index].favorito;
//   //actualizamos localStorage
//   localStorage.setItem("productos", JSON.stringify(productos));
//   //Listamos los producos de nuevo
//   listarProductos();
// };
// //--------------------------------------------------------------

if (veterinario.length == 0) {
  inicializacion();
}

listarVeterinarios();