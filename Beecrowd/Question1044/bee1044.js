var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(' ');

const a = Number(lines[0])
const b = Number(lines[1])

if(a % b == 0 || b % a == 0)
    console.log('Sao Multiplos')
else 
    console.log('Nao sao Multiplos')
