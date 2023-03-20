# Declarando Variáveis

O Javascript é uma linguagem de tipagem fraca, nas linguagens fracamente tipadas, não é necessário informar o tipo das variáveis, além disso, a linguagem faz conversões entre os tipos automaticamente. 

Existem 3 maneiras de se declarar variáveis no javascript, utilizando: var, let, e const. mas há diferenças significativas entre os três:


## **var**

Antes do ES6 (ECMAScript 2015), o var era a única palavra-chave usada para declarar variáveis no Javascript, no entanto hoje em dia não é muito recomendado, é uma forma meio antiga e pouco utilizada.
* **Escopo**: 
O var tem escopo de função ou escopo global. quando uma variável é declarada com var dentro de uma função, ela só é visível dentro dessa função, e se uma variável é declarada fora de qualquer função, ela se torna global e é acessível de qualquer lugar do código, e é por ela ter escopo global que pode ocorrer erros no código, por isso a sua utilização não é tão recomendada. 

* **Reatribuição de valores**: Sim, o var permite a reatribuição de valores. uma variavel criado por var pode ter seu valor alterado durante o código.
   
* **Inicialização**: Uma variavel criada utilizando o var pode ser iniciado com valor ou não, caso ela seja declarada mas não tenha sido iniciada com algum valor, ela recebe por padrão o valor *undefined*.
* **Hoisting**: O var permite o hosting(içamento), com isso a declaração de uma variavel é elevada para o topo do código, mesmo que ela tenha sido declarada no final.

*Exemplo*
```js
var nome = "Daniel";
console.log(nome);
```

.
## **let**
Outra maneira de se declarar variáveis no javascript é  utilizando a palavra let, o let foi introduzido no ES6 (ECMAScript 2015) para corrigir as limitações do var e para fornecer uma maneira mais robusta e segura de declarar variáveis.

* **Escopo**: Possui escopo de bloco, ou seja, uma variável declarada com let dentro de um bloco (entre chaves {}, por exemplo: if, ou for) só é visível dentro desse bloco. 
* **Reatribuição de valores**: Assim como o var, o let também permite que uma variavel tenha seu valor alterado durante o código.
* **Inicialização**: assim como o var, uma variavel declarada usando a palavra-chave let pode ser inicializada com valor, ou se ela não for inicada com valor ela recebe *undefined*.
* **Hoisting**: o let ao contrário do var não possui o içamento de variaveis, significa que uma variavel declarada em uma linha não vai ser elevada para o topo do código.

a diferença de se utilizar let ao invés de var, é que uma variavel declarada com let respeita o escopo de bloco, ao contrário do var.

*Exemplo*

```js
let sexo = "Masculino";
console.log(sexo);
```

.

## **const**
const também foi introduzido no ES6 e é usado para declarar constantes, ou seja, variáveis que não podem ter seu valor reatribuído após a sua inicialização. 

* **Escopo**: As variáveis "const" têm escopo de bloco assim como as variáveis "let". 

* **Reatribuição de valores**: Diferente do var e do let, uma variavel criada com const não pode ter seu valor alterado.

* **Inicialização**: O const obrigatoriamente tem que ser iniciado com algum valor.

* **Hoisting**: assim como o let, o const não possui o elevação na posição onde uma variavel foi declarada no código.

A diferença entre o const e o let está na inicialização e na reatribuição de valores. diferente do let o const não pode ter seu valor alterado, e também exige que a variavel seja iniciada com algum valor.

*Exemplo 1*
```js
const idade = 22;
console.log(idade)
```

.

## Resumo

![tabela comparando os três tipos de declarações de variáveis](https://github.com/danyel-dev/learn-javascript/blob/master/notes/images/table.png?raw=true)

Em resumo, a diferença entre var, let e const é principalmente relacionada ao escopo e à capacidade de reatribuição de valores. var tem escopo de função ou global e permite reatribuição; let tem escopo de bloco e permite reatribuição; const tem escopo de bloco e não permite reatribuição.

*outra diferença entre elas é o **Hoisting**, no entando esse assunto será explicado em outro note.*
