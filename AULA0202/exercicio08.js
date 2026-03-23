const prompt = require('prompt-sync')();
let nota = Number(prompt('Qual é sua nota?'));
if (nota >= 90 ) {
  console.log("A");
} else if ( nota>= 80 ) {
  console.log("B");
} else  ( nota<= 70 ); {
  console.log("c");
}
