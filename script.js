function squareWhite(){
    let square = document.createElement('div');
    square.style.float = 'left';
    square.style.paddingBottom = '11.1%';
    square.style.width = '11.1%';
    square.style.height = '11.1%';
    square.style.backgroundColor = 'white';
    body.appendChild(square)
}

function squarePurple(){
    let square = document.createElement('div');
    square.style.float = 'left';
    square.style.paddingBottom = '11.1%';
    square.style.width = '11.1%';
    square.style.height = '11.1%';
    square.style.backgroundColor = 'purple';
    body.appendChild(square)
}

const body = document.querySelector('body');
body.style.display = 'flex';
body.style.flexWrap = 'wrap';

let overlay = document.createElement('div');
overlay.style.position = 'fixed';
overlay.style.width = '100%';
overlay.style.height = '100%';
overlay.style.backgroundImage = 'linear-gradient(to bottom, rgba(0, 0, 255, 0.80), rgba(255, 255, 255, 0.50))';
body.appendChild(overlay);

for (i=0; i<30; i++) {
        squareWhite(body);
        squarePurple(body);
}