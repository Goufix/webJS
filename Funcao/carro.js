function carro(maxSpeed = 200, delta = 5) {
  let currentSpeed = 0
  this.accelerate = () => {
    if (delta <= 5) {

      console.log('...')

    } else if (delta <= 15) {

      console.log('Vrum')
    
    }
    else if (delta <= 50) {
      
      console.log('Vruuum')

    } else if (delta > 50) {

      console.log('ZUUUUUUUUUUUUUUUUM')
      
    }
    if (currentSpeed + delta < maxSpeed) {
      currentSpeed += delta
    } else {
      currentSpeed = maxSpeed
    }
  }
  this.break = () => {
    if (currentSpeed - delta > 0) {
      currentSpeed -= delta
    }
    else currentSpeed = 0
  }
  this.getCurrentSpeed = () => currentSpeed
}

const uno = new carro(150, 5)

const unoComEscada = new carro(500, 30)

const unoComEscadaELogoDaGVT = new carro(10000, 100)

uno.accelerate()
console.log(`Velocidade atual do uno: ${uno.getCurrentSpeed()}`)
unoComEscada.accelerate()
console.log(`Velocidade atual do uno com escada: ${unoComEscada.getCurrentSpeed()}`)
unoComEscadaELogoDaGVT.accelerate()
console.log(`Velocidade atual do Uno PowerFull: ${unoComEscadaELogoDaGVT.getCurrentSpeed()}`)
unoComEscadaELogoDaGVT.break()
console.log(`Velocidade atual do UnoPowerFull: ${unoComEscadaELogoDaGVT.getCurrentSpeed()}`)
unoComEscadaELogoDaGVT.break()
console.log('Done!')
