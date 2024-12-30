// Carrossel
let indiceAtual = 0;
const imagens = document.querySelectorAll('.carrossel img');
imagens[indiceAtual].style.display = 'block';

setInterval(() => {
    imagens[indiceAtual].style.display = 'none';
    indiceAtual = (indiceAtual + 1) % imagens.length;
    imagens[indiceAtual].style.display = 'block';
}, 3000);

// Cronômetro regressivo
const dataInicio = new Date('August 13, 2021 13:00:00').getTime();

function atualizarContagem() {
    const agora = new Date().getTime();
    const distancia = agora - dataInicio;

    const anos = Math.floor(distancia / (1000 * 60 * 60 * 24 * 365));
    const meses = Math.floor((distancia % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
    const dias = Math.floor((distancia % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
    const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

    document.getElementById('contagem').innerHTML = 
        `${anos} anos, ${meses} meses, ${dias} dias<br>` + 
        `${horas} horas, ${minutos} minutos e ${segundos} segundos`;
}

setInterval(atualizarContagem, 1000);
atualizarContagem();

// Botão de tocar música
document.getElementById('start-audio').addEventListener('click', function() {
    const audioElement = document.getElementById('background-audio');
    audioElement.volume = 1;
    audioElement.play().catch(function(error) {
        console.error('O áudio não pôde ser reproduzido:', error);
    });
});

// Abrir e fechar modal
const modal = document.getElementById('letter-modal');
const openLetterButton = document.getElementById('open-letter');
const closeLetterButton = document.getElementById('close-letter');
const backgroundAudio = document.getElementById('background-audio');

openLetterButton.addEventListener('click', () => {
    modal.style.display = 'flex';
    backgroundAudio.play();

    // Ajustar o vídeo para começar nos 7 segundos
    const video = document.getElementById('video.mp4'); // Substitua pelo ID correto do vídeo
    video.currentTime = 7;

    // Reproduzir o vídeo automaticamente
    video.play().catch(function(error) {
        console.error('O vídeo não pôde ser reproduzido automaticamente:', error);
    });
});

closeLetterButton.addEventListener('click', () => {
    modal.style.display = 'none';
});
