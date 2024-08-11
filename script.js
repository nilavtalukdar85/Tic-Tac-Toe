let boxes = document.querySelectorAll('.box');
let resetBtn = document.querySelector('.reset');
let turnO = true;
const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
boxes.forEach((box) => {
box.addEventListener('click', () => {
    if(turnO == true) {
        box.innerHTML = '<span>O</span>';
        turnO = false;
        }  else {
            box.innerHTML = '<span>X</span>';
            turnO = true;
        }
        box.disabled = true;
        box.disabled.style = 'none';

        checkWinner();
    });
});
const disabled = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
}
const enabled = () => {
    for(let box of boxes) {
        box.disabled = false;
    }
}
const checkWinner = () => {
    for(let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        if(pos1Val != '' && pos2Val != '' && pos3Val != '') {
            if(pos1Val == pos2Val && pos2Val == pos3Val) {
                alert(`${pos1Val} is the winner`);
                disabled();
            }
        }
    }
}
const resetGame = () => {
    for(let box of boxes) {
        box.innerHTML = '<span></span>';
    }
    enabled();
}
resetBtn.addEventListener('click', resetGame);
