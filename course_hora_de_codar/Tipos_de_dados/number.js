/* 
    * No JavaScript existe apenas um tipo de dado para números reais e inteiros,
    esse tipo é chamado de Number. os valores NaN (not a number), +infinity, e -infinity
    também fazem parte desse tipo de dado.

    * O comando typeof serve para verificarmos o tipo de uma variavel.
*/

var numero = 4;
console.log(`${numero}: ${typeof numero}`);

numero = 4.53;
console.log(`${numero}: ${typeof numero}`);

numero = NaN;
console.log(`${numero}: ${typeof numero}`);

numero = +Infinity;
console.log(`${numero}: ${typeof numero}`);

numero = -Infinity;
console.log(`${numero}: ${typeof numero}`);
