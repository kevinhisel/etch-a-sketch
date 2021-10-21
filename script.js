const DEFAULT_SQ = 16;
const container = document.querySelector('#container');

createGrid(DEFAULT_SQ);

function createGrid(gridSize) {
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