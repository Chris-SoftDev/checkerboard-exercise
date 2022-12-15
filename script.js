function squareRandomColor(){
    let square = document.createElement('div');
    square.style.float = 'left';
    square.style.paddingBottom = '11.1%';
    square.style.width = '11.1%';
    square.style.height = '11.1%';
    square.style.backgroundColor = colorArr[randomNumber(0, colorArr.length-1)];
    body.appendChild(square)
}

function randomNumber(min, max) {
    return Math.round(Math.random() * (max - min + 1) + min);
}

function flashingSquares() {
    body.innerHTML = '';
    for (i=0; i<75; i++) {
        squareRandomColor();
    }
}

var colorArr = ['red', 'green', 'blue', 'purple', 'yellow', 'white', 'black', 'grey', 'aqua', 'aquamarine', 'blueviolet', 'orange', 'brown', 'seagreen', 'darkblue', 'cyan', 'bisque', 'crimson'];

const body = document.querySelector('body');
body.style.display = 'flex';
body.style.flexWrap = 'wrap';

flashingSquares();
setInterval(flashingSquares, 2000);