var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const X = Number(lines[0]);
const Y = Number(lines[1]);

let maior;
let menor;

if(X > Y) {
    maior = X;
    menor = Y;
} else {
    maior = Y;
    menor = X;
}

let soma = 0;

for(let i = menor; i <= maior; i++) 
    if(i % 13 !== 0) 
        soma += i;

console.log(soma)
