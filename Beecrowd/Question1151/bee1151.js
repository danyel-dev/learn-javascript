var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');


let N = Number(lines[0])

let anterior = 0
let atual = 1
let proximo = 1

let numbers = ''

for(let i = 0; i < N; i++) {
    numbers += anterior.toString() 
    anterior = atual
    atual = proximo
    proximo = anterior + atual
    
    if(i < N - 1)
        numbers += ' '
}

console.log(numbers)