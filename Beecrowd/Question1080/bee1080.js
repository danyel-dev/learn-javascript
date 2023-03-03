var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

lines = lines.map(value => parseInt(value));

let maior = lines[0];
let pos = 0;

for(let i = 0; i < lines.length; i++) {
    if(maior < lines[i]) {
        maior = lines[i];
        pos = i;
    }
}

console.log(maior);
console.log(pos + 1);