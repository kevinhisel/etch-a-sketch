const DEFAULT_GRID = 16;
const MAX_GRID = 100;
const container = document.querySelector('#container');
const button = document.querySelector('button');
let   lastGrid;

createGrid();
button.addEventListener('click', () => {
    clearGrid();
    let newSize = Number(window.prompt(`How many squares per row for your new grid? (1 - ${ MAX_GRID })`, lastGrid));
    if (newSize > 0 && newSize <= MAX_GRID) {
        createGrid(newSize);
    } else {
        createGrid();
    }
});

function createGrid(gridSize = DEFAULT_GRID) {
    for (let i = 0; i < gridSize; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        container.appendChild(row);
        for (let j = 0; j < gridSize; j++) {
            const square = document.createElement('div');
            square.className = 'square';
            row.appendChild(square);
            
            let lightness = 90;
            let hue;
            square.addEventListener('mouseover', () => {
                if (square.style.backgroundColor === '') {
                    hue = Math.floor(Math.random() * 360);
                    square.style.backgroundColor = `hsl(${ hue }, 100%, ${ lightness }%)`;
                } else {
                    square.style.backgroundColor = `hsl(${ hue }, 100%, ${ lightness -= 10 }%)`;
                }
            });
        }
    }
    lastGrid = gridSize;
}

function clearGrid() {
    const rows = document.querySelectorAll('.row');
    rows.forEach(row => row.parentElement.removeChild(row));
}