var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let N = parseInt(lines[0])

for(let i = 1; i <= N; i++)
    if(i % 2 == 0)
        console.log(`${i}^2 = ${i*i}`)
