let numeros =[4, 1, 4, 6, 7, -45, 2001];

for (let i = 0; i < numeros.length; i++) {
    console.log("No primeiro laço: ", numeros[i])
    for (let j = i + 1; j < numeros.length; j++) {
console.log("No segundo laço: ", numeros[j])
    
if(numeros[i] > numeros[j]){
    let aux = numeros[i]
    numeros[i]= numeros[j]
    numeros[j]= aux 
}

}
}
console.log(numeros)