
function loadFooter() {
    const titulo = localStorage.getItem('footerTitulo');
    const cambio = localStorage.getItem('footerCambio');
    const copy = localStorage.getItem('footerCopy');

    if (titulo) {
        document.getElementById('footer-titulo').innerText = titulo;
    }
    if (cambio) {
        document.getElementById('footer-cambio').innerText = cambio;
    }
    if (copy) {
        document.getElementById('footer-copy').innerText = copy;
    }
}


function saveFooter() {
    const titulo= document.getElementById('footer-titulo').innerText;
    const cambio = document.getElementById('footer-cambio').innerText;
    const copy = document.getElementById('footer-copy').innerText;

    localStorage.setItem('footerTitulo', titulo);
    localStorage.setItem('footerCambio', cambio);
    localStorage.setItem('footerCopy', copy);

    alert('Cambios guardados exitosamente.');

    
    setEditable(false);
}

function setEditable(isEditable) {
    document.getElementById('footer-titulo').contentEditable = isEditable;
    document.getElementById('footer-cambio').contentEditable = isEditable;
}


document.addEventListener('DOMContentLoaded', loadFooter);


document.getElementById('edit-footer').addEventListener('click', function() {
    setEditable(true);
});


document.getElementById('save-footer').addEventListener('click', saveFooter);