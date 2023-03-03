var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const PI = 3.14159
const r = lines[0]

const volume = (4.0 / 3) * PI * r * r * r
console.log("VOLUME = " + volume.toFixed(3))
