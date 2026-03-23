const prompt = require('prompt-sync')()

let  num = Number(prompt('digite o número decimal '));
console.log('o número arrendondado é: ' + Math.round(num))