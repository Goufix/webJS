// Define um objeto
const person = { 
    // Define meu nome
    nome: 'Alifer Quevedo',
    // Minha idade
    idade: 17,
    // Diz se sou homem
    homem: true
}
const array = [
    'alifer',
    'luiz',
    'bruno gay'

]
const pularLinha = '------------------------'
// Mostra Logs com todos os elementos do objeto
console.log(typeof person) // Retorna object
console.log(typeof person.nome) // Retorna string
console.log(typeof person.idade) // retorna number
console.log(typeof person.homem) // retorna bool
console.log(pularLinha)
console.log(array[0])
console.log(array[1])
console.log(array[2])
console.log(array)
console.log(pularLinha)

array.forEach(function (cv, ci) {
    console.log('o índice ' + cv + ' é igual a ' + ci)
})