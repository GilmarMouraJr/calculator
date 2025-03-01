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
    if (operator === "x" || operator === "X") {
        currentNum = multiply(firstNumber, secondNumber)
    }
    if (operator === "/") {
        if(secondNumber === 0){
            errorOccurred = true;
            display.textContent = "ERROR!"
            return;
        }
        currentNum = divide(firstNumber, secondNumber)
    }
    display.textContent = currentNum;
    secondNumber = 0;
    isSecondNum = false;
}

function addToDisplay(key){
    console.log(display.textContent);
    if(display.textContent === "0"){
        display.textContent = ""
    }

    if(operatorSelected || errorOccurred){
        display.textContent = "";
        operatorSelected = false;
        errorOccurred = false;
    }
    
    if(isFirstNum && !isSecondNum){
        isSecondNum = true;
    }

    let number;
    if(isNaN(key)){
        number = this.textContent
    } else {
        number = key;
    }
    display.textContent += number;
    currentNum = Number(display.textContent);
}

function processOperator(key){
    operatorSelected = true;
    if (!isFirstNum && display.textContent!=""){
        firstNumber = currentNum;
        isFirstNum = true;
    } else if(isSecondNum){
        secondNumber = currentNum;
        operate(firstNumber, secondNumber, operator);
        if(errorOccurred){
            reset();
            operatorSelected = true;
            errorOccurred = false;
            return;
        }
        firstNumber = currentNum;
    }
    if(typeof key === "string"){
        operator = key;
    } else {
        operator = this.textContent;
    }
}

function equals(){
    if(isFirstNum && isSecondNum){
        secondNumber = currentNum;
        operate(firstNumber, secondNumber, operator);
        if(errorOccurred){
            reset();
            return;
        }
        firstNumber = currentNum;
        operatorSelected = true;
    }
}

function clear(){
    display.textContent = "0";
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

function addPoint(){
    let point = ".";
    if(display.textContent.includes(point) || display.textContent==""){
        return;
    }
    display.textContent += point;
}

function eraseLast(){
    newText = display.textContent.slice(0, -1);
    if(newText === ""){
        newText = "0";
        
    }
    display.textContent = newText;
    currentNum = Number(display.textContent);

    if (isSecondNum) {
        secondNumber = currentNum;
    } else {
        firstNumber = currentNum;
    }
}


const display = document.getElementById("displayP");
const ops = ["+","-","x","/"];
let currentNum = display.textContent;

let firstNumber = 0;
let secondNumber = 0;
let operator = "";
let isFirstNum = false;
let isSecondNum = false;
let operatorSelected = false;
let errorOccurred = false;

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

const pointBtn = document.getElementById("point");
pointBtn.addEventListener("click", addPoint)

const backBtn = document.getElementById("backspace");
backBtn.addEventListener("click", eraseLast)

document.addEventListener("keydown", (event) => {
    if(!isNaN(event.key)){
        addToDisplay(event.key);
    }

    if(ops.includes(event.key)){
        processOperator(event.key);
    }

    if(event.key == "Enter" || event.key == "="){
        event.preventDefault;
        equals();
    }
    
    if(event.key == "Backspace"){
        eraseLast();
    }

    if(event.key === "." || event.key === ","){
        addPoint();
    }

    if(event.key === "c" || event.key === "C"){
        clear();
    }
})