document.getElementById('calcularBtn').addEventListener('click', function() {
    const numero = document.getElementById('numero').value;
    const resultado = document.getElementById('resultado');

    if (numero === '') {
        resultado.textContent = 'Por favor, ingresa un número.';
        return;
    }

    if (numero % 2 === 0) {
        resultado.textContent = `El número ${numero} es Par.`;
    } else {
        resultado.textContent = `El número ${numero} es Impar.`;
    }
});
