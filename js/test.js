// Classe responsável por criar uma wave (onda)
class Wave {
  // Construtor: recebe as configurações da wave
  constructor(id, color, amplitude, frequency, speed, height = 200) {

    // Pega o canvas pelo ID
    this.canvas = document.getElementById(id);

    // Se o canvas não existir, cancela (evita erro)
    if (!this.canvas) return;

    // Contexto 2D do canvas (onde desenhamos)
    this.ctx = this.canvas.getContext('2d');

    // Cor da onda
    this.color = color;

    // Amplitude = altura da onda
    this.amplitude = amplitude;

    // Frequência = quão esticada/comprimida a onda é
    this.frequency = frequency;

    // Velocidade da animação
    this.speed = speed;

    // Offset controla o movimento da onda ao longo do tempo
    this.offset = 0;

    // Altura fixa do canvas
    this.heightValue = height;

    // Ajusta tamanho inicial do canvas
    this.resize();

    // Reajusta o canvas quando a tela muda de tamanho
    window.addEventListener('resize', () => this.resize());
  }

  // Função que ajusta largura e altura do canvas
  resize() {
    // Largura ocupa toda a tela
    this.canvas.width = window.innerWidth;

    // Altura definida no construtor
    this.canvas.height = this.heightValue;
  }

  // Função que desenha a wave
  draw() {
    const ctx = this.ctx;
    const w = this.canvas.width;
    const h = this.canvas.height;

    // Limpa o canvas antes de redesenhar
    ctx.clearRect(0, 0, w, h);

    // Inicia um novo caminho de desenho
    ctx.beginPath();

    // Espessura da linha da wave
    ctx.lineWidth = 6;

    // Cor da wave
    ctx.strokeStyle = this.color;

    // Pontas da linha arredondadas
    ctx.lineCap = 'round';

    // Loop que desenha a onda ponto a ponto no eixo X
    for (let x = 0; x < w; x++) {

      // Calcula o Y usando seno (Math.sin)
      // x * frequency → forma da onda
      // offset → movimento
      // amplitude → altura
      const y = Math.sin(x * this.frequency + this.offset) * this.amplitude;

      // Primeiro ponto da linha
      if (x === 0) {
        ctx.moveTo(x, h / 2 + y);
      } 
      // Restante dos pontos
      else {
        ctx.lineTo(x, h / 2 + y);
      }
    }

    // Desenha a linha no canvas
    ctx.stroke();

    // Atualiza o offset para animar a wave
    this.offset += this.speed;
  }
}

// Espera o HTML carregar completamente
document.addEventListener('DOMContentLoaded', () => {

  // Cria a wave de cima
  const waveTop = new Wave(
    'waveTop',     // ID do canvas
    '#0096ff',     // Cor
    20,            // Amplitude
    0.005,         // Frequência
    0.03,          // Velocidade
    200            // Altura do canvas
  );

  // Cria a wave de baixo
  const waveBottom = new Wave(
    'waveBottom',
    '#ff3366',
    30,
    0.004,
    0.02,
    200
  );

  // Função de animação (loop infinito)
  function animate() {
    // Desenha as duas waves
    waveTop.draw();
    waveBottom.draw();

    // Chama o próximo frame
    requestAnimationFrame(animate);
  }

  // Inicia a animação
  animate();
});
