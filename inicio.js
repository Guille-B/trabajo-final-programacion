
function loadHTMLWithScript(htmlPath, scriptPath, elementId) {

    fetch(htmlPath)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            document.getElementById(elementId).innerHTML = data;

            const script = document.createElement('script');
            script.src = scriptPath;
            script.onload = () => {
                console.log(`${scriptPath} loaded successfully.`);
            };
            script.onerror = () => {
                console.error(`Error loading script: ${scriptPath}`);
            };
            document.body.appendChild(script); 
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}


loadHTMLWithScript('./nav/nav.html', './nav/nav.js' , 'navbar');

loadHTMLWithScript('./footer/footer.html', './footer/footer.js', 'footer');

loadHTMLWithScript('./home/home.html', './home/home.js', 'home');

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