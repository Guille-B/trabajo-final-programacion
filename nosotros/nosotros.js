function cargarTexto() {
    const elementos = document.querySelectorAll('.editable');
    elementos.forEach(elemento => {
        const id = elemento.id; // Obtener el id del elemento
        const textoGuardado = localStorage.getItem(id); // Obtener el texto guardado en localStorage
        if (textoGuardado) {
            elemento.textContent = textoGuardado; // Si hay texto guardado, actualizar el contenido del elemento
        }
    });
}

// Función para editar el texto
function editarTexto(elemento) {
    const nuevoTexto = prompt("Edita el texto:", elemento.textContent); // Solicitar nuevo texto al usuario
    if (nuevoTexto !== null) { // Si el usuario no presiona "Cancelar"
        elemento.textContent = nuevoTexto; // Actualizar el contenido del elemento
        localStorage.setItem(elemento.id, nuevoTexto); // Guardar el nuevo texto en localStorage
    }
}

// Añadir evento de clic a cada elemento editable
document.querySelectorAll('.editable').forEach(elemento => {
    elemento.addEventListener('click', () => editarTexto(elemento)); // Al hacer clic, se llama a la función editarTexto
});

// Cargar el texto al iniciar la página
cargarTexto();