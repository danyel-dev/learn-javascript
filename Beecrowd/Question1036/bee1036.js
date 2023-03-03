var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(' ');

const a = Number(lines[0]).toFixed(1)
const b = Number(lines[1]).toFixed(1)
const c = Number(lines[2]).toFixed(1)

let delta = b * b - 4 * a * c

if (delta < 0 || 2 * a == 0) {
    console.log("Impossivel calcular")
} else {
    const x1 = (-b + Math.sqrt(delta)) / (2 * a)
    const x2 = (-b - Math.sqrt(delta)) / (2 * a)
    
    console.log("R1 = " + x1.toFixed(5))
    console.log("R2 = " + x2.toFixed(5))
}
