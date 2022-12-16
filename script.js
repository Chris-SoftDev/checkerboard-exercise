function makeCanvas(num) {
    document.body.style.display = 'flex';
    document.body.style.flexWrap = 'wrap';
    
    for (i=0; i<num; i++) {
        drawSquares();
    }
}

function drawSquares(){
    let square = document.createElement('div');
    square.classList.add('squares');
    square.style.float = 'left';
    square.style.paddingBottom = '1%';
    square.style.width = '1%';
    square.style.height = '1%';
    square.style.backgroundColor = 'white';
    square.addEventListener('mouseenter', (e) => {
        e.target.style.backgroundColor = randomColors();
    })
    document.body.appendChild(square);
}

function randomColors() {
    function randomNumber(min, max) {
        return Math.round(Math.random() * (max - min + 1) + min);
    }
    
    var colorArr = ['red', 'green', 'blue', 'purple', 'yellow', 'white', 'black', 'grey', 'aqua', 'aquamarine', 'blueviolet', 'orange', 'brown', 'seagreen', 'darkblue', 'cyan', 'bisque', 'crimson'];
    return colorArr[randomNumber(0, colorArr.length-1)];
}

makeCanvas(8000)