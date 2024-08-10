let numero = [3,7,1,9,2,21,34,15,0,1]
function recorrer(array, boleano){
    
}

function burbujas(arr, bol){
    if(bol){
         let cuenta = 0
        for(let i = 0; i <= arr.length; i++){
            if(arr[i] < arr[i-1]){
                temp = arr[i-1]
                arr[i-1] = arr[i]
                arr[i]=temp
                cuenta = cuenta + 1
            }
        }
        bol = cuenta !=0
        console.log(bol)
        burbujas(arr, bol)
    }
    else {
        return(arr)
    }
    return(arr)
}
console.log(numero)
console.log(burbujas(numero, true))


