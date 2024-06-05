function Carrousell(){
   const containerCarrousell = document.getElementById("containerCarrousell");

   const section = document.createElement("section");
   section.classList.add("container-fluid");
 
   section.innerHTML = ` 
    <div class="row">
        <div class="col-xl-12 col-md-12 col-sm-12">
        <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
    <div class="carousel-item active">
        <img src="/Assets/Images/pastor-aleman-siendo-examinado-veterinario - .jpg" class="d-block w-100" alt="...">
    </div>
     <div class="carousel-item">
       <img src="/Assets/Images/veterinario-cuidando-perro-mascota.jpg" class="d-block w-100" alt="...">
     </div>
     <div class="carousel-item">
       <img src="/Assets/Images/cerca-veterinario-cuidando-perro.jpg" class="d-block w-100" alt="...">
     </div>
   </div>
   <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
     <span class="carousel-control-prev-icon" aria-hidden="true"></span>
     <span class="visually-hidden">Previous</span>
   </button>
   <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
     <span class="carousel-control-next-icon" aria-hidden="true"></span>
     <span class="visually-hidden">Next</span>
   </button>
 </div>
</div>
</div>`
containerCarrousell.appendChild(section);
  }
  export { Carrousell };
