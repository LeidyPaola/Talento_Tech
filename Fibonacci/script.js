const entrada = document.getElementById("entrada");
const btn = document.getElementById("btn");
const texto = document.getElementById("texto");

function numberToText(n, textoUsar) {
    let text = "";
    for (let i = 1; i <= n; i++) {
        text += `${textoUsar}`;
    }
    return text;
}

function fibo(n) {
    const salida = [0, 1];
    if (n === 1) {
        return [0];
    } else if (n === 2) {
        return [0, 1];
    } else {
        for (let i = 2; i < n; i++) {
            const dato = salida[i - 1] + salida[i - 2];
            salida.push(dato);
        }
    }
    return salida;
}

entrada.addEventListener("input", (evento) => {
    numero = parseInt(evento.target.value);
});

btn.addEventListener("click", () => {
    if (isNaN(numero) || numero < 1) {
        texto.innerHTML = 'Por favor, ingresa un número válido.';
        return;
    }

    texto.innerHTML = ''; // Limpiar contenido previo
    const secuencia = fibo(numero);
    secuencia.forEach((dato) => {
        let hijo = document.createElement("h3");
        hijo.innerHTML = numberToText(dato, "|");
        texto.appendChild(hijo);
    });
});
