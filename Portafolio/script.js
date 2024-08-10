// script.js

// Función para manejar el acordeón
document.querySelectorAll('.accordion h3, .education h3, .course h3').forEach(header => {
    
    const plusSpan = document.createElement('span');
  plusSpan.textContent = '+';
  header.appendChild(plusSpan);

    header.addEventListener('click', () => {
        const accordion = header.parentElement;
        accordion.classList.toggle('active');
        
        if (accordion.classList.contains('active')) {
            plusSpan.textContent = '-';
          } else {
            plusSpan.textContent = '+';
          }
    });
});

// Función para manejar el botón de impresión
document.getElementById('print-button').addEventListener('click', () => {
    window.print();
});
