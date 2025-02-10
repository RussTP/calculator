//global number and operator for input function
const digitButtons = document.querySelectorAll(".digit");
const operatorButtons = document.querySelectorAll(".operator");
const display= document.querySelector("#display");
const clearButton = document.querySelector(".clear");
const equalsButton = document.querySelector("#equals");

let num1 = "";
let operator = "";
let num2 = "";
let resultDisplayed = false;

//math logic, addition, subtraction, multiplication, division
function add(a, b) {
return a + b;
}

function subtraction(a, b) {
return a - b;
}

function multiply(a, b) {

    return  a * b; 
}
// error message for dividing by 0 
function divide(a, b) {
    if (b === 0) {
        return "Error: 0 is not divisible";
    }
return a / b;
}

//math input logic for user  
function operate(operator, a, b) {
    a = parseFloat(a);
    b = parseFloat(b);

    switch(operator) {
        case "+":
            return add(a, b);
        case "-":
            return subtraction(a, b);
        case "*":
            return multiply(a, b);
        case "/":
            return divide(a, b);
        default:
            return null;
    }
}



let buttonInput = "";
//digit  display & store values clicked function 
function handleDigitClick(e) {
const value = e.target.value;

if (resultDisplayed) {
num1 = value;
num2 = "";
operator = "";
resultDisplayed = false;
} else if (!operator) {
    num1 += value;
} else {
    num2 += value;
}
display.textContent = num1 + (operator ? " " + operator + " " + num2 : "");
}


function handleOperatorClick(e) {
    if (!num1) return;

    if (num1 && num2) {
        equals();
    }
    operator = e.target.value;
    display.textContent = num1 + " " + operator;
}


function equals() {
    if (num1 && operator && num2) {
        const result = operate(operator, num1, num2);
        display.textContent = "";
        display.textContent = result;
    
        num1 = result.toString();
        num2 = "";
        operator = "";
        resultDisplayed = true;
        }
    }

function clearDisplay() {
    num1 = "";
    operator = "";
    num2 = "";
    display.textContent = "";
    resultDisplayed = false;
}
digitButtons.forEach(button => button.addEventListener("click", handleDigitClick));
operatorButtons.forEach(button => button.addEventListener("click", handleOperatorClick));
equalsButton.addEventListener("click", equals);
clearButton.addEventListener("click", clearDisplay);