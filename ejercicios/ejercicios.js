let numero = [3,7,1,9,2,21,34,15,0,1]

console.log(numero)

numero.sort(function (a, b){
    return a - b;
})

console.log(numero)


personas = [{nombre: "Juan", edad: 21}, 
    {nombre: "Pedro", edad: 40}, 
    {nombre: "Miguel", edad: 28},
    {nombre: "Manuel", edad: 15}
]

personas.sort((a, b)=>(a.edad-b.edad))
console.log(personas)