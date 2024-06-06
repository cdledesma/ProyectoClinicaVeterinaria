class Propietario {
    constructor(id, nombre, apellido, direccion, telefono, email, pass, imagen, estreg = false, admin = false){
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
        this.telefono = telefono;
        this.email = email;
        this.pass = pass;
        this.imagen = imagen;
        this.mascotas = [];
        this.turnos = [];
        this.estreg = estreg;
        this.admin = admin 
      }
    agregarMascota(mascota) {
        this.mascotas.push(mascota);
        };
    agregarTurno(turno) {
            this.turnos.push(turno);
        };
}


class Mascota {
    constructor(id, nombre, especie, sexo, raza, peso, imagen) {
        this.id = id;
        this.nombre = nombre;
        this.especie = especie;
        this.sexo = sexo;
        this.raza = raza;
        this.peso = peso;
        this.imagen = imagen;
    }
}

class Veterinario {
    constructor(id, nombre, apellido, email, pass, telefono, imagen, especialidad, estado = false){
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.telefono = telefono;
        this.email = email;
        this.pass = pass;
        this.imagen = imagen;
        this.especialidad = especialidad;
        this.estado = estado
    }
}

class Turno{
    constructor(id, idprop, propietario, paciente, especie, mc, especialista, fecha, solic = false, estado){
        this.id = id;
        this.idprop = idprop;
        this.propietario = propietario;
        this.paciente = paciente;
        this.especie = especie;
        this.mc = mc;
        this.especialista = especialista;
        this.fecha = fecha;
        this.solic = solic;
        this.estado = estado;

    }
}

// let veterinarios = [];
// let turnos = [];
// let propietarios = [];

const veterinarios = JSON.parse(localStorage.getItem("veterinarios")) || [];
let turnos = JSON.parse(localStorage.getItem("turnos")) || [];
let propietarios = JSON.parse(localStorage.getItem("propietarios")) || [];


veterinarios.push(new Veterinario('98765432', 'Segura', 'Mayra', 'mayra.segura@example.com', 'password1', '555-1001', 'https://example.com/photos/mayra.jpg', 'Cirugía'));
veterinarios.push(new Veterinario('87654321', 'Gottero', 'Maria', 'maria.gottero@example.com', 'password2', '555-1002', 'https://example.com/photos/maria.jpg', 'Cardiología'));
veterinarios.push(new Veterinario('76543210', 'Elizalde', 'Walter', 'walter.elizalde@example.com', 'password3', '555-1003', 'https://example.com/photos/walter.jpg', 'Traumatología'));

// Crear 9 propietarios con 4 mascotas cada uno
// const nombres = ['Juan', 'Ana', 'Luis', 'Carlos', 'María', 'Pedro', 'Elena', 'Marta', 'Sofía'];
// const apellidos = ['Perez', 'Gomez', 'Martinez', 'Lopez', 'Rodriguez', 'Sanchez', 'Fernandez', 'Garcia', 'Ramirez'];

// for (let i = 0; i < 9; i++) {
//     let propietario = new Propietario(
//         `12345${i}678`,
//         nombres[i],
//         apellidos[i],
//         `Calle ${i + 1} #${i + 100}`,
//         `555-000${i}`,
//         `${nombres[i].toLowerCase()}.${apellidos[i].toLowerCase()}@example.com`,
//         `password${i + 1}`,
//         `https://example.com/photos/${nombres[i].toLowerCase()}.jpg`
//     );

//     // Crear 4 mascotas para cada propietario
//     for (let j = 0; j < 4; j++) {
//         let mascota = new Mascota(
//             i * 4 + j + 1,
//             `Mascota${i * 4 + j + 1}`,
//             'Perro',
//             j % 2 === 0 ? 'Macho' : 'Hembra',
//             `Raza${i * 4 + j + 1}`,
//             Math.round(Math.random() * 20 + 5),
//             `https://example.com/photos/mascota${i * 4 + j + 1}.jpg`
//         );
//         propietario.agregarMascota(mascota);

