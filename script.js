// Your JS goes here
function squareBlack(parent){
    let square = document.createElement('div');
    square.style.float = 'left';
    square.style.paddingBottom = '11.1%';
    square.style.width = '11.1%';
    square.style.height = '11.1%';
    square.style.backgroundColor = 'black';
    parent.appendChild(square)
}

function squareRed(parent){
    let square = document.createElement('div');
    square.style.float = 'left';
    square.style.paddingBottom = '11.1%';
    square.style.width = '11.1%';
    square.style.height = '11.1%';
    square.style.backgroundColor = 'red';
    parent.appendChild(square)
}

const body = document.querySelector('body');
body.style.display = 'flex';
body.style.flexWrap = 'wrap';

for (i=0; i<50; i++) {
        squareBlack(body);
        squareRed(body);
}