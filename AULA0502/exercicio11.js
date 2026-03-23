const prompt = require('prompt-sync')()
let palavra = prompt("digite uma palavra: ");

console.log('primeira letra 3: ', palavra.slice(0,3));
console.log('Últimas 3: ', palavra.slice(-3));