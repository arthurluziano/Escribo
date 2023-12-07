function somaDiv(num) {
    const container = []
    
    for(let x = 1; x < num; x++){
        container.push(x)
    }
    
    var soma = 0

    for(x of container){
        if(x % 3 == 0 || x % 5 == 0){
            soma += x
        }
    }
    
    console.log(`A soma entre valores divisíveis por 3 ou por 5 foi: ${soma}`)
}

somaDiv(10)