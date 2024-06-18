function CardVeterinario() {

    const listarVeterinarios = () => {
      let contenedor = document.getElementById("contenedorHijoCards")
    let veterinarios = JSON.parse(localStorage.getItem("veterinarios")) || [];
    contenedor.innerHTML = "";
    
    veterinarios.forEach((item) => {
      //PRIMER NODO
      let columna = document.createElement("div");
      columna.classList = "col mb-3";
  
      //SEGUNDO NODO
      let tarjeta = `<div class="card" style="width: 18rem;">
      <img src="${item.imagen}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${item.apellido} ${item.nombre}</h5>
        <p class="card-text">${item.especialidad}</p>
        <a href="./pages/panelUsuarios.html" class="btn btn-primary">Solicitar Turno</a>
      </div>
    </div>`;
  
      columna.innerHTML = tarjeta;
      contenedor.appendChild(columna);
    });
  };
  listarVeterinarios();
}
export { CardVeterinario };
