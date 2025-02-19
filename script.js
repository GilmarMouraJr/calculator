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
        currentNum = add(firstNumber, secondNumber)
    }
    if (operator === "-") {
        currentNum = subtract(firstNumber, secondNumber)
    }
    if (operator === "x") {
        currentNum = multiply(firstNumber, secondNumber)
    }
    if (operator === "/") {
        currentNum = divide(firstNumber, secondNumber)
    }
    display.textContent = currentNum;
}

function addToDisplay(){
    if(operatorSelected){
        display.textContent = "";
        operatorSelected = false;
    }
    let number = this.textContent;
    display.textContent += number;
    currentNum = display.textContent;
}

function processOperator(){
    if (!isFirstNum){
        firstNumber = currentNum;
        isFirstNum = true;
        operator = this.textContent;
        operatorSelected = true;
    } else {
        secondNumber = currentNum;
        operate(firstNumber, secondNumber, operator);
        firstNumber = currentNum;
        operator = this.textContent;
        operatorSelected = true;
    }
}

function equals(){
    if(isFirstNum){
        secondNumber = currentNum;
        operate(firstNumber, secondNumber, operator);
    }
}

const display = document.getElementById("displayP");
let currentNum = display.textContent;

let firstNumber = 0;
let secondNumber = 0;
let operator = "";
let isFirstNum = false;
let operatorSelected = false;
let isNumSelected = false;

const numBtn = document.querySelectorAll(".num");
numBtn.forEach((btn) => {
    btn.addEventListener("click", addToDisplay);
});

const opBtn = document.querySelectorAll(".op");
opBtn.forEach((btn) => {
    btn.addEventListener("click", processOperator);
});

const equalsBtn = document.getElementById("equals");
equalsBtn.addEventListener("click", equals);