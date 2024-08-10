document.addEventListener('DOMContentLoaded', () => {
    const pantalla = document.getElementById('pantalla'); 
    const botones = document.querySelectorAll('#teclado button'); 

    
    pantalla.textContent = '0';

    botones.forEach(boton => { 
        boton.addEventListener('click', () => { 
            const valor = boton.textContent.trim(); 

            if (valor === 'C') { 
                pantalla.textContent = '0'; 
            } else if (valor === '=') { 
                calcularResultado(); 
            } else if (valor === '√') { 
                calcularRaizCuadrada(); 
            } else if (valor === '∛') { 
                calcularRaizCubica(); 
            } else if (valor === '+/-') { 
                cambiarSigno(); 
            } else if (boton.id === 'backspace') { 
                borrarUltimo(); 
            } else if (valor === '%') { 
                calcularPorcentaje(); 
            } else { 
                agregarValor(valor); 
            }
        });
    });

    function agregarValor(valor) { 
        let expresion = pantalla.textContent; 
    
        if (pantalla.textContent === '0') { 
            pantalla.textContent = valor; 
        } else {
            
            const ultimoCaracter = expresion.slice(-1);
            const esOperador = /[\+\-\*\/%]/.test(ultimoCaracter);
    
            if (esOperador && /[\+\-\*\/%]/.test(valor)) {
                
                
                expresion = expresion.slice(0, -1) + valor;
            } else {
                expresion += valor; 
            }
    
            pantalla.textContent = expresion; 
        }
    }
        

    function calcularResultado() { 
        try {
            let expresion = pantalla.textContent; 
    
            
            expresion = expresion.replace(/√/g, 'Math.sqrt');
            expresion = expresion.replace(/∛/g, 'Math.cbrt');
    
            
            const resultado = eval(expresion);
            pantalla.textContent = resultado;
        } catch (error) {
            pantalla.textContent = 'Error'; 
        }
    }
    
    function calcularRaizCuadrada() { 
        try {
            const expresion = pantalla.textContent; 
            const resultado = Math.sqrt(eval(expresion)); 
            pantalla.textContent = resultado; 
        } catch (error) {
            pantalla.textContent = 'Error'; 
        }
    }
    
    function calcularRaizCubica() { 
        try {
            const expresion = pantalla.textContent; 
            const resultado = Math.cbrt(eval(expresion)); 
            pantalla.textContent = resultado; 
        } catch (error) {
            pantalla.textContent = 'Error'; 
        }
    }
    
    function cambiarSigno() { 
        try {
            let expresion = pantalla.textContent; 
    
            
            const ultimoNumero = expresion.match(/[\d.]+$/);
    
            if (ultimoNumero && ultimoNumero[0] !== '0') {
                
                const posUltimoNumero = expresion.lastIndexOf(ultimoNumero[0]);
    
                
                const nuevoUltimoNumero = ultimoNumero[0].startsWith('-') ? ultimoNumero[0].substring(1) : '-' + ultimoNumero[0];
    
                
                expresion = expresion.substring(0, posUltimoNumero) + nuevoUltimoNumero + expresion.substring(posUltimoNumero + ultimoNumero[0].length);
                pantalla.textContent = expresion;
            }
        } catch (error) {
            pantalla.textContent = 'Error'; 
        }
    }
    
    
    
    
    function borrarUltimo() { 
        if (pantalla.textContent.length === 1) { 
            pantalla.textContent = '0'; 
        } else {
            pantalla.textContent = pantalla.textContent.slice(0, -1); 
        }
    }
    
    function calcularPorcentaje() { 
        try {
            let expresion = pantalla.textContent; 
    
            
            const operadorIndex = expresion.lastIndexOf('+') || expresion.lastIndexOf('-') || expresion.lastIndexOf('*') || expresion.lastIndexOf('/');
    
            
            const base = parseFloat(expresion.substring(0, operadorIndex));
            const porcentaje = parseFloat(expresion.substring(operadorIndex + 1));
    
            
            const valorPorcentaje = base * (porcentaje / 100);
            pantalla.textContent = `${base}${expresion[operadorIndex]}${valorPorcentaje}`;
        } catch (error) {
            pantalla.textContent = 'Error'; 
        }
    }
    

     document.addEventListener('keydown', event => { 
        const tecla = event.key; 

        if (/[0-9.+\-*/%=]|Enter/.test(tecla)) { 
            event.preventDefault(); 

            if (tecla === 'Enter' || tecla === '=') { 
                calcularResultado(); 
            } else if (tecla === 'Backspace'|| tecla === 'Delete') { 
                borrarUltimo(); 
            } else { 
                agregarValor(tecla); 
            }
        }
    });
});