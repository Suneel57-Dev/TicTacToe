let btns= document.querySelectorAll(".btn");
let reset= document.querySelector('#reset');
let newGame = document.querySelector('#new-game');
let parah = document.querySelector('p');
let msgContainer = document.querySelector('.msg-container');

let turnX= true;    //playerX
let count= 0;
let arr= [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        if(turnX){
            btn.innerText= "X";
            turnX = false;
            count += 1;
        }else{
            btn.innerText= "O";
            turnX= true;
            count += 1;
        }
        if(count==9){
            draw();
        }
        btn.disabled = true;
        checkWinner();
    });
});

const checkWinner = () => {
    for(pattern of arr){
        let posVal1=btns[pattern[0]].innerText;
        let posVal2=btns[pattern[1]].innerText;
        let posVal3=btns[pattern[2]].innerText;

        if(posVal1 != "" && posVal2 != "" && posVal2 != ""){
            if(posVal1 === posVal2 && posVal2 === posVal3){
                showWinner(posVal1);
            }
        }
    }
}



const showWinner = (winner) => {
    parah.innerText= `congratulations, ${winner} is the winner`;
    msgContainer.classList.remove('hide');
    disableBtns();
};

const disableBtns = () => {
    for(let btn of btns){
        btn.disabled= true;
    }
}

const resetGame = () => {
    turnX = true;
    count=0;
    enableBtns();
    msgContainer.classList.add('hide');
}

const enableBtns = () => {
    for(let btn of btns){
        btn.disabled = false;
        btn.innerText = "";
    }
   
}

const draw = () => {
    parah.innerText = "Out of moves, so we decided as a draw";
    msgContainer.classList.remove('hide');
}

reset.addEventListener("click",resetGame);
newGame.addEventListener('click',resetGame);