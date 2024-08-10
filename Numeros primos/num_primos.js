function verificarPrimo() {
    const numero = parseInt(document.getElementById('numero').value);
    const resultado = document.getElementById('resultado');
    
    if (isNaN(numero) || numero < 2) {
        resultado.textContent = 'Por favor, ingresa un número válido mayor o igual a 2.';
        return;
    }

    let esPrimo = true;
    let divisor = null;

    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            esPrimo = false;
            divisor = i;
            break;
        }
    }

    if (esPrimo) {
        resultado.textContent = `El número ${numero} es Primo.`;
    } else {
        resultado.textContent = `El número ${numero} no es Primo. Es múltiplo de ${divisor}.`;
    }
}
