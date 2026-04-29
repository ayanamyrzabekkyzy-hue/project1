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
const childBlock = document.querySelector ('.child_block')

let position = 0

const moveBlock = () => {
    if (position < 449) {
        childBlock.style.left =  `${position}px`
        position++
       requestAnimationFrame(moveBlock)
    }
}
moveBlock ()
