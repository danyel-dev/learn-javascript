var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

lines = lines.map(value => parseFloat(value));

lines.shift();

let countIn = 0;
let countOut = 0;

for(let value of lines) {
    if(value >= 10 && value <= 20)
        countIn++;
    else 
        countOut++;
}

console.log(`${countIn} in`);
console.log(`${countOut} out`);
