var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let X = lines.shift();

lines = lines.map(value => parseInt(value));

let countIn = 0;
let countOut = 0;

for(let i = 0; i < X; i++) {
    if(lines[i] >= 10 && lines[i] < 20)
        countIn++;
    else 
        countOut++;
}

console.log(`${countIn} in`);
console.log(`${countOut} out`);
