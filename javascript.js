//global number and operator for input function
const digitButtons = document.querySelectorAll(".digit");
const operatorButtons = document.querySelectorAll(".operator");
const display= document.querySelector("#display");
const clearButton = document.querySelector(".clear");
const equalsButton = document.querySelector("#equals");
const decimalButton = document.querySelector("#decBtn");
const backspaceButton = document.querySelector(".backspace");


let num1 = "";
let operator = "";
let num2 = "";
let backspace = "";
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

//math operator logic  
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

//auto scroll when numbers max out the display
function updateDisplay() {
    display.textContent = num1 + (operator ? " " + operator + " " + num2 : "");
    display.scrollLeft = display.scrollWidth; 
}

//calculator operations
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


//keyboard down click for digit input
document.addEventListener("keydown", function(e) {
    const key = e.key;

    if (!isNaN(key) && key !== " ") {
        if (resultDisplayed) {
            num1  = key;
            num2 = "";
            operator = "";
            resultDisplayed= false;
        } else if (!operator) {
            num1 += key;
        } else {
            num2 += key;
        }
        display.textContent = num1 + (operator ? " " + operator + " " + num2 : "");
        }

    //keyboard input for operator input
        if (["+", "-", "*", "/"].includes(key)) {
            if (!num1) return;

            if (num1 && num2) {
                let result = operate(operator, num1, num2);
                num1 = result.toString();
                num2 = "";
                operator = key;
                resultDisplayed = true;
            } else {
                operator = key;
            }
            display.textContent = num1 + " " + operator;
        }
    
        //keyboard input for equals input
        if (key === "Enter") {
            if (num1 && operator && num2) {
                let result = operate(operator, num1, num2);
                display.textContent = result;
                num1 = result.toString();
                num2 = "";
                operator = "";
                resultDisplayed = true;
            }
        }
        //keyboard input for single digit removal 
        if (key === "Backspace") {
            if (resultDisplayed) {
                num1 = "";
                num2 = "";
                operator = "";
                resultDisplayed = false;
                display.textContent = "";
            }
            else if (num2) {
                num2 = num2.slice(0, -1);
            } else if (operator) {
                operator = "";
            } else {
                num1 = num1.slice(0, -1);
            }
            display.textContent = num1 + (operator ? " " + operator + "  " + num2 : "");
        }
        //keyboard input to clear display screen
        if (key === "Escape") {
            num1 = "";
            num2 = "";
            operator = "";
            display.textContent = "";
            resultDisplayed = false;
        }

        if (key === "." && (!operator ? !num1.includes(".") : !num2.includes("."))) {
            if (!operator) {
                num1 += ".";
            } else {
                num2 += ".";
            }
            display.textContent = num1 + (operator ? " " + operator + " " + num2 : "");
        }
});
    


function handleDecimalClick() {
    if (resultDisplayed) {
        num1 = "";
        num2 = "";
        operator = "";
        resultDisplayed = false;
    }
    if (!operator && !num1.includes(".")) {
        num1 += ".";
        display.textContent = num1;
    }
    else if (operator && !num2.includes(".")) {
        num2 += ".";
        display.textContent = num1 + " " + operator + " " + num2;
    }
}


function handleEqualsClick() {
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

function handleClearDisplayClick() {
    num1 = "";
    operator = "";
    num2 = "";
    display.textContent = "";
    resultDisplayed = false;
}

function handleBackspaceClick() {
if (resultDisplayed) {
    num1 = "";
    num2 = "";
    operator = "";
    decimal = "";
    resultDisplayed = false;
    display.textContent = "";
} else if (num2) {
    num2 = num2.slice(0, -1);
    display.textContent = num1 + " " + operator + " " + num2;
}else if (operator) {
    operator = "";
    display.textContent = num1;
} else {
    num1 = num1.slice(0, -1);
    display.textContent = num1;
}
}


//event listeners for digits and operators 
digitButtons.forEach(button => button.addEventListener("click", handleDigitClick));
operatorButtons.forEach(button => button.addEventListener("click", handleOperatorClick));
equalsButton.addEventListener("click", handleEqualsClick);
clearButton.addEventListener("click", handleClearDisplayClick);
decimalButton.addEventListener("click", handleDecimalClick);
backspaceButton.addEventListener("click", handleBackspaceClick);
