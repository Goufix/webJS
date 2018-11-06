class pessoa {
  constructor(nome) {
    this.nome = nome
  }
  falar () {
    console.log(`Meu nome é ${this.nome}`)
  }
}
const p1 = new pessoa('Goufix')
p1.falar()

function criarPessoa (nome) {
  this.nome = nome
  this.falar = () => {
    console.log(`Meu nome é ${this.nome}`)
  }
}
const p2 = new criarPessoa('Goufix')
p2.falar()
p2.nome = 'Joao'
p2.falar()
