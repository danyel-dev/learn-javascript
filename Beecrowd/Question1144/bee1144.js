var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');


let N = Number(lines[0]);

let aux = 1;

for(let i = 0; i < N * 2; i++) {
    if(i % 2 == 0) {
        console.log(`${aux} ${aux * aux} ${aux * aux * aux}`)
    } else {
        console.log(`${aux} ${aux * aux + 1} ${aux * aux * aux + 1}`)
        aux++;
    }
}
