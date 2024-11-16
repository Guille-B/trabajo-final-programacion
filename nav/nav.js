
// Función para cargar contenido en el div home
function mostrarContenido(ruta) {
    fetch(ruta)
        .then(res => {
            if (!res.ok) {
                throw new Error('la respuesta no fue exitosa');
            }
            return res.text();
        })
        .then(data => {
            document.getElementById('home').innerHTML = data;
        })
}

const btnLogin = document.getElementById("login")

btnLogin.addEventListener("click", mostrarForm)

function mostrarForm() {
    const oculto = document.querySelector('.inicio');
    oculto.classList.remove("oculto")
}