//         // Crear 3 turnos para cada mascota
//         for (let k = 0; k < 3; k++) {
//             let turno = new Turno(
//                 turnos.length + 1,
//                 propietario.id,
//                 `${propietario.nombre} ${propietario.apellido}`,
//                 mascota.nombre,
//                 mascota.especie,
//                 `Motivo ${k + 1}`,
//                 veterinarios[k % 3].especialidad,
//                 `2024-06-${10 + k + i} 10:00`,
//                 false,
//                 'Pendiente'
//             );
//             propietario.agregarTurno(turno);
//         }
//     }

//     propietarios.push(propietario);
// }

// Guardar en LocalStorage
// localStorage.setItem('propietarios', JSON.stringify(propietarios));
// localStorage.setItem('veterinarios', JSON.stringify(veterinarios));

// Verificar los datos guardados
// console.log('Propietarios:', JSON.parse(localStorage.getItem('propietarios')));
// console.log('Veterinarios:', JSON.parse(localStorage.getItem('veterinarios')));
// console.log('Turnos:', JSON.parse(localStorage.getItem('turnos')));

// ----------------------------------------------------
















let btnLogin = document.getElementById("btn-login")
const login = (event) => {
    event.preventDefault();
    let email = document.getElementById("email").value;
    let contraseña = document.getElementById("inputPassword").value;
    //  Validaciones min, espapcio, etc

    let propietarioValido = propietarios.find((item)=>{
        return item.email === email && item.pass === contraseña
       
    });
    if (propietarioValido){
        console.log("enviar a panel de prop");
        localStorage.setItem("user", JSON.stringify(email));
        alert(`Felicidades, iniciaste sesión correctamente!`);
        location.replace("/pages/panelUsuarios.html");
        actualizarNav();
        return        
    }

    let veterinarioValido = veterinarios.find((item)=>{
        return item.email === email && item.pass === contraseña
       
    });
    if (veterinarioValido){
        localStorage.setItem("user", JSON.stringify(email));  
        alert(`Felicidades, iniciaste sesión correctamente!`);

        location.replace("/pages/panelMedicos.html");
        actualizarNav();
        return
  }
  alert("Los Datos ingresados son Incorrectos")

}

let formLogin = document.getElementById("form-login").addEventListener("submit", login)
let uss = JSON.parse(localStorage.getItem("user"))
// let veterinarios = JSON.parse(localStorage.getItem("veterinarios")) || null
// let propietarios = JSON.parse(localStorage.setItem("propietarios")) || null
let usuarios = veterinarios.concat(propietarios)
let usuarioConectado = usuarios.find((item)=>{
    return item.email ===uss   
});

console.log(usuarioConectado);

let btnReg = document.getElementById("registrarse")
const actualizarNav = () => {
    let dropdown = document.getElementById("dropdown");
    let btnIniciar = document.getElementById("btn-iniciar");
    let enlacePanel = document.getElementById("enlace-panel");
    btnIniciar.innerText = "Iniciar Sesión";


    if (uss) {
        btnIniciar.innerText = `Bienvenid@  ${usuarioConectado.nombre}`;
        btnReg.classList = "d-none";
        dropdown.classList.remove("d-none");
        if (usuarioConectado && usuarioConectado.especialidad) {
            enlacePanel.href = "/pages/panelMedicos.html";
        } else if (usuarioConectado && !usuarioConectado.especialidad) {
            enlacePanel.href = "/pages/panelUsuarios.html";                                                      
            // Poner enlace de panel propietario
        }
    } else {
        btnIniciar.innerText = "Iniciar Sesión";
    }
}
let btnCerrar = document.getElementById("btn-cerrar")

const cerrarSe = ()=>{
    confirm(`${usuarioConectado.nombre}, estas seguro que quieres cerrar sesión?`)
    localStorage.setItem("user", JSON.stringify(email));
    location.replace("../index.html");
    actualizarNav();


}

actualizarNav();