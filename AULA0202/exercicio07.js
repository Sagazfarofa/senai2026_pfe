const prompt = require('prompt-sync')();
let num1 = Number(prompt('Digite um número')); 
let sinal = prompt('Digite um operador');
let num2 = Number(prompt('Digite outro número'));

const resultado = function( num1,sinal,num2 ) {
    switch (sinal) {
        case "+": console.log(num1+num2);
        break
        case "-": console.log(num1-num2);
        break
         case "/": console.log(num1/num2);
        break
         case "*": console.log(num1*num2);
        break
    }
}
resultado(num1,sinal,num2) 
