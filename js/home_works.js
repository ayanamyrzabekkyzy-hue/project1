//Homework 1 (part 1)
const gmailInput = document.querySelector ('#gmail_input')
const gmailButton = document.querySelector ('#gmail_button')
const gmailResult = document.querySelector ('#gmail_result')

const regExp = /^(?!\.)(?!.*\.\.)([a-zA-Z0-9._%+-]{3,})@gmail\.com$/

gmailButton.onclick = () => {
    if (regExp.test(gmailInput.value)) {
        gmailResult.innerHTML = "Your gmail is valid"
        gmailResult.style.color = "green"
    } else {
        gmailResult.innerHTML = "Your gmail is not valid"
        gmailResult.style.color = "red"
    }
}

//Homework 1 (part 2)
const parentBlock = document.querySelector ('.parent_block')
const childBlock = document.querySelector ('.child_block')

let positionX = 0
let positionY = 0
const totalWidth = parentBlock.clientWidth - childBlock.offsetWidth
const totalHeight = parentBlock.clientHeight - childBlock.offsetHeight

const moveBlock = () => {
    if (positionX < totalWidth && positionY === 0) {
        childBlock.style.left = `${positionX}px`;
        positionX++;
        requestAnimationFrame(moveBlock);
    } 
    else if (positionX >= totalWidth && positionY < totalHeight) {
        childBlock.style.top = `${positionY}px`;
        positionY++;
        requestAnimationFrame(moveBlock);
    }
    else if (positionX > 0 && positionY >= totalHeight) {
        childBlock.style.left = `${positionX}px`;
        positionX--;
        requestAnimationFrame(moveBlock);
    } 
    else if (positionX <= 0 && positionY > 0) {
        childBlock.style.top = `${positionY}px`;
        positionY--;
        requestAnimationFrame(moveBlock);
    } 
    else if (positionX === 0 && positionY === 0) {
        requestAnimationFrame(moveBlock);
    }
};

moveBlock();

//Homework 2
const secondsBlock = document.querySelector('#seconds');
const startBtn = document.querySelector('#start');
const stopBtn = document.querySelector('#stop');
const resetBtn = document.querySelector('#reset');
let count = 0;
let timerId = null;
let isRunning = false;
const updateTimer = () => {
    count++;
    secondsBlock.innerText = count;
};
startBtn.onclick = () => {
    if (!isRunning) {
        isRunning = true;
        timerId = setInterval(updateTimer, 1000);
    }
};
stopBtn.onclick = () => {
    clearInterval(timerId);
    isRunning = false;
};
resetBtn.onclick = () => {
    clearInterval(timerId); 
    isRunning = false;    
    count = 0;              
    secondsBlock.innerText = count; 
};