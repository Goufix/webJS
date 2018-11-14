const planilha = `Carimbo de data/hora,Nickname,TAG,Data:,Horário do INÍCIO da instrução:,Curso aplicado: ,Nick(s) do(s) aluno(s) presente(s):,Nick(s) do(s) aluno(s) aprovado(s):,Comentários:
21/10/2018 00:08:10,MINISTÉRIO,MINISTÉRIO,21/10/2018,00:07:00,Curso de Formação de Soldados (CFSd),MINISTÉRIO,MINISTÉRIO,MINISTÉRIO
21/10/2018 00:13:28,25Bans,25B,21/10/2018,23:57:00,Curso de Formação de Soldados (CFSd),Bruno-David ,Bruno-David`


const fs  = require('fs')
const rawData = fs.readFileSync('planilha.csv', 'utf-8')

// O código abaixo transforma a planilha no modelo: Nick / Pontos
const splitData = rawData.split('\n')
let data = ''
splitData.forEach ((value, index, array) => { 
  const line = value.split(',')
  const nick = line[1]
  const className = line[5]
  let points = 0
  switch (className) {
    case 'Curso de Formação de Soldados (CFSd)':
    points = 2
    break;
    case 'Curso de Formação de Cabos (Parte 2) (CFC2)':
    points = 1
    break;
    case 'Curso de Formação de Cabos (Parte 1) (CFC1)':
    points = 2
    break;
    case 'Curso de Aperfeiçoamento de Praças (CAP)':
    points = 1
    break;
  }
  data += nick + ' / ' + points + '\n';
})

function getDict (string) {
  // Criamos o nosso objeto:
  const dict = {}

  // Transformamos a nossa string em um array com arrays dentro:
  const data = string.trim()
    .split('\n')
    .map((line) => line.split('/').map((part) => part.trim()))
  
  //Inserimos os valores no objeto:
  for (const [nick, pointsString] of data) {
    const points = parseInt(pointsString)
    
    // Se o nick ainda não está no objeto, criamos uma nova propriedade
    // para o usuário.
    if (!dict.hasOwnProperty(nick)) {
      Object.assign(dict, { [nick]: points })
    } else {
      // Caso o usuário seja repetido, simplesmente some os pontos à
      // quantidade já existente:
      dict[nick] += points
    }
  }

  return dict
}
const object = getDict(data)
// Transforma o objeto em array
let resultArray = Object.entries(object)
// Organiza o array por número de pontos
resultArray.sort(sortFunction)
function sortFunction (a, b){
  return (b[1] - a[1]) 
}
// Adiciona a palavra "Pontos", depois de cada índice do array
resultArray.forEach ((value, index, array) => {
  array[index] += ' Pontos'
})
// Join, separando por linhas.
resultArray.forEach ((value, index, array) => {
  console.log(value.replace(',', ' : '))
})
resultArray = resultArray.join('\n')
// console.log(resultArray)
// -------------------------------------- //


