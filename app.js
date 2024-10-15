let boxes = document.querySelectorAll(".box")
let resetbtn  = document.querySelector("#reset-btn")
let newgamebtn  = document.querySelector("#new-btn")
let msgContainer = document.querySelector(".msg-container")
let msg = document.querySelector(".msg")


let turn0 = true

const winpattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame = () => {
    turn0 = true;
    enablebox();
    msgContainer.classList.add("hide")
} 

boxes.forEach((box) => {
    box.addEventListener ('click', () => {
        console.log("box was clicked")
        if (turn0) {
            box.innerText = "O"
            turn0 = false
        } else {
            box.innerText = "X"
            turn0 = true
        }
        box.disabled = true;

        checkwinner();
    });
 });

const disablebox = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}

const enablebox = () => {
    for (let box of boxes) {
        box.enabled = true;
        box.innerText = ""
    }
}
const showWinner = (winner) => {
    msg.innerText = `Congratulation, Winner is ${winner}`;
    msgContainer.classList.remove("hide")
    disablebox();
}

const checkwinner = () => {
    for (let pattern of winpattern) {
        let postVal1 = boxes[pattern[0]].innerText; 
        let postVal2 = boxes[pattern[1]].innerText; 
        let postVal3 = boxes[pattern[2]].innerText;
        
        if (postVal1 !="" && postVal2 !="" && postVal3 !="") {
            if (postVal1 === postVal2 && postVal2 === postVal3)
            console.log("winner", postVal1);
            showWinner(postVal1);

        }
    }
} 

newgamebtn.addEventListener("click", resetGame)
resetbtn.addEventListener("click", resetGame)