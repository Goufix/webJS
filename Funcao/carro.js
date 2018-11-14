function car(maxSpeed = 200, delta = 5) {
  let currentSpeed = 0

  this.accelerate = () => {
    if (delta <= 5) {
      console.log('...')
    } else if (delta <= 15) {
      console.log('Vrum')
    } else if (delta <= 50) {
      console.log('Vruuum')
    } else if (delta > 50) {
      console.log('ZUUUUUUUUUUUUUUUUM')
    }
    if (currentSpeed + delta < maxSpeed) {
      currentSpeed += delta
      return
    } 

    currentSpeed = maxSpeed
  }
  this.break = () => {
    if (currentSpeed - delta > 0) {
      currentSpeed -= delta
      return
    }

    currentSpeed = 0
  }
  this.getCurrentSpeed = () => currentSpeed
}

const uno = new car(150, 5)

const unoComEscada = new car(500, 30)

const unoComEscadaELogoDaGVT = new car(10000, 100)

uno.accelerate()
console.log(`Velocidade atual do uno: ${uno.getCurrentSpeed()}`)
console.log('===========')
unoComEscada.accelerate()
console.log(`Velocidade atual do uno com escada: ${unoComEscada.getCurrentSpeed()}`)
console.log('===========')
unoComEscadaELogoDaGVT.accelerate()
console.log(`Velocidade atual do Uno PowerFull: ${unoComEscadaELogoDaGVT.getCurrentSpeed()}`)
console.log('===========')
unoComEscadaELogoDaGVT.break()
console.log(`Velocidade atual do UnoPowerFull: ${unoComEscadaELogoDaGVT.getCurrentSpeed()}`)
console.log('===========')
unoComEscadaELogoDaGVT.break()
console.log(`Velocidade atual do UnoPowerFull: ${unoComEscadaELogoDaGVT.getCurrentSpeed()}`)
console.log('===========')
console.log('DONE!')
