# Variáveis e tipos de dados

O Javascript é uma linguagem de tipagem fraca, nas linguagens fracamente tipadas, não é necessário informar o tipo das variáveis, além disso, a linguagem faz conversões entre os tipos automaticamente. 

Existem 3 maneiras de se declarar variáveis no javascript, utilizando: var, let, e const. vamos apresentar a diferença de cada uma delas.   


## **var**

A primeira maneira de se declarar variáveis no Javascript é utilizando a palavra "var", no entanto hoje em dia não é muito recomendado, é uma forma meio antiga e pouco utilizada pois basicamente uma variável declarada com var não possui uma coisa chamada block scoped. uma variavel declarada com var também pode ter o seu valor alterado posteriormente.

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

No exemplo 01, podemos perceber que não existe problema em sobrescrever o valor de uma variável para um tipo diferente de dado, isso ocorre tanto para variáveis declararada com var quanto para let.

Já no exemplo 02 temos a declaração de uma variavel dentro do escopo do bloco do if, e essa variável está sendo acessada fora da estrutura do if, é por causa de situações de escopo como essa que o var não é mais tão utilizado.

Obs: Não se preocupe caso não tenha entendido essa questão do block scoped, vou fazer um documento mais pra frente explicando sobre esse assunto.


## **let**
Outra maneira de se declarar variáveis no javascript é  utilizando a palavra let, a diferença de se utilizar let ao invés de var, é que uma variavel declarada com let respeita o escopo de bloco, ao contrário do var.

*Exemplo 01*

```js
let sexo;
sexo = "M";

console.log(sexo)
```

*Exemplo 02*

```js
if(true) {
    let peso = 61;
} 

console.log(peso)
```

No exemplo 01 não há erros no código, pois a variável foi declarada e iniciada corretamente, já no exemplo 02 vai aparecer um erro informando que a variavel peso não foi definida, isso ocorre por que ela está sendo impressa fora do escopo onde foi declarada, que no caso é dentro do if.