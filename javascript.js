

makeGrid()
const mainContainer = document.querySelector(".mainContainer")

const btnContainer = document.createElement("div");
btnContainer.classList.add("btnContainer");

const askUserSquaresBtn = document.createElement('button')
askUserSquaresBtn.textContent = "Custom Grid"
askUserSquaresBtn.classList.add("Button")
btnContainer.appendChild(askUserSquaresBtn)

askUserSquaresBtn.addEventListener('click',userPromptGrid)


mainContainer.before(btnContainer);

let resetBtn = document.createElement("button");
resetBtn.textContent = "Reset Grid"
resetBtn.classList.add('Button');
btnContainer.appendChild(resetBtn);
let gridSize ;
resetBtn.addEventListener('click',()=>{
    makeGrid(+gridSize)
    appendSquareVals()
})


let mainPage = document.querySelector("#page")
let gridSizeText = document.createElement('p');
gridSizeText.classList.add("para")
gridSizeText.textContent = '16 X 16';
gridSizeText.style.fontSize = "20px"
mainContainer.before(gridSizeText);





function userPromptGrid(){
    usergivenSquares = prompt("How many number of squares per side for the new grid?", 16);
    if(usergivenSquares == null){
        console.log(" Event Custom Grid Cancelled")
        return
    }
    else if(usergivenSquares <=100 && usergivenSquares>0){ 
        gridSizeText.textContent = `${usergivenSquares} X ${usergivenSquares}`;
        gridSize = usergivenSquares;
        makeGrid(usergivenSquares);
        appendSquareVals()
        

    }else{
        return userPromptGrid();
    }
}

function makeGrid(givenSquare =16){
    const mainContainer = document.querySelector(".mainContainer")
    mainContainer.replaceChildren();
    for(let i =0; i <(givenSquare*givenSquare);i++){
    const square = document.createElement("div")
    square.classList.add("square")
    square.addEventListener('mouseenter', () =>{  
        square.style.backgroundColor = getRandomColor();
    })
    mainContainer.appendChild(square)
    }
}


function appendSquareVals(){
    const squares = document.querySelectorAll(".square");
        squares.forEach((square) =>{
            square.style.height = `${(672 / usergivenSquares)}px`
            square.style.width = `${(672 / usergivenSquares)}px`
        })
}


function getRandomColor(){
    const n = Math.floor(Math.random() * 0xffffff).toString(16);
    return '#' + n.padStart(6, '0'); 
}