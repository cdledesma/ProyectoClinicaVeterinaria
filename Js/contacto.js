//Reclamos

class reclamo {
    constructor (nombreyapellido, email, mensaje, id) {
        this.nombreyapellido = nombreyapellido
        this.email = email
        this.mensaje = mensaje
        this.id = id
    }
}

let reclamos = JSON.parse (localStorage.getItem("reclamos")) || []



let main = document.getElementById ("maincontacto")

let contenedorcontacto = document.getElementById ("contenedorcontacto");

//MODALES 


const myModal1 = new bootstrap.Modal(document.getElementById("modalproducto"));

//Llamar modales

const llamarmodalcontacto = (event) => {
    event.preventDefault ()
    imprimirformcontacto ()
    myModal1.show ()
}

//Imprimir Card

const imprimircarddecontacto = () => {
    main.innerHTML = ""
    let divcontenedor = document.createElement ("div")
    let carddecontacto = `
        <article>
            <div class="row">
                <div class="col-xl-12 d-flex justify-content-center">
                    <div>
                        <img class="rounded-5 my-5 imagenlogocontacto" width="500px" height="400px" 
                        src="/Assets/Logo/Logo Veterinaria.png" alt="">
                    </div>
                </div>
            </div>
        </article>
        <article>
            <div class="row my-5">
                <div class="col-xl-12 d-flex align-items-center justify-content-center text-center fs-5" >
                    <h2 class="w-50 fs-1 fw-bold titulocontacto rounded-5 p-4 shadow-lg">
                        Somos [Nombre veterinaria]
                    </h2>
                </div>
            </div>
        </article>

        <article>
              <div class="row my-5">
                  <div class="col-xl-12 d-flex align-items-center justify-content-center text-center fs-5" >
                      <p class="w-75 fs-4 parrafotextocontacto rounded-5 p-4 shadow-lg">Nos dedicamos a brindar el mejor cuidado y atención a tus mascotas. Nuestra clínica ofrece servicios de alta calidad en medicina preventiva, diagnóstico y tratamiento, asegurando el bienestar y la felicidad de tus compañeros peludos. Contamos con un equipo de profesionales comprometidos y apasionados, equipados con tecnología de vanguardia para atender cualquier necesidad de salud de tus animales.
                      </p>          
                  </div>
              </div>
              <div class="row my-5">
                <div class="col-xl-12 d-flex align-items-center justify-content-center text-center fs-5" >
                    <p class="w-75 fs-4 parrafotextocontacto rounded-5 p-4 shadow-lg">Entendemos que tus mascotas son parte de tu familia, y por eso trabajamos con cariño y dedicación para ofrecerles un ambiente seguro y acogedor. Desde consultas generales hasta cirugías especializadas, nuestro objetivo es garantizar que cada visita sea una experiencia positiva tanto para ti como para tus queridos amigos de cuatro patas
                    </p>          
                </div>
            </div>
        </article>

        <article>        
            <div class="row text-center contenedorbotonescard p-3 my-5">
                <div class="col-xl-12 col-md-12">
                    <button type="button" class="buttoncontactanos btn fw-semibold fs-4 w-75 rounded-5"onclick = "llamarmodalcontacto (event)">¡Contactanos!</button>
                </div>
            </div>
        </article>
    `
    divcontenedor.innerHTML = carddecontacto;
    main.append (divcontenedor);
}

imprimircarddecontacto ()


//Funcion agregar reclamos

const agregarreclamos = (event) => {
    event.preventDefault ()
    let nombreyapellido = document.getElementById ("contactonombre").value
    let email = document.getElementById ("contactoemail").value
    let mensaje = document.getElementById ("contactomensaje").value
    if (nombreyapellido.length >=5 && email.length >=5 && mensaje.length >=5) {
        if ((email.match(/([a-z]\w+@[a-z]+\.[a-z]{2,5})/)) ) {
            reclamos.push (new reclamo (nombreyapellido.toUpperCase(), email.toUpperCase(), mensaje.toUpperCase(),id=new Date().getTime()))
            localStorage.setItem ("reclamos",JSON.stringify (reclamos));
            document.getElementById ("contactonombre").value = ""
            document.getElementById ("contactoemail").value = ""
            document.getElementById ("contactomensaje").value = ""
            myModal1.hide ()
        }else {
            Swal.fire ({
                text: "El email debe contener un @",
                icon: 'warning'
            })
        }
    } else {
        Swal.fire ({
            text: "Completar todos los campos",
            icon: 'warning'
          })
    }
} 

//Imprimir formulario

const imprimirformcontacto = () => {
    contenedorcontacto.innerHTML = ""
    let contenedorformulariocontacto = document.createElement ("div")
    let formulariocontacto = `
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label my-3 fw-semibold fs-5">Nombre y apellido</label>
                    <input type="nombre" class="form-control rounded-5 bg-body-secondary border border-secondary border-2" id="contactonombre" placeholder="Ingrese su nombre">
                  </div>
                  <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label my-3 fw-semibold fs-5">Email</label>
                    <input type="email" class="form-control rounded-5 bg-body-secondary border border-secondary border-2" id="contactoemail" placeholder="Ingrese su Email">
                  </div>
                  <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label my-3 fw-semibold fs-5">Envienos un mensaje</label>
                    <textarea class="form-control rounded-5 bg-body-secondary border border-secondary border-2" id="contactomensaje" rows="3"></textarea>
                    
                  </div>
                  <div class="text-center">
                    <button type="button" class="buttonenviarreclamo btn fw-semibold w-50 rounded-5 mt-5" onclick="agregarreclamos (event)">Enviar</button>
                  </div>
    `
    contenedorformulariocontacto.innerHTML = formulariocontacto
    contenedorcontacto.append (contenedorformulariocontacto)
}
 

