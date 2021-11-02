const body = document.querySelector('body');
const container = document.createElement('div');
container.classList.add('container');
body.appendChild(container);
const clear = document.createElement('button');
clear.classList.add('clear');
clear.textContent= 'Clear';
const randomColor = document.createElement('button');
randomColor.classList.add('random');
randomColor.textContent = 'Random Color'
const erase = document.createElement('button');
erase.textContent = "Erase";
const monotone = document.createElement('button');
monotone.textContent = 'Monotone';

const button = document.createElement('div');
button.setAttribute('class','button');
body.appendChild(button);
button.append(monotone);
button.appendChild(randomColor);
button.appendChild(erase);
button.appendChild(clear);

generateGrid(16);
colorSquareBlack();

monotone.addEventListener('click',() =>{
    colorSquareBlack();
});
clear.addEventListener('click', function(){
    clearColor();
    let oldGridNum = document.querySelectorAll('.column').length;
    let newGridNum = getNewGridSize();
    
    generateGrid(newGridNum);
    if (newGridNum !== undefined){
        removeOldGrid(oldGridNum);
    }    
});

randomColor.addEventListener('click',(e)=>{
    container.addEventListener('mouseover',(e) =>{
        if(e.target.classList.value === 'square'){
            e.target.style.backgroundColor = `rgb(${generateRandomNumber()},${generateRandomNumber()},${generateRandomNumber()})`;
        }
    });
});

erase.addEventListener('click',(e)=>{
    container.addEventListener('mouseover',(e) =>{
        if (e.target.classList.value === 'square'){
            e.target.style.backgroundColor = '';
        }
    });
});

function generateGrid(gridSize){
    // create new div element and append it to container each time
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
// colors square div with black when mouse hovers over it
function colorSquareBlack(){
    container.addEventListener('mouseover',function(e){
        // console.log(e.target.classList);
         if(e.target.classList.value === 'square'){
             e.target.style.backgroundColor = "black";
         } 
     });
}

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

function getNewGridSize(){
    let gridInputStr = prompt('Enter the number of square you want in the grid. Keep the number less than 100');
    if (gridInputStr === null){
       return;  
    }
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

function generateRandomNumber(){
    let randomNumber = Math.floor(Math.random() * 256);
    return randomNumber;
}