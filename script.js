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
    switch(operator) {
        case "add": return add(numberA, numberB)
        case "subtract": return subtract(numberA, numberB);
        case "multiply": return multiply(numberA, numberB);
        case "divide": return divide(numberA, numberB);
        default: console.log("Error: operator unknown");
    }
}

// Evaluate input and refresh the display
function refreshDisplay(output) {
    const display = document.querySelector("#display");
    display.setAttribute("value", output);
}

// Add event handler to all the buttons and invoke refresh function
const input_buttons = document.querySelectorAll(".input_button");
input_buttons.forEach((input_button) => {
    input_button.addEventListener("click", event => calculatorAction(event.target.value));
});

// calculator flow function
let display = "";
let numberA = "";
let numberB = "";
let possibleNumbers = new Set(["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]);

function calculatorAction(input) {    
    // If input is an number add it to the string newNumber
    if(possibleNumbers.has(input)) {
        display = display + input;
        refreshDisplay(display);
    }

    switch(input) {
        case "Clear":
            display = "";
            refreshDisplay(display);
            break;
    }
}