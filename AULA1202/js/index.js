const corpo = document.querySelector('body');
const titulo = document.querySelector('.titulo');
const container = document.querySelector('#container');
const imagem = document.querySelector('#imagem');
const botao = document.querySelector('#botao');
const botao2 = document.querySelector('#botao2');

corpo.style.backgroundColor = '#e600ff';
corpo.style.color = '#fff';
titulo.textContent = 'Adicionando elementos via JS';
container.style.width = '94%';
container.style.height = '0 auto';
container.style.backgroundColor = '#ffd000';

let anuncio = '<h2>Curso dev com ia - novidade!!!</h2>';
container.innerHTML += anuncio;

//adicionando atributos
imagem.setAttribute('src', 'https://i.pinimg.com/736x/0f/f4/6c/0ff46c4906fa179a044a649e7d1b15e4.jpg');
//imagem.removeAttribute('src'); //removendo o atributo 

//adicionando classes
imagem.classList.add('imamgem');

// eventos
let contador = 0;
botao.addEventListener('click', () => {
     console.log('cliquei no botão' + contador++);
     alert('cliquei no botão' + contador++);
});
let ttk = 'Ainnn Nobruuu'
botao2.addEventListener('click', () => {
     console.log('cliquei no botão 2' + ttk);
     alert('cliquei no botão 2' + ttk);
}
);
