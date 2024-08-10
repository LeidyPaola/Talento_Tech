let numero = [3,7,1,9,2,21,34,15,0,1]

function ordSelec(arr){
    for(let pActual = 0; pActual <= arr.length; pActual++){
        var memoria = arr[pActual]
        var memoriaPos = pActual

        for(let recorrido = pActual+1; recorrido < arr.length; recorrido++){
        if(memoria > arr[recorrido]){
            memoria = arr[recorrido]
            memoriaPos = recorrido
            }
        }
        if (memoriaPos !== pActual) {
            let temp = arr[pActual];
            arr[pActual] = arr[memoriaPos];
            arr[memoriaPos] = temp;
        }
    }
    return arr
}
console.log(ordSelec(numero));
