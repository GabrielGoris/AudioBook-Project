const botaoPlayPause = document.getElementById('play-pause');
const audioCapitulo = document.getElementById('audio-capitulo');
const botaoAvancar = document.getElementById('proximo');
const botaoVoltar = document.getElementById('anterior');
const nmroCap = document.getElementById('capitulo')
const containerBotoes = document.getElementById('container-botoes');

const numeroCapitulos = 10;
let playing = 0;
let actualCap = 1;

function playAudio() {
    audioCapitulo.play();
    botaoPlayPause.classList.remove('bi-play-circle-fill');
    botaoPlayPause.classList.add('bi-pause-circle-fill');
}

function pauseAudio() {
    audioCapitulo.pause();
    botaoPlayPause.classList.add('bi-play-circle-fill');
    botaoPlayPause.classList.remove('bi-pause-circle-fill');
}

function playOrPause(){
    if (playing === 0){
        playAudio();
        playing = 1;
    }else{
        pauseAudio();
        playing = 0;
    }
}

function trocarNmroFaixa(){
    nmroCap.innerText = 'Capítulo ' + actualCap;
}

function nextCap(){
    if (actualCap === numeroCapitulos) {
        actualCap = actualCap;
    } else {
        actualCap = actualCap + 1;
        trocarNmroFaixa()
    }

    audioCapitulo.src = "./books/dom-casmurro/" + actualCap + ".mp3";
    playAudio();
    playing =1;
}

function backCap(){
    if (actualCap === 1) {
        actualCap = actualCap;
    } else {
        actualCap = actualCap - 1;
        trocarNmroFaixa()
    }

    audioCapitulo.src = "./books/dom-casmurro/" + actualCap + ".mp3";
    playAudio();
    playing = 1;
}


botaoAvancar.addEventListener('click', nextCap);
botaoVoltar.addEventListener('click', backCap);
botaoPlayPause.addEventListener('click', playOrPause);
