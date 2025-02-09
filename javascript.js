let num1 = "";
let operator = "";
let num2 = "";


function add(a, b) {
return a + b;
}

function subtraction(a, b) {
return a - b;
}

function multiply(a, b) {

    return  a * b; 
}

function divide(a, b) {
    if (b === 0) {
        return "Error: 0 is not divisible";
    }
return a / b;
}


function operate(operator, a, b) {
    switch(operator) {
        case "+":
            return add(a, b);
        case "-":
            return subtraction(a, b);
        case "*":
            return multiply(a, b);
        case "/":
            return divide(a, b);
    }
}

console.log(operate(operator, num1, num2))

const buttons = document.querySelectorAll(".digit");
const display= document.querySelector("#display");
const clearButton = document.querySelector(".clear");

const buttonInput = [];

function handleClick(e) {
display.textContent += e.target.value;
buttonInput.push(e.target.value);
console.log(buttonInput.join(""));
}
buttons.forEach(button => {
    button.addEventListener("click", handleClick);
});

clearButton.addEventListener("click", () => {
    display.textContent = "";
});

