const body = document.querySelector('body');
const container = document.createElement('div');
container.classList.add('container');
body.appendChild(container);
const grids= document.createElement('div');
function generateGrid(gridSize){
    // creage new div element and append it to container each time
    for (let i=0; i<Math.pow(gridSize,2); i++){
        const grids= document.createElement('div');
        grids.classList.add('square');
        container.appendChild(grids);
    }
    return Math.pow(gridSize,2);
}
generateGrid(16)

container.addEventListener('mouseover',function(e){
   // console.log(e.target.classList);
    
    if(e.target.classList.value === 'square'){
        e.target.style.backgroundColor = "black";
    }
   
});

const clear = document.createElement('button');
clear.classList.add('clear');
clear.textContent= 'Clear';
clear.addEventListener('click', function(){
   
    let oldGridNum = clearColor();
   
    let newGridSize = newGrid();
    removeOldGrid(oldGridNum);
    generateGrid(newGridSize);
});
/*function removeOldGrid(oldGridNum){
    for(let i = 0; i<oldGridNum; i++){
        container.removeChild(grids);
    }
}*/
function clearColor(){
    colorOfGrid = document.querySelectorAll('.square');
    //console.log(colorOfGrid);
    colorOfGrid.forEach(square =>{
        square.style.backgroundColor ="";
    });
    return colorOfGrid.length;
}

function newGrid(){
    let gridInputStr = prompt('Enter the number of square you want in the grid. Keep the number less than 100');
        let gridInput = Number(gridInputStr);
    //isNaN(number) is used for comparing NaN values and returns true or false
    while(gridInputStr === '' || isNaN(gridInput) || gridInput >100){
        gridInputStr = prompt('Enter a valid number that is less than 100');
        if (gridInputStr !== null){
            gridInput = Number(gridInputStr);
        }
    }
    return gridInput;
}

body.appendChild(clear);