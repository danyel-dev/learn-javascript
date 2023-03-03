var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');


let N = Number(lines.shift());

for(let i = 0; i < N; i++) {
    let line = lines[i];
    let phrase = '';

    for(let j = 0; j < line.length; j++) {
        if(j == 0 && line[j] != ' ') 
            phrase += line[j];
        
        else if(line[j] != ' ' && line[j - 1] == ' ' && line[j] !== '\r') 
            phrase += line[j];        
    }

    console.log(phrase)
}
