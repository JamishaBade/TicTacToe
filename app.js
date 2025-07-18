let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-button");
let newGameBtn=document.querySelector('#new-btn');
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turnO = true; // playerX, playerO

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2 ,4 ,6],
    [3, 4, 5],
    [6, 7, 8],
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if(turnO){
            box.innerText="X";
            turnO=false;

        }
        else{
            box.innerText="O";
            turnO=true;

        }

        box.disabled=true;//this will disable the button after once clikced
        checkWinner();
    });
});

const resetGame=()=>{
turnO=true;
enableBoxes();
msgContainer.classList.add("hide");
}

const disableBoxes=()=>{
    for(let box of boxes){
    box.disabled=true;
    }
}
const enableBoxes=()=>{
    for(let box of boxes){
    box.disabled=false;
    box.innerText='';
    }
}

const showWinner=(winner)=>{
    msg.innerText=`Congratulations, Winner Is ${winner}`;
    msgContainer.classList.remove("hide");
}
const showDraw=()=>{
    msg.innerText=`The game was draw. Please Try Again`;
    msgContainer.classList.remove("hide");

}

const checkWinner=()=> {
    for(let pattern of winPatterns){


    let pos1Val=boxes[pattern[0]].innerText;
    let pos2Val=boxes[pattern[1]].innerText;
    let pos3Val=boxes[pattern[2]].innerText;


    if(pos1Val !="" && pos2Val !="" && pos3Val!=""){
        if(pos1Val===pos2Val&&pos2Val===pos3Val){
         console.log("winner",pos1Val);
          disableBoxes();
         showWinner(pos1Val);
         return;
        }

    }

  const allBoxesFilled = [...boxes].every(box => box.innerText !== '');

  if (allBoxesFilled && pos1Val !== pos2Val && pos2Val !== pos3Val) {
      showDraw();
  }


};

}
newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);