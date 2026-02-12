const nome = 'Luiz gustavo'
const titulo = document.querySelector('.titulo');
const texto = document.querySelector('#texto');
const fundo = document.querySelector('#corpo');
const quadro = document.querySelector('.cor.diferente')

titulo.textContent += nome;
texto.textContent += 'e alterada via Javascript';
fundo.style.backgroundColor = '#a18181';
quadro.style.backgroundColor = '#fff';
titulo.style.color = 'rgba(58, 178, 205, 0.2)';
texto.style.color = 'rgb(255, 0, 255)'
titulo.style.fontSize = '68px'
