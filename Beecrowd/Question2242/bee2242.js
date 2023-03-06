var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let line = lines[0]
let vogais = ''

for(let i = 0; i < line.length; i++) {
    if(line[i] === "a" || line[i] === "e" || line[i] === "i" || line[i] === "o" || line[i] === "u") 
        vogais += line[i]
}

let aux = vogais.length - 1;
let count = 0;

for(let i = 0; i < Math.ceil(vogais.length / 2); i++) {
    if(vogais[i] === vogais[aux]) {
        count++;
    }
    aux--;
}

if (count === Math.ceil(vogais.length / 2)) 
    console.log("S")
else 
    console.log("N")
