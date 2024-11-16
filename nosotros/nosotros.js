/*function cambiatexto() {
    const editable = document.querySelectorAll('.editable');

    editable.forEach(element => {
        const editarButton = document.createElement('button');
        editarButton.textContent = 'Editar';
        editarButton.classList.add('editar'); // Añadir clase para el botón
        element.parentElement.appendChild(editarButton); // Añadir el botón al final del elemento

        editarButton.addEventListener('click', () => mostrarForm(element));
    });

    function mostrarForm(element) {
        const currentText = element.textContent;
        const input = document.createElement('input');
        input.value = currentText;

        const guardarButton = document.createElement('button');
        guardarButton.textContent = 'Guardar';

        element.parentElement.appendChild(input);
        element.parentElement.appendChild(guardarButton);

        guardarButton.addEventListener('click', () => {
            const newText = input.value;
            element.textContent = newText;

            // Guardar en localStorage
            localStorage.setItem(element.id, newText); // Usar el id del elemento como clave

            // Limpiar el formulario
            input.remove();
            guardarButton.remove();
        });
    }
}

// Cargar los datos desde localStorage al cargar la página
function cargarDatos() {
    const editable = document.querySelectorAll('.editable');
    editable.forEach(element => {
        const storedText = localStorage.getItem(element.id);
        if (storedText) {
            element.textContent = storedText; // Actualizar el contenido con lo que hay en localStorage
        }
    });
}

// Inicializar el comportamiento
cambiatexto();
cargarDatos();*/

/*document.addEventListener('DOMContentLoaded', () => {
    const editButtons = document.querySelectorAll('.editar');
    const editForm = document.getElementById('editForm');
    const tituloInput = document.getElementById('tituloInput');
    const descripcionInput = document.getElementById('descripcionInput');
    const saveButton = document.getElementById('saveButton');
    const cancelButton = document.getElementById('cancelButton');
    
    let currentElement = null;

    editButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            currentElement = event.target.closest('.editable');
            const titulo = currentElement.querySelector('#tituloDesc');
            const descripcion = currentElement.querySelector('#descripcion');

            // Rellenar el formulario con los valores actuales
            tituloInput.value = titulo.innerText;
            descripcionInput.value = descripcion.innerText;

            // Mostrar el formulario
            editForm.style.display = 'block';
        });
    });

    saveButton.addEventListener('click', () => {
        if (currentElement) {
            const titulo = currentElement.querySelector('#tituloDesc');
            const descripcion = currentElement.querySelector('#descripcion');

            // Actualizar el contenido
            titulo.innerText = tituloInput.value;
            descripcion.innerText = descripcionInput.value;

            // Ocultar el formulario
            editForm.style.display = 'none';
        }
    });

    cancelButton.addEventListener('click', () => {
        // Ocultar el formulario
        editForm.style.display = 'none';
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const editButtons = document.querySelectorAll('.editar');

    editButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const currentElement = event.target.closest('.editable');
            const editForm = currentElement.querySelector('.editForm'); // Asumiendo que cada tarjeta tiene su propio formulario
            const tituloInput = editForm.querySelector('.tituloInput');
            const descripcionInput = editForm.querySelector('.descripcionInput');
            const titulo = currentElement.querySelector('.card-title');
            const descripcion = currentElement.querySelector('.card-description');

            // Rellenar el formulario con los valores actuales
            tituloInput.value = titulo.innerText;
            descripcionInput.value = descripcion.innerText;

            // Mostrar el formulario
            editForm.style.display = 'block';
        });
    });

    const saveButtons = document.querySelectorAll('.saveButton');
    saveButtons.forEach(saveButton => {
        saveButton.addEventListener('click', (event) => {
            const editForm = event.target.closest('.editForm');
            const currentElement = editForm.closest('.editable');
            const tituloInput = editForm.querySelector('.tituloInput');
            const descripcionInput = editForm.querySelector('.descripcionInput');
            const titulo = currentElement.querySelector('.card-title');
            const descripcion = currentElement.querySelector('.card-description');

            // Actualizar el contenido
            titulo.innerText = tituloInput.value;
            descripcion.innerText = descripcionInput.value;

            // Ocultar el formulario
            editForm.style.display = 'none';
        });
    });

    const cancelButtons = document.querySelectorAll('.cancelButton');
    cancelButtons.forEach(cancelButton => {
        cancelButton.addEventListener('click', (event) => {
            const editForm = event.target.closest('.editForm');
            // Ocultar el formulario
            editForm.style.display = 'none';
        });
    });
});*/
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