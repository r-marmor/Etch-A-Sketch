let color = 'black';
const board = document.querySelector(".board");

let populateBoard = (size) => {
    // let squares = board.querySelectorAll('div');
    // squares.forEach(div => div.remove());
    board.style.gridTemplateColumns = `repeat(${size},  1fr)`;
    board.style.gridTemplateRows = `repeat(${size},  1fr)`;

    let i = 0;
    while (i < size * size) {
        let square = document.createElement('div');
        square.addEventListener('mouseover', colorSquare);
        square.style.backgroundColor = "white";
        board.insertAdjacentElement("beforeend", square);
        i++;
    }
};

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

function colorSquare(e) {
    if (e.type === 'mouseover' && !mouseDown) return;
        if (color === 'random') {
            const randomR = Math.floor(Math.random() * 256);
            const randomG = Math.floor(Math.random() * 256);
            const randomB = Math.floor(Math.random() * 256);
            this.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
        } else {
            this.style.backgroundColor = color;
        }
    }

function changeSize(input) {
    if (input >= 2 && input <= 100) {
        populateBoard(input);
        document.querySelector('.error').style.display = 'none';
    }
    else {
        document.querySelector('.error').style.display = 'flex';
    }
}

function changeColor(choice) {
    color = choice;
}

function resetBoard() {
    let squares = board.querySelectorAll('div');
    squares.forEach(div => div.style.backgroundColor = 'white');
}

populateBoard(16);