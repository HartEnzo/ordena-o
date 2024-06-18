let numeros =[4, 4, 1, 6, 7, -45, 2001];

for (let i = 0; i < numeros.length; i++) {
   
    for (let j = i + 1; j < numeros.length; j++) {
if(numeros[i] > numeros[j]){
    let aux = numeros[i]
    numeros[i]= numeros[j]
    numeros[j]= aux 
}

}
}
console.log(numeros)

for (let i = 0; i < numeros.length; i++) {
   
    for (let j = i + 1; j < numeros.length; j++) {
    if (numeros[i] == numeros[j]) {
        numeros.splice(j, 1)
    j--
    }
    }

}

