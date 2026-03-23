const prompt = require('prompt-sync')();
let a = Number(prompt('Digite um número: '));
let b = Number(prompt('Digite outro número: '));
if (a > b) {
    console.log("O primeiro número é maior.");
} else if (b > a) {
    console.log("O segundo número é maior.");
} else if (a === b) {
    console.log("Os dois números são iguais.");
}
if (a === 0 && b === 0) {
    console.log("Os dois números são zero.");
} else if (a === 0 || b === 0) {
    console.log("Um dos números é zero.");
}