const campoTexto = document.getElementById('campoTexto');

// Cambiar el estilo cuando el input está enfocado
campoTexto.addEventListener('focus', function() {
    campoTexto.style.borderColor = 'darkblue'; // Cambia el color del borde
});

// Restaurar el estilo original cuando el input pierde el foco
campoTexto.addEventListener('blur', function() {
    campoTexto.style.borderColor = ''; // Restaurar el borde original
});