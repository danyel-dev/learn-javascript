var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(' ');

lines = lines.map(value => Number(value))

let lines_sort = lines.slice()

lines_sort.sort((a, b) => a - b)

for(let value of lines_sort) {
    console.log(value)
}

console.log()

for(let value of lines) {
    console.log(value)
}