function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(firstNumber, secondNumber, operator) {
    if (operator === "+") {
        return add(firstNumber, secondNumber)
    }
    if (operator === "-") {
        return subtract(firstNumber, secondNumber)
    }
    if (operator === "x") {
        return multiply(firstNumber, secondNumber)
    }
    if (operator === "/") {
        return divide(firstNumber, secondNumber)
    }
}

function addToDisplay(){
    let number = this.textContent;
    display.textContent += number;
}


let firstNumber = 0;
let secondNumber = 0;
let operator = "";
const display = document.getElementById("displayP");

const numBtn = document.querySelectorAll(".num");
numBtn.forEach((btn) => {
    btn.addEventListener("click", addToDisplay);
})