const DEFAULT_GRID = 16;
const MAX_GRID = 32;
const container = document.querySelector('#container');
const button = document.querySelector('button');

createGrid();
button.addEventListener('click', () => {
    clearGrid();
    createGrid();
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
                square.style.backgroundColor = 'red';
            });
        }
    }
}

function clearGrid() {
    const rows = document.querySelectorAll('.row');
    rows.forEach(row => row.parentElement.removeChild(row));
}