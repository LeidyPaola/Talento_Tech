const btnChiste = document.getElementById("btnChiste")
const chiste = document.getElementById("chiste")

btnChiste.addEventListener("click",generateJoke)

async function generateJoke(){
    const res = await fetch('https://icanhazdadjoke.com/',{
        headers:{
             'Accept':'application/json'
        }
    })
    const data = await res.json()
    chiste.innerHTML = data.joke
    console.log(data)
}