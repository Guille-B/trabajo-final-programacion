import { datos } from "./datos.js";

const btnIniciarSesion = document.getElementById("iniciarSesion");
btnIniciarSesion.addEventListener("click", iniciarSesion);

function iniciarSesion() {
    let nombre_usuario = document.getElementById("nombre_usuario").value.trim();
    let contra = document.getElementById("contra").value.trim();

    if (!nombre_usuario || !contra) {
        alert("Por favor, ingresa tu nombre de usuario y contraseña.");
        return;
    }

    let mensaje = "Usuario y/o contraseña incorrectos";
    let usuarioEncontrado = false;
    datos.usuarios.forEach(usuario => {
        if (nombre_usuario === usuario.usuario) {
            usuarioEncontrado = true;
            if (contra === usuario.contraseña) {
                mensaje = `${nombre_usuario} ha iniciado sesión`;
                localStorage.setItem("usuario", nombre_usuario);
                window.location.href = "./index.html"; 
                return;
            }
        }
    });

    if (usuarioEncontrado) {
        alert(mensaje);
    } else {
        alert("El usuario no existe.");
    }

    document.getElementById("nombre_usuario").value = "";
    document.getElementById("contra").value = "";
}