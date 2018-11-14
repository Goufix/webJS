/*//string 
var texto = 'Curso de JavaScript'
//number
var numeroInteiro = -7
var numeroFracionado = 10.75
//boolean
var teste = true
var testeF = false
// 
var a = 10
var b = 20
var c = null
document.write('A: ' + a + '<br/>');
document.write('B: ' + b + '<br/>');
document.write('C: ' + c + '<br/>');

document.write('<hr/>');
// Lógica de substituição
var c = b;
var b = a;
var a = c;
document.write('A: ' + a + '<br/>');
document.write('B: ' + b + '<br/>');
document.write('C: ' + c + '<br/>');

document.write('<hr/>');*/
/*
var idade = prompt('Qual sua idade?')

if(idade >= 0 && idade < 15) {
    console.log('criança');
} else if (idade > 14 && idade <30) {
    console.log('jovem');
} else if(idade > 29 && idade < 60) {
    console.log('adulto');
} else if (idade > 59) {
    console.log('idoso');
}

var opcao = 2

switch(opcao) {

    case 2:
    break; 

}*/

// var nome = prompt('Por favor, digite seu nome')
// var altura = prompt('altura')
// var peso = prompt('peso')
// altura = parseFloat(altura)
// peso = parseFloat(peso)
// altura = altura/100;
// var massa = peso/altura^2
// if(massa < 16) {
//  console.log('Baixo peso muito grave')
// }
// if(massa > 16 && massa < 16,99) {
//  console.log('Baixo peso grave')
// }


// var nuncaDesafieUmHomem = new Date()
// var dia = nuncaDesafieUmHomem.getDate()
// var mes = nuncaDesafieUmHomem.getMonth().toString()
// mes = mes.replace('0', 'Jan').replace('1', 'Fev').replace('2', 'Mar')
// .replace('3', 'Abr').replace('4', 'Mai').replace('5', 'Jun')
// .replace('6', 'Jul').replace('7', 'Ago').replace('8', 'Set').replace('9', 'Out').replace('10', 'Nov')
// .replace('11', 'Dez')
// var ano = nuncaDesafieUmHomem.getFullYear()
// var data = [dia + mes + ano].join(' ')
// console.log(data)

// var nuncaDesafieUmHomem = new Date()
// var dia = nuncaDesafieUmHomem.getDate()
// var mes = nuncaDesafieUmHomem.getMonth().toString()
// mes = mes.replace('0', 'Jan').replace('1', 'Fev').replace('2', 'Mar')
// .replace('3', 'Abr').replace('4', 'Mai').replace('5', 'Jun')
// .replace('6', 'Jul').replace('7', 'Ago').replace('8', 'Set').replace('9', 'Out').replace('10', 'Nov')
// .replace('11', 'Dez')
// var ano = nuncaDesafieUmHomem.getFullYear()
// var data = [dia, mes, ano].join(' ')
// console.log(data)

// ====================================================
// Exercícios de cálculo

// var num1 = parseInt(prompt("Primeiro número"))
// var num2 = parseInt(prompt("Segundo número"))
// var operacao = prompt("Adição ou subtação?")

// function conta (num1, num2, operacao) {
//     if (operacao === "adição") { return num1 + num2 }
//     if (operecao === "subtração") { return num1 - num2 }
// }

// var resultado = conta(num1, num2, operacao)
// console.log("O resultado é: " + resultado)
// // --------------------------------------------------
// var num1 = prompt('Digite um número');
// var operacao = prompt('Digite a operação');
// var num2 = prompt('Digite outro número');

// function calc(num1, num2, operacao){

//  num1 = parseFloat(num1);
//  num2 = parseFloat(num2);

//  var resultado = 0;

//  if(operacao == 'soma'){
//  resultado = num1 + num2;
//  }

//  if(operacao == 'subtracao'){
//  resultado = num1 - num2;
//  }

//  return resultado;
// }

// document.write('O resultado é: ' + calc(num1, num2, operacao)); 

//================================================================
// Código do cálculo do Alysson
// ===============================================================

// var num1 = 20180.00
// var num2 = 20000.00
// var periodo = 10
// var parte1 = num1/num2
// var parte2 = 1/periodo
// var conta = Math.pow(parte1, parte2) -1  // (num1 / num2) ^ (1/periodo)
 

// console.log(conta)

//================================================================
// Loops
// ===============================================================

// var x = 0
// while(x <= 10) {
//     console.log(x)
// }

//================================================================
// Loops (FOR)
// ===============================================================

/*for(var y = 0; y <= 30; y++) {
    for(var x = 0; x <=30; x++) {
        var conta = y + "x" + x + "="
        document.write(conta + y * x)
    }
    document.write('=============================================')
}

*/



















const nome = 'Gordinho'
console.log(`O maycon é ${nome}`)

