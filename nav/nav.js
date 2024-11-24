// Función para cargar contenido en el div home
function mostrarContenido(ruta) {
    fetch(ruta)
        .then(res => {
            if (!res.ok) {
                throw new Error('La respuesta no fue exitosa');
            }
            return res.text();
        })
        .then(data => {
            document.getElementById('home').innerHTML = data;

            // Crear un nuevo script y añadirlo al DOM según la ruta
            let scriptSrc;
            if (ruta.includes('catalogo')) {
                scriptSrc = './catalogo/catalogo.js';
            } else if (ruta.includes('nosotros')) {
                scriptSrc = './nosotros/nosotros.js';
            }
            else if (ruta.includes('login')){
                scriptSrc = './login/login.js';
            }

            if (scriptSrc) {
                const script = document.createElement('script');
                script.type= 'module';
                script.src = scriptSrc;
                script.onload = () => {
                    console.log('Script cargado y ejecutado');
                };
                document.body.appendChild(script); // Añade el script al final del body
            }
            
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

function mostrarBoton(){
    let boton = document.getElementById('cerrar');
    let btnLogin = document.getElementById('btnL');
    const datos =localStorage.getItem('usuario');
    if(datos){
        boton.classList.remove("oculto")
        btnLogin.classList.add('oculto');
    }
}
mostrarBoton();

const cerrar= document.getElementById("cerrar");
cerrar.addEventListener("click", cerrarSesion);

function cerrarSesion(){
    let btnCerrarSesion = document.getElementById('cerrar');
    let btnLogin = document.getElementById('btnL');

    localStorage.removeItem('usuario');
    
    btnCerrarSesion.classList.add("oculto");
    btnLogin.classList.remove('oculto');
    location.reload();
}