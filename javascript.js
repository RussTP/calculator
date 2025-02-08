let num1 = 10;
let num2 = 5;
let operator = "/";

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


