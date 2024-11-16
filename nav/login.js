import { datos } from "./datos.js";


// Obtener el modal
const popup = document.getElementById("loginPopup");
if (!popup) {
    console.error("El modal no se encontró.");
}

// Obtener el botón que abre el modal
const btn = document.getElementById("btnL");
if (!btn) {
    console.error("El botón para abrir el modal no se encontró.");
}

// Obtener el elemento <span> que cierra el modal
const span = document.getElementsByClassName("close")[0];
if (!span) {
    console.error("El elemento para cerrar el modal no se encontró.");
}

// Asignar eventos solo si los elementos existen
if (btn) {
    btn.onclick = function () {
        popup.style.display = "block";
    }
}

if (span) {
    span.onclick = function () {
        popup.style.display = "none";
    }
}

// Cuando el usuario hace clic en cualquier parte fuera del modal, se cierra
window.onclick = function (event) {
    if (event.target === popup) {
        popup.style.display = "none";
    }
}

const btnIniciarSesion = document.getElementById("enviar");
if (btnIniciarSesion) {
    btnIniciarSesion.addEventListener("click", iniciarSesion);
} else {
    console.error("El botón de iniciar sesión no se encontró.");
}

function iniciarSesion() {
    const editar = card.querySelectorAll('.editar');
    const nombre_usuario = document.getElementById("username").value;
    const contra = document.getElementById("password").value;
    let mensaje = "Usuario y/o contraseña incorrectos";
    let usuarioEncontrado = false;

    datos.usuarios.forEach(usuario => {
        if (nombre_usuario === usuario.usuario) {
            usuarioEncontrado = true;
            if (contra === usuario.contraseña) {
                mensaje = `${nombre_usuario} ha iniciado sesión`;
                
                localStorage.setItem("usuario", nombre_usuario);
                localStorage.setItem("numero", usuario.nroUser );
                popup.style.display = "none"; 
                editar.classList.remove("oculto");
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
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";

}