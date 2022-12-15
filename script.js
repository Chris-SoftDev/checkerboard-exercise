// Your JS goes here
function squareRandomColor(numGen){
    let square = document.createElement('div');
    square.style.float = 'left';
    square.style.paddingBottom = '11.1%';
    square.style.width = '11.1%';
    square.style.height = '11.1%';
    square.style.backgroundColor = colorArr[numGen(0, colorArr.length-1)];
    body.appendChild(square)
}

function randomNumber(min, max) {
    return Math.round(Math.random() * (max - min + 1) + min);
}

function flashingSquares() {
    // body.innerHTML = '';
    for (i=0; i<75; i++) {
        squareRandomColor(randomNumber);
    }
}

function bgAudio() {
    let audio = document.createElement('embed');
    audio.src = 'music.mp3';
    audio.autoplay = 'autoplay';
    audio.loop = 'true';
    // audio.hidden = 'true';
    body.appendChild(audio);
}

var time = 1;
var colorArr = ['red', 'green', 'blue', 'purple', 'yellow', 'white', 'black', 'grey', 'aqua', 'aquamarine', 'blueviolet', 'orange', 'brown', 'seagreen', 'darkblue', 'cyan', 'bisque', 'crimson'];

const body = document.querySelector('body');
body.style.display = 'flex';
body.style.flexWrap = 'wrap';

bgAudio();
flashingSquares();
setInterval(flashingSquares, 2000);