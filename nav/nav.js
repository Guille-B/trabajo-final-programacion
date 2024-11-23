
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
            console.log(ruta)
            // Crear un nuevo script y añadirlo al DOM
            const script = document.createElement('script');
            script.src = './nosotros/nosotros.js'; // Cambia a la ruta de tu archivo JS
            script.onload = () => {
                console.log('Script cargado y ejecutado');
            };
            document.body.appendChild(script); // Añade el script al final del body
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

const btnLogin = document.getElementById("login")

btnLogin.addEventListener("click", mostrarForm)

function mostrarForm() {
    const oculto = document.querySelector('.inicio');
    oculto.classList.remove("oculto")
}








