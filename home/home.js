
function init() {
    const editarButtons = document.querySelectorAll('.editar');
    
    editarButtons.forEach(button => {
        button.addEventListener('click', mostrarForm);
    });

    const guardarButtons = document.querySelectorAll('.guardar');

    guardarButtons.forEach(button => {
        button.addEventListener('click', guardarDatos);
    });

    function mostrarForm(event) {
        const card = event.target.closest('.card');
        const titulo = card.querySelector('.card-title');
        const descripcion = card.querySelector('.card-description');
        const nuevoTitulo = card.querySelector('.nuevoTitulo');
        const nuevaDescripcion = card.querySelector('.nuevaDescripcion');
        const formEdicion = card.querySelector('.form-edicion');

        nuevoTitulo.value = titulo.textContent;
        nuevaDescripcion.value = descripcion.textContent;
        formEdicion.classList.remove("oculto");
    }

    function guardarDatos(event) {
        const card = event.target.closest('.card');
        const titulo = card.querySelector('.card-title');
        const descripcion = card.querySelector('.card-description');
        const nuevoTitulo = card.querySelector('.nuevoTitulo');
        const nuevaDescripcion = card.querySelector('.nuevaDescripcion');
        const formEdicion = card.querySelector('.form-edicion');

        const tituloN = nuevoTitulo.value;
        const descripcionN = nuevaDescripcion.value;

        if (tituloN === '' || descripcionN === '') {
            alert('Por favor, complete todos los campos.');
            return;
        }

        titulo.textContent = tituloN;
        descripcion.textContent = descripcionN;

        localStorage.setItem("titulo", tituloN);
        localStorage.setItem("descripcion", descripcionN);

        formEdicion.classList.add("oculto");
    }

    document.querySelectorAll('.cancelar').forEach(button => {
        button.addEventListener('click', function() {
            const card = this.closest('.card');
            const formEdicion = card.querySelector('.form-edicion');
            formEdicion.classList.add("oculto");
    
        });
    });

}

init();


let index = 0;

function mostrarImagen() {
    const imagenes = document.getElementById('imagenes');
    const totalImagenes = document.querySelectorAll('.imagen').length;
    const desplazamiento = -index * 100;
    imagenes.style.transform = 'translateX(' + desplazamiento + '%)';
}

function siguiente() {
    const totalImagenes = document.querySelectorAll('.imagen').length;
    index++;
    if (index >= totalImagenes) {
        index = 0; 
    }
    mostrarImagen();
}

function anterior() {
    const totalImagenes = document.querySelectorAll('.imagen').length;
    index--;
    if (index < 0) {
        index = totalImagenes - 1; 
    }

    mostrarImagen();
}

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