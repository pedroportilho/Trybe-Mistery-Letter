const cartaOriginal = document.getElementById('carta-texto');
const criarCarta = document.getElementById('criar-carta');
const cartaFinal = document.getElementById('carta-gerada');
const estilo = ['newspaper', 'magazine1', 'magazine2'];
const tamanho = ['medium', 'big', 'reallybig'];
const rotacao = ['rotateleft', 'rotateright'];
const alinhamento = ['skewleft', 'skewright'];

function novasClasses(palavra) {
  const eR = Math.floor(Math.random() * 3);
  const tR = Math.floor(Math.random() * 3);
  const rR = Math.floor(Math.random() * 2);
  const aR = Math.floor(Math.random() * 2);

  palavra.classList.add(estilo[eR], tamanho[tR], rotacao[rR], alinhamento[aR]);
}

function novaCarta() {
  const palavras = document.getElementsByTagName('span');

  for (let i = 0; i < palavras.length; i += 1) {
    palavras[i].className = '';
    novasClasses(palavras[i]);
  }
}

function gerarCarta() {
  const palavras = cartaOriginal.value.split(' ');
  cartaFinal.innerHTML = '';

  if (palavras[0] === '') {
    cartaFinal.innerHTML = 'Por favor, digite o conteúdo da carta.';
  } else {
    for (let i = 0; i < palavras.length; i += 1) {
      cartaFinal.innerHTML += `<span>${palavras[i]}</span>`;
      const newspan = document.getElementsByTagName('span')[i];
      novasClasses(newspan);
    }

    cartaFinal.addEventListener('click', novaCarta);
    const contador = document.getElementById('carta-contador');
    contador.innerHTML = palavras.length;
  }
}

criarCarta.addEventListener('click', gerarCarta);
