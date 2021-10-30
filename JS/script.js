const body = document.querySelector('body');
const container = document.createElement('div');
container.classList.add('container');
body.appendChild(container);
const grid= document.createElement('div');
grid.classList.add('grid');
// creage new div element and append it to container each time
for (let i=0; i<16*16; i++){
    const grid= document.createElement('div');
    grid.classList.add('grid');
    container.appendChild(grid);
}
