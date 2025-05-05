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

let a;
let b;
let operator;

const result = operate(1 ,2, "divide");

function operate(numberA, numberB, operator) {
    console.log(operator);
    
    switch(operator) {
        case "add": return add(numberA, numberB)
        case "subtract": return subtract(numberA, numberB);
        case "multiply": return multiply(numberA, numberB);
        case "divide": return divide(numberA, numberB);
        default: console.log("Error: operator unknown");
    }
}


console.log(result);