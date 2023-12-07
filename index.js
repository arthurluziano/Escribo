const read = require('readline-sync')

function somaDiv() {
    var valor = Number(read.question('Digite um numero: '))

    if(typeof valor === 'number' && valor > 0){
        const container = []
        
        for(let x = 1; x < valor; x++){
            container.push(x)
        }
            
        var soma = 0
        
        for(x of container){
            if(x % 3 == 0 || x % 5 == 0){
                soma += x
            }
        }
        
        console.log(`O valor inicial foi: ${valor}`)
        console.log(`A soma entre valores divisíveis por 3 ou por 5 foi: ${soma}`)
    
    } else {
        console.log('O valor inserido é inválido!')
    }
}


somaDiv()