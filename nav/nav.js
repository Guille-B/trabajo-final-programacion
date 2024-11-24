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