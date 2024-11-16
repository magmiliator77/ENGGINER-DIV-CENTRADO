// Obtener elementos del DOM
const moveButton = document.getElementById('moveButton');
const movingDiv = document.getElementById('movingDiv');
const engineerImg = document.getElementById('engineerImg');
const soundEffect = document.getElementById('soundEffect');

// Evento para mover el DIV
moveButton.addEventListener('click', () => {
    // Mover el DIV hacia la izquierda
    movingDiv.style.left = '0'; // Al borde izquierdo
    movingDiv.style.transform = 'translateX(0)';

    // Cuando termine la transición
    movingDiv.addEventListener(
        'transitionend',
        () => {
            // Cambiar la imagen del ingeniero
            engineerImg.src = 'recursos/engginer-angry (2).png';

            // Iniciar el regreso del DIV al centro
            movingDiv.style.left = '50%'; // Regresa al centro
            movingDiv.style.transform = 'translateX(-50%)';

            // Reproducir el sonido al mismo tiempo que regresa
            soundEffect.play();

            // Restaurar la imagen original después del regreso
            setTimeout(() => {
                engineerImg.src = 'recursos/engginer-happy.png';
            }, 1000); // Tiempo suficiente para que regrese al centro
        },
        { once: true } // Ejecuta el evento solo una vez
    );
});
