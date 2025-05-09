const sim = document.getElementById('sim');
const nao = document.getElementById('nao');
const telaPergunta = document.getElementById('tela-pergunta');
const telaResposta = document.getElementById('tela-resposta');

// Evento do botão "Sim" - Mostra a resposta
sim.addEventListener('click', () => {
  telaPergunta.classList.remove('active');
  setTimeout(() => {
    telaResposta.classList.add('active');
  }, 500); // pequeno delay pra suavizar
});

// Função para mover o botão "Não"
function moverBotao() {
  const maxX = window.innerWidth - nao.offsetWidth;
  const maxY = window.innerHeight - nao.offsetHeight;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  nao.style.position = 'absolute';
  nao.style.left = `${randomX}px`;
  nao.style.top = `${randomY}px`;
}

// Quando o mouse passar por cima (PC)
nao.addEventListener('mouseover', moverBotao);

// Quando tocar no botão "Não" (Mobile)
nao.addEventListener('touchstart', (e) => {
  e.preventDefault(); // Impede o clique no botão
  moverBotao();
});
