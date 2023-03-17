# Declarando Variáveis

O Javascript é uma linguagem de tipagem fraca, nas linguagens fracamente tipadas, não é necessário informar o tipo das variáveis, além disso, a linguagem faz conversões entre os tipos automaticamente. 

Existem 3 maneiras de se declarar variáveis no javascript, utilizando: var, let, e const. mas há diferenças significativas entre eles:


## **var**

Antes do ES6 (ECMAScript 2015), o var era a única palavra-chave usada para declarar variáveis no Javascript, no entanto hoje em dia não é muito recomendado, é uma forma meio antiga e pouco utilizada pois ela tem escopo de função ou escopo global, ou seja, quando uma variável é declarada com var dentro de uma função, ela só é visível dentro dessa função, e se uma variável é declarada fora de qualquer função, ela se torna global e é acessível de qualquer lugar do código, e é por ela ter escopo global que pode ocorrer erros no código, por isso a sua utilização não é tão recomendada. Além disso, o var permite a reatribuição de valores.


*Exemplo 1*
```js
var message = 'Hello, World'
alert(message)

message = 2271
alert(message)
```

*Exemplo 2*
```js
if(true) {
    var message = 'Hello, World'
}

alert(message)
```

No exemplo 01 podemos perceber que não existe problema em sobrescrever o valor de uma variável para um tipo diferente de dado, isso ocorre tanto para variáveis declararadas com var quanto para let.

Já no exemplo 02 temos a declaração de uma variavel dentro do escopo do bloco if, e essa variável está sendo acessada fora da estrutura do if, é por causa de situações de escopo como essa que o var não é mais tão utilizado.

.
## **let**
Outra maneira de se declarar variáveis no javascript é  utilizando a palavra let, o let foi introduzido no ES6 (ECMAScript 2015) para corrigir as limitações do var. Ele tem escopo de bloco, ou seja, uma variável declarada com let dentro de um bloco (entre chaves, por exemplo: if, ou for) só é visível dentro desse bloco. let também permite a reatribuição de valores. a diferença de se utilizar let ao invés de var, é que uma variavel declarada com let respeita o escopo de bloco, ao contrário do var.

*Exemplo 01*

```js
let sexo;

sexo = "M";
console.log(sexo)

sexo = "F"
console.log(sexo)
```

*Exemplo 02*

```js
if(true) {
    let peso = 61;
} 

console.log(peso)
```

No exemplo 01 não há erros no código, pois o let permite a reatribuição de valores, já no exemplo 02 vai aparecer um erro informando que a variavel peso não foi definida, isso ocorre por que ela está sendo impressa fora do escopo onde foi declarada, que no caso é dentro do if, e como sabemos, o let possui escopo de bloco.

.
## **const**
const também foi introduzido no ES6 e é usado para declarar constantes, ou seja, variáveis que não podem ter seu valor reatribuído após a sua inicialização. As variáveis "const" têm escopo de bloco assim como as variáveis "let".

*Exemplo 1*
```js
const name = "Carlos Daniel";
name = "Maria";

console.log(name)
```

*Exemplo 2*
```js
if(true) {
    const idade = 18;
}

console.log(idade);
```

Tanto no Exemplo 01 quanto no 02 possuem erros, no exemplo 01 a variavel name definida utilizando o const está sendo sobrescrita, mas o const não permite isso pois ela é usada para definir constantes. e no exemplo 02 a variavel foi declarada dentro do escopo do if, e como sabemos o const tem escopo de bloco, o que significa que uma variável declarada dentro de um bloco só pode ser utilizada dentro desse bloco.

.

## Resumo

Em resumo, a diferença entre var, let e const é principalmente relacionada ao escopo e à capacidade de reatribuição de valores. var tem escopo de função ou global e permite reatribuição; let tem escopo de bloco e permite reatribuição; const tem escopo de bloco e não permite reatribuição.

*outra diferença entre elas é o **Hoisting**, no entando esse assunto será explicado em outro note.*
