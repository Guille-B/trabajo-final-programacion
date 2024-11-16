import { datos } from "./datos.js";


// Obtener el modal
var popup = document.getElementById("loginPopup");

// Obtener el botón que abre el modal
var btn = document.getElementById("btnL");

// Obtener el elemento <span> que cierra el modal
var span = document.getElementsByClassName("close")[0];

// Cuando el usuario hace clic en el botón, se abre el modal
btn.onclick = function () {
    popup.style.display = "block";
}

// Cuando el usuario hace clic en <span> (x), se cierra el modal
span.onclick = function () {
    popup.classList.remove("oculto");
}

// Cuando el usuario hace clic en cualquier parte fuera del modal, se cierra
window.onclick = function (event) {
    if (event.target == popup) {
        popup.style.display = "none";
    }
}




const btnIniciarSesion = document.getElementById("enviar")
btnIniciarSesion.addEventListener("click", iniciarSesion);

function iniciarSesion() {
    let nombre_usuario = document.getElementById("username").value;
    let contra = document.getElementById("password").value;
    let mensaje = "Usuario y/o contraseña incorrectos";
    let usuarioEncontrado = false;

    datos.usuarios.forEach(usuario => {
        if (nombre_usuario === usuario.usuario) {
            usuarioEncontrado = true;
            if (contra === usuario.contraseña) {
                mensaje = nombre_usuario + " ha iniciado sesión";
                localStorage.setItem("usuario", nombre_usuario);
                localStorage.setItem("numero",usuario.nroUser);
                
                return;
            }
        }
    });

    if (usuarioEncontrado) {
        alert(mensaje);
    } else {
        alert("El usuario no existe.");
    }

    // Limpiar campos
    document.getElementById("nombre_usuario").value = "";
    document.getElementById("contra").value = "";
    console.log("Usuario ingresado:", nombre_usuario);
    console.log("Contraseña ingresada:", contra);
    console.log("Usuarios disponibles:", datos.usuarios)
}

