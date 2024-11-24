
document.querySelectorAll('.editar').forEach(button => {
    button.addEventListener('click', function() {
        const card = this.closest('.editable'); 
        const editForm = card.querySelector('.editForm');
        editForm.style.display = 'block'; 
    });
});

document.querySelectorAll('.cancelButton').forEach(button => {
    button.addEventListener('click', function() {
        const card = this.closest('.editable');
        const editForm = card.querySelector('.editForm');
        editForm.style.display = 'none'; 
    });
});

document.querySelectorAll('.saveButton').forEach(button => {
    button.addEventListener('click', function() {
        const card = this.closest('.editable'); 
        const titleInput = card.querySelector('.tituloInput').value; 
        const descriptionInput = card.querySelector('.descripcionInput').value; 


        card.querySelector('.card-title').textContent = titleInput;
        card.querySelector('.card-description').textContent = descriptionInput;

        const editForm = card.querySelector('.editForm');
        editForm.style.display = 'none'; 
    });
});
function verificarSesion() {
    const usuario = localStorage.getItem("usuario");
    if (usuario) {
      
        const botonesEditar = document.querySelectorAll('.editar');
        
        botonesEditar.forEach(boton => {
            boton.classList.remove('oculto');
        });
    } 
}

verificarSesion();