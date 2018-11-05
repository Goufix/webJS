function somar (a, b) {
    if(b === undefined) { b = 0 }
    console.log(a + b)
}

somar(1, 2)
somar(12)
somar(1, 2, 3, 4, 5) // Eu estou falando dessa linha

// Função com retorno
console.log('=======================')
function somar2 (a, b) {
    return a + b
}
console.log(somar2(1, 5)) 
