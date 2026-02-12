const prompt = require('prompt-sync')()
console.log('Bliblioteca');
let idade = Number(prompt('Qual sua idade '));
function Bliblioteca() {

 if (idade >= 18 ) {
    console.log('Você pode pegar livros, e você é de maior')
 } else if (idade >= 16 ) {
    console.log('Você não pode pegar livros ')
 } else {
        console.log('Você não tem idade necessaria para pegar livros')
 }
}
Bliblioteca()
 