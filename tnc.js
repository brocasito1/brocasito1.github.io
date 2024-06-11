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

