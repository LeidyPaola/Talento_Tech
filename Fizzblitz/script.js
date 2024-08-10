
const entrada = document.getElementById("entrada");
const btn = document.getElementById("btn")
const texto = document.getElementById("texto")


function FillBlitz(n){
        salida = []
    for(let i = 1; i<=n; i++){
        if(i%3 == 0 & i%5 == 0){
            salida.push("FillBlitz")
        } else if( i%3 == 0){
            salida.push("Fill")
        }else if (i%5 == 0){
            salida.push("Blitz")
        }
    }
    return salida
}


entrada.addEventListener("input",(event)=>{ 
    numero = event.target.value
    console.log(numero)
    
})

btn.addEventListener("click",()=>{
    texto.innerHTML = "";
    let secuencia = FillBlitz(numero);
    secuencia.forEach((dato)=>{
        let hijo = document.createElement("p");
        hijo.innerHTML = dato 
        texto.appendChild(hijo)
    })
})

texto.innerHTML = '';

const secuencia = FillBlitz(numero);
secuencia.forEach((dato) => {
    const hijo = document.createElement("p");
    hijo.textContent = dato;
    texto.appendChild(hijo);
});