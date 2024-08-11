entrada = [1, 4, 7, 2, 3, 5, 9, 14, 19, 2, 0, 23, 4]
console.log(entrada)
// repite para el sigueinte elemento no deseado
for (let recorrerArray = 0; recorrerArray < entrada.length -1; recorrerArray ++){ //recorre el array
    menor = entrada[recorrerArray] // iniando menor
    posicion = recorrerArray  // iniciando posicion
    // console.log("Ra: ", recorrerArray)
    // console.log("Ra", menor)
    for (let encuentraMenor = recorrerArray; encuentraMenor < entrada.length; encuentraMenor++)  //encontrar el numero menor
        // console.log("em: ", encuentraMenor)
    if (menor < entrada[encuentraMenor]){ // todo sigue igual
        menor = menor
        posicion = posicion
    }else{  //cambiando si entrada[encuentraMenor]< menor
        menor = entrada[encuentraMenor]
        posicion = encuentraMenor
        // console.log("Em", menor)
    }
    // intercambia el minimo con el primer elemento no ordenado
    entrada[posicion] = entrada[recorrerArray]
    entrada[recorrerArray]  = menor
}
console.log(entrada)
