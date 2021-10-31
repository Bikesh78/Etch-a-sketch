const body = document.querySelector('body');
const container = document.createElement('div');
container.classList.add('container');
body.appendChild(container);
const grids= document.createElement('div');
grids.classList.add('square');
// creage new div element and append it to container each time
for (let i=0; i<16*16; i++){
    const grids= document.createElement('div');
    grids.classList.add('square');
    container.appendChild(grids);
}
container.addEventListener('mouseover',function(e){
   // console.log(e.target.classList);
    
    if(e.target.classList.value === 'square'){
        e.target.style.backgroundColor = "black";
    }
   
});
console.log(grids);
const clear = document.createElement('button');
clear.classList.add('clear');
clear.textContent= 'Clear';
clear.addEventListener('click', function(){
    colorOfGrid = document.querySelectorAll('.square');
   // console.log(colorOfGrid);
    colorOfGrid.forEach(square =>{
        square.style.backgroundColor ="";
    });
});

body.appendChild(clear);