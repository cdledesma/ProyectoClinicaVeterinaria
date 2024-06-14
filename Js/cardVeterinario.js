function CardVeterinario() {

    const listarVeterinarios = () => {
    let veterinarios = JSON.parse(localStorage.getItem("veterinarios")) || [];
    contenedor.innerHTML = "";
    veterinarios.forEach((item) => {
      //PRIMER NODO
      let columna = document.createElement("div");
      columna.classList = "col mb-3";
  
      //SEGUNDO NODO
      let tarjeta = `<div class="card" style="width: 18rem;">
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>`;
  
      columna.innerHTML = tarjeta;
      contenedor.appendChild(columna);
    });
  };
  listarVeterinarios();
}
export { CardVeterinario };
