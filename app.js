let boxes = document.querySelectorAll(".box");
let resetButton = document.querySelector("#reset-game");
let newGame= document.querySelector("#new-game");
let messContainer = document.querySelector(".mess");
let msg = document.querySelector("#msg")

let turnO = true;
const winPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetGame = () => {
  turnO = true;
  enableBoxes();
  messContainer.classList.add("hide");
}
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("box was clicked");
    if (turnO) {
      box.innerText = "O";
      turnO = false;
    }
    else {
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;
    cheakWinner();
  })
})

const desabeBoxes = () => {
  for(let b of boxes){
    b.disabled = true;
  }
}
const enableBoxes = () => {
  for(let b of boxes){
    b.disabled = false;
    b.innerText = ""
  }
}
const showWinner = (winner)=>{
  msg.innerText = (`Congratulation, Winner is ${winner}`);
  messContainer.classList.remove("hide");
  desabeBoxes();
}

const cheakWinner = () => {
  for (let pattern of winPattern) {
    let pos0 = boxes[pattern[0]].innerText;
    let pos1 = boxes[pattern[1]].innerText;
    let pos2 = boxes[pattern[2]].innerText;

    if(pos0!="" && pos1!="" && pos2!=""){
      if(pos0===pos1 && pos1 === pos2){
        console.log(`winner = ${pos0}` );
        showWinner(pos0);
      }
    }
  }
}

newGame.addEventListener("click",resetGame)
resetButton.addEventListener("click",resetGame)