# Comentários:
Evitar comentário idiota\
Comentar tudo que for necessário durante o curso.
#Nomenclaturas
Ser claro nas nomenclaturas\
Não usar nome genérico ou sigla.
```javascript 
let valor = ''
let numero = 3
let pqp = false // Produto Quimico Perigoso... kkk
```
Usar nomes em inglês para variáveis, funções, etc.
# Var, let e const
Var tem dois contextos: *Global e função*\
Var: Nunca usar\
let: Variável js\
const: constante js *Constantes não podem ter seu valor alterado*
\
#Null / Undefined
Null = Definido explícitamente\
Undefined = Definido pela linguagem\
É impossível acessar a propriedade undefined de um valor undefined, exemplo:\
```javascript
const obj = {
    nome: Goufix: 'Goufix'
}
console.log(obj.preco.a) // Preço não está definido, isso irá gerar um erro de console.
```
*Nunca definir undefined explícitamente*\
#Objetos
Podemos definir objetos dentro de funções sem definir explicitamente o valor:
```javascript
function criarObjeto(id1, id2) {
    id1 = false
    id2 = true
    return { id1, id2 }
}
// Isso retorna um objeto:
{ id1: false,
    id2: true }
```
#Ternário
```javascript
nota >= 7 ? 'Aprovado' : 'Reprovado'
// Operação ? 'true' : 'false'
```
#For
```javascript
// Definição da variável; Operação lógica; Incremento
for(let i = 0; i <= 10; i++) {

}
```
#FORIN
```javascript
const pessoa = {
    nome: 'Goufix',
    sobrenome: 'Gfx',
    idade: 18,
    peso: 72
}
for(let Goufix in pessoa) {
    console.log(`${Goufix} = ${pessoa}`)
}
/*
nome: Goufix
sobrenome: Gfx
idade: 18
peso: 72
```
#THIS
This varia, correção:
```javascript
const self = this // No contexto da função pricnipal.
```
this não varia dentro de arrow function:
```javascript
function pessoa () { 
    this.idade = 0
    setInterval (() => {
        this.idade++
        console.log(this.idade)
    }, 1000)
}
```
#ArrowFunction
Sintaxe:\
```javascript
let dobro = a => 2 * a
dobro = () => /*return*/ 'Olá' // Em funções de uma linha o return é implícito
dobro = (a) => {
    return 2 * a
}
```

### ----------------------------------------------- 
