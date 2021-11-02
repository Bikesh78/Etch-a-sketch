const body = document.querySelector('body');
const container = document.createElement('div');
container.classList.add('container');
body.appendChild(container);

function generateGrid(gridSize){
    // creage new div element and append it to container each time
    for (let i=0; i<gridSize; i++){
        const column =  document.createElement('div');
        column.classList.add('column');
        container.appendChild(column);
        for (let j=0; j< gridSize; j++){
            const grids= document.createElement('div');
            grids.classList.add('square');
            column.appendChild(grids);
        }
        
    }
    
}
generateGrid(16);

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
    clearColor();
    let oldGridNum = document.querySelectorAll('.column').length;
    let newGridNum = newGrid();
    removeOldGrid(oldGridNum);
    generateGrid(newGridNum);
    resizeSquare(newGridNum);
});

function removeOldGrid(oldGridNum){
    for(let i = 0; i<oldGridNum; i++){
        let oldColumn= document.querySelector('.column');
        document.querySelector('.container').removeChild(oldColumn);
    }
}
function clearColor(){
    colorOfGrid = document.querySelectorAll('.square');
    //console.log(colorOfGrid);
    colorOfGrid.forEach(square =>{
        square.style.backgroundColor ="";
    });
    
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



function resizeSquare(newSize){
    const totalWidth = document.querySelector('.container').clientWidth;
    const squareWidth = (totalWidth/newSize);
    const squareHeight = squareWidth;
    dd = document.querySelector('.square');
    dd.style.clientWidth = squareWidth;
    console.log(squareWidth);
    console.log(dd.style.clientWidth);
    document.querySelector('.square').clientHeight = squareHeight;
}

body.appendChild(clear);