document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggleButton');
    const textContainer = document.getElementById('textContainer');

    toggleButton.addEventListener('click', function() {
        if (textContainer.style.display === 'none' || textContainer.style.display === '') {
            textContainer.style.display = 'block';
        } else {
            textContainer.style.display = 'none';
        }
    });
});

toggleButton2.addEventListener('click', function() {
    if (textContainer2.style.display === 'none' || textContainer2.style.display === '') {
        textContainer2.style.display = 'block';
    } else {
        textContainer2.style.display = 'none';
    }
});
