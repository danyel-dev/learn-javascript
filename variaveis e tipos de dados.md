# Variáveis e tipos de dados

Existem 3 maneiras de se declarar variáveis no javascript, utilizando: var, let, e const. vamos apresentar a diferença de cada uma delas.   


#### var

A primeira maneira de se declarar variáveis no Javascript é utilizando a palavra "var", no entanto hoje em dia não é muito recomendado, é uma forma meio antiga e pouco utilizada pois basicamente uma variável declarada com var não possui uma coisa chamada block scoped. uma variavel declarada com var também pode ter o seu valor alterado posteriormente

Exemplo 1
```js
var message = 'Hello, World'
alert(message)

message = 'Olá, Mundo!!'
alert(message)
```

Exemplo 2
```js
if(true) {
    var message = 'Hello, World'
}

alert(message)
```

Como podemos ver, no segundo exemplo temos a declaração de uma variavel dentro do escopo do bloco do if, e essa variável está sendo acessada fora da estrutura do if, é por causa de situações de escopo como essa que o var não é mais tão utilizado.

Obs: Não se preocupe caso não tenha entendido essa questão do block scoped, vou fazer um documento mais pra frente explicando sobre esse assunto.