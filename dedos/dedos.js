
const mensajes = [
        "Este dedito compró un huevito.",
        "Este dedito lo cocinó.",
        "Este dedito lo peló.",
        "Este dedito le echó sal.",
        "Y este dedito se lo comió."
    ];
    
    const imagenes = [
        "dedo1.jpg",  // Imagen para el dedito 1
        "dedo2.jpg",  // Imagen para el dedito 2
        "dedo3.jpg",  // Imagen para el dedito 3
        "dedo4.jpg",  // Imagen para el dedito 4
        "dedo5.jpg"   // Imagen para el dedito 5
    ];

    const botones = document.querySelectorAll('.dedos button');
    const mensajeElemento = document.getElementById('mensaje');
    const imagenContainer = document.getElementById('imagen-container');

    
    botones.forEach((boton, index) => {
        boton.addEventListener('click', () => {
            mensajeElemento.textContent = mensajes[index];
             // Mostrar la imagen correspondiente
        const img = document.createElement('img');
        img.src = imagenes[index];
        img.alt = mensajes[index];
        
        // Limpiar cualquier imagen previa
        imagenContainer.innerHTML = '';
        imagenContainer.appendChild(img);
    
        });
    });
    