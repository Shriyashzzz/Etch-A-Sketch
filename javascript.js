

makeGrid()
const mainContainer = document.querySelector(".mainContainer")


const askUserSquaresBtn = document.createElement('button')
askUserSquaresBtn.textContent = "Custom Grid"
askUserSquaresBtn.classList.add("Button")

askUserSquaresBtn.addEventListener('click',userPromptGrid)
mainContainer.before(askUserSquaresBtn);

let mainPage = document.querySelector("#page")
let gridSize = document.createElement('p');
gridSize.textContent = '16 X 16';
mainPage.appendChild(gridSize);

function userPromptGrid(){
    usergivenSquares = prompt("How many number of squares per side for the new grid?", 16);
    if(usergivenSquares == null){
        console.log(" Event Custom Grid Cancelled")
        return
    }
    else if(usergivenSquares <=100 && usergivenSquares>0){ 
        gridSize.textContent = `${usergivenSquares} X ${usergivenSquares}`;
        makeGrid(usergivenSquares);
        const squares = document.querySelectorAll(".square");
        squares.forEach((square) =>{
            square.style.height = `${(672 / usergivenSquares)}px`
            square.style.width = `${(672 / usergivenSquares)}px`
        })
        console.log(squares[1].style.height)
        

    }else{
        return userPromptGrid();
    }
}

function makeGrid(givenSquare = 16){
    const mainContainer = document.querySelector(".mainContainer")
    mainContainer.replaceChildren();
    for(let i =0; i <(givenSquare*givenSquare);i++){
    const square = document.createElement("div")
    square.classList.add("square")
    square.addEventListener('mouseenter', () =>{  
        square.style.backgroundColor = "black";
    })
    mainContainer.appendChild(square)
    }
}



