const DEFAULT_SQ = 16;
const container = document.querySelector('#container');

createGrid(DEFAULT_SQ);

function createGrid(gridSize) {
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            const square = document.createElement('div');
            square.className = 'square';
            square.style.height    = `${ 100 / gridSize }%`;
            square.style.flexBasis = `${ 100 / gridSize }%`;
            container.appendChild(square);

            square.addEventListener('mouseover', () => {
                square.style.backgroundColor = 'red';
            });
        }
    }
}