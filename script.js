let gridContainer = document.querySelector('.grid-container');
let gridSizeBtn=document.getElementById('grid-size-controller');
let width = gridContainer.offsetWidth;
let height= gridContainer.offsetHeight;
// gridContainer.style.height=String(width);
let erase=0;
console.log("Container width :"+width);
console.log("Container height:"+height);
let gridSize=16;

// console.log(boxSize);

// "27.625px 27.625px 27.625px 27.625px 27.625px 27.625px 27.625px 27.625px 27.625px 27.625px 27.625px 27.625px 27.625px 27.625px"+" 27.625px 27.625px"
function createGrid(){
    // emptyGrid();
    let boxWidth=width/gridSize;
    let boxHeight=height/gridSize;
    console.log("Box width: "+boxWidth);
    console.log(`Box height: ${boxHeight}`);
    gridContainer.style.setProperty('grid-template-columns',`repeat(${gridSize},1fr)`);
    gridContainer.style.setProperty('grid-template-rows',`repeat(${gridSize},1fr)`);
    for(i=0;i<gridSize;i++){
        for(j=0;j<gridSize;j++){
            let box=document.createElement('div');
            // box.style.display="inline-flex";
            box.textContent=`${i}`;
            box.classList.add('box');
            box.style.backgroundColor="white";
            // box.style.color="white";
            box.style.width=String(boxWidth);
            box.style.height=String(boxHeight);
            box.style.fontSize='0px';
            // box.style.width=String(boxSize);
            box.addEventListener("mouseover",ev=>box.style.backgroundColor="#000");
            gridContainer.appendChild(box); 
            
        }
    }
    let box=gridContainer.childElementCount;
    console.log(box);
}
function emptyGrid(){
    while(gridContainer.firstChild){
        gridContainer.firstChild.remove();
        // console.log(box);
    }
    return;
}
createGrid();

gridSizeBtn.addEventListener('click',function(){
    gridSize=prompt("Enter grid size(1-200)",16);
    if(gridSize>=1 && gridSize<=200){
        emptyGrid();
        createGrid();
    }
    else{
        gridSize=16;
        alert("Between 1 and 200");
        emptyGrid();
        createGrid();
    }
    
    // currBox.forEach(item=>{
    //     item.addEventListener('hover',item.style.backgroundColor="#000");
    // });
    // currBox=Array.from(currBox);
    // console.log(currBox);
});
let currBox = document.querySelectorAll('.box');
// currBox.forEach(item=>{
//     console.log(item);
//     item.addEventListener("click",item.style.setProperty('backgroundColor','#000000'));
// });
// currBox=Array.from(currBox);
console.log(currBox);
// MouseEvent.addEventListener('hover',console.log(currBox[i]))); //changeBoxColor()
// currBox.addEventListener('hover',changeBoxColor());
function changeBoxColor(){ 
    currBox.style.backgroundColor='#899843';
}
// changeBoxColor();
let clearButton = document.getElementById('clear');
clearButton.onclick=function(){
    console.log("Clear button clicked");
    emptyGrid();
    createGrid();
    return;
}
let eraseButton = document.getElementById('erase');
eraseButton.onclick=function(){
    // createGrid();
    currBox = document.querySelectorAll('.box');
    console.log("Erase button clicked");
    // currBox=Array.from(currBox);
    
    for(let i=0;i<currBox.length;i++){
        console.log(currBox[i]);
        currBox.item(i).addEventListener("mouseover",ev=>currBox.item(i).style.backgroundColor='#fff');
    }
}
let blackColor=document.getElementById('black');
blackColor.onclick = function(){
    currBox = document.querySelectorAll('.box');
    console.log("Black color button clicked");
    // currBox=Array.from(currBox);
    for(let i=0;i<currBox.length;i++){
        console.log(currBox[i]);
        currBox.item(i).addEventListener("mouseover",ev=>currBox.item(i).style.backgroundColor='#000');
    }
}

let colorChooser = document.getElementById('choose-color');
let inputColor = document.getElementById('color-chooser');
colorChooser.onclick = function(){
    currBox = document.querySelectorAll('.box');
    console.log("Choose color button clicked");
    for(let i=0;i<currBox.length;i++){
        console.log(currBox[i]);
        currBox.item(i).addEventListener("mouseover",ev=>currBox.item(i).style.backgroundColor=inputColor.value);
    }
}

let grayScale = document.getElementById('gray-scale');
grayScale.onclick = function(){
    currBox = document.querySelectorAll('.box');
    console.log("Gray scale button clicked");
    for(let i=0;i<currBox.length;i++){
        console.log(currBox[i]);
        let clr=220;
        // currBox.item(i).style.grayScale='10';
        currBox.item(i).addEventListener("mouseover",ev=>{
            // clr = 220;
            currBox.item(i).style.backgroundColor=`rgb(${clr},${clr},${clr})`;
            clr-=20;
            // currBox.item(i).style.backgroundColor.filter='';
        });
    }
}   
