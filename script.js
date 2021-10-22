const DEFAULT_GRID = 16;
const MAX_GRID = 100;
const container = document.querySelector('#container');
const button = document.querySelector('button');

createGrid();
button.addEventListener('click', () => {
    clearGrid();
    let newSize = Number(window.prompt(`How many squares per row for your new grid? (1 - ${ MAX_GRID })`, DEFAULT_GRID));
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

            square.addEventListener('mouseover', () => {
                square.style.backgroundColor = `hsl(${ Math.floor(Math.random() * 360) }, 100%, 50%)`;
            });
        }
    }
}

function clearGrid() {
    const rows = document.querySelectorAll('.row');
    rows.forEach(row => row.parentElement.removeChild(row));
}