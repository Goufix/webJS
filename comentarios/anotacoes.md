# Comentários:
Evitar comentário idiota\
Comentar tudo que for necessário durante o curso.\
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
Var: Nunca usar\
let: Variável js\
const: constante js *Constantes não podem ter seu valor alterado*
#Null / Undefined
Null = Definido explícitamente\
Undefined = Definido pela linguagem\
É impossível acessar a propriedade undefined de um valor undefined, exemplo:\
```javascript
const obj = {
    nome: 'Goufix'
}
console.log(obj.preco.a) // Preço não está definido, isso irá gerar um erro de console.
```
*Nunca definir undefined explícitamente*
