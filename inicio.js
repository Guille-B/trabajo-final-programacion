
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

            // Cargar el script después de insertar el HTML
            const script = document.createElement('script');
            script.src = scriptPath;
            script.onload = () => {
                console.log(`${scriptPath} loaded successfully.`);
            };
            script.onerror = () => {
                console.error(`Error loading script: ${scriptPath}`);
            };
            document.body.appendChild(script); // O document.head.appendChild(script);
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}

// Cargar navbar con su script
loadHTMLWithScript('./nav/nav.html', './nav/nav.js' , 'navbar');


// Cargar footer con su script
loadHTMLWithScript('./footer/footer.html', './footer/footer.js', 'footer');

// Cargar home con su script
loadHTMLWithScript('./home/home.html', './home/home.js', 'home');

