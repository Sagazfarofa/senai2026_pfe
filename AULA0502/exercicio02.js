const prompt = require('prompt-sync')()
 
function calcularpontuação () {
let a = Number(prompt('Digite a pontuação '));
  let resultado = (a/2)

  console.log('A pontuação sera: ' + resultado **2)
 }

calcularpontuação();