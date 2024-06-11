
function moveButton() {
    const button = document.getElementById('moveButton');
    
    // Gera novas coordenadas aleatórias dentro da janela
    const maxX = window.innerWidth - button.offsetWidth;
    const maxY = window.innerHeight - button.offsetHeight;
    const newX = Math.floor(Math.random() * maxX);
    const newY = Math.floor(Math.random() * maxY);
    
    // Define as novas coordenadas
    button.style.left = `${newX}px`;
    button.style.top = `${newY}px`;
}

function showMessage() {
    const message = document.getElementById('message');
    message.classList.remove('hidden');
}

// Inicializa a posição do botão
document.addEventListener('DOMContentLoaded', () => {
    // Define a posição inicial do botão móvel ao lado do botão parado
    const button = document.getElementById('moveButton');
    button.style.position = 'relative';
    button.style.left = '0px';
    button.style.top = '0px';
});
