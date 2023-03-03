var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const a = Number(lines[0])
const b = Number(lines[1])

const soma = a + b

console.log("SOMA = " + soma)
