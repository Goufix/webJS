function criarProduto (nome, valor) {
  return {
    nome,
    valor,
    desconto: 10
  }
}
console.log(criarProduto('Máquina de café', 200))
