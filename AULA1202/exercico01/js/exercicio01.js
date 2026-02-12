const corpo = document.querySelector('body');
const titulo = document.querySelector('.titulo');
const Criada = document.querySelector('#Criada');
const container = document.querySelector('#container');
const imagem = document.querySelector('img');

imagem.style.width = '432px';
imagem.style.height = '423px';
imagem.style.borderRadius = '10px';
imagem.style.alignContent = 'center';
imagem.style.marginLeft = '30%';

titulo.innerText = 'Adicionando fotos';

corpo.style.backgroundColor = '#00e5f5';
corpo.style.color = '#fff';
Criada.style.width = '94%';
Criada.style.height = '0 auto';
Criada.style.backgroundColor = '#3700ff';
Criada.style.textAlign = 'center';
Criada.style.padding = '10px';

titulo.style.textAlign = 'center';

let Fotos = '<h2>Imagens</h2>';
Criada.innerHTML += Fotos;
Fotos.style.textAlign = 'center';

container.style.height = '0 auto';
container.style.padding = '1px';
container.style.height = '200px';

