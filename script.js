// 1. Obter a referência da imagem
const imagem = document.getElementById('minhaImagem');

// 2. Definir as variáveis de estado
let posX = 50; // Posição inicial X (horizontal)
let posY = 50; // Posição inicial Y (vertical)
let velocidadeX = 2; // Velocidade em pixels por quadro (horizontal)
let velocidadeY = 1.5; // Velocidade em pixels por quadro (vertical)

// 3. Função principal de animação
function animarImagem() {
    // A. Mudar a Posição (Horizontal e Vertical)
    posX += velocidadeX; // Atualiza a posição X
    posY += velocidadeY; // Atualiza a posição Y

    // B. Detectar Colisão e Inverter Direção (Bordas da Tela)
    const larguraTela = window.innerWidth;
    const alturaTela = window.innerHeight;
    const larguraImagem = imagem.clientWidth;
    const alturaImagem = imagem.clientHeight;

    // Colisão Horizontal (Esquerda e Direita)
    if (posX + larguraImagem > larguraTela || posX < 0) {
        velocidadeX = -velocidadeX; // Inverte a direção horizontal
    }

    // Colisão Vertical (Topo e Baixo)
    if (posY + alturaImagem > alturaTela || posY < 0) {
        velocidadeY = -velocidadeY; // Inverte a direção vertical
    }

    // C. Aplicar a Nova Posição ao Elemento
    imagem.style.left = posX + 'px';
    imagem.style.top = posY + 'px';

    // D. Chamar a função novamente no próximo quadro de animação
    requestAnimationFrame(animarImagem);
}

// 4. Iniciar a animação quando a página carregar
window.onload = function() {
    animarImagem();
};
