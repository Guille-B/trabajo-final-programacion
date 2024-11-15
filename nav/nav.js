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