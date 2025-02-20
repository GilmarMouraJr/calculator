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
    if (b != 0){
        return a / b;
    }
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
    secondNumber = 0;
    isSecondNum = false;
}

function addToDisplay(){
    if(operatorSelected){
        display.textContent = "";
        operatorSelected = false;
    }
    
    if(isFirstNum && !isSecondNum){
        isSecondNum = true;
    }

    let number = this.textContent;
    display.textContent += number;
    currentNum = Number(display.textContent);
}

function processOperator(){
    operatorSelected = true;
    if (!isFirstNum && display.textContent!=""){
        firstNumber = currentNum;
        isFirstNum = true;
        operator = this.textContent;
    } else if(isSecondNum){
        secondNumber = currentNum;
        operate(firstNumber, secondNumber, operator);
        firstNumber = currentNum;
        operator = this.textContent;
    }
}

function equals(){
    if(isFirstNum && isSecondNum){
        secondNumber = currentNum;
        operate(firstNumber, secondNumber, operator);
        firstNumber = currentNum;
        operatorSelected = true;
    }
}

function clear(){
    display.textContent = "";
    reset();
}

function reset(){
    firstNumber = 0;
    secondNumber = 0;
    currentNum = 0;
    operator = "";
    isFirstNum = false;
    isSecondNum = false;
    operatorSelected = false;
}

const display = document.getElementById("displayP");
let currentNum = display.textContent;

let firstNumber = 0;
let secondNumber = 0;
let operator = "";
let isFirstNum = false;
let isSecondNum = false;
let operatorSelected = false;

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

const clearBtn = document.getElementById("clear");
clearBtn.addEventListener("click", clear)