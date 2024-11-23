
// Mostrar el formulario de edición al hacer clic en "editar"

document.querySelectorAll('.editar').forEach(button => {
    button.addEventListener('click', function() {
        const card = this.closest('.editable'); // Encuentra la tarjeta más cercana
        const editForm = card.querySelector('.editForm');
        editForm.style.display = 'block'; // Muestra el formulario de edición
    });
});


// Ocultar el formulario de edición al hacer clic en "Cancelar"
document.querySelectorAll('.cancelButton').forEach(button => {
    button.addEventListener('click', function() {
        const card = this.closest('.editable');
        const editForm = card.querySelector('.editForm');
        editForm.style.display = 'none'; // Oculta el formulario de edición
    });
});

// Guardar los cambios y actualizar el texto de la tarjeta
document.querySelectorAll('.saveButton').forEach(button => {
    button.addEventListener('click', function() {
        const card = this.closest('.editable'); // Encuentra la tarjeta más cercana
        const titleInput = card.querySelector('.tituloInput').value; // Obtiene el valor del título
        const descriptionInput = card.querySelector('.descripcionInput').value; // Obtiene el valor de la descripción

        // Actualiza el contenido de la tarjeta
        card.querySelector('.card-title').textContent = titleInput;
        card.querySelector('.card-description').textContent = descriptionInput;

        const editForm = card.querySelector('.editForm');
        editForm.style.display = 'none'; // Oculta el formulario de edición después de guardar
    });
});