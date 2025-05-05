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
let newNumber = "";
let numberA = "";
let numberB = "";
let possibleNumbers = new Set(["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]);

function calculatorAction(input) {
    if(possibleNumbers.has(input)) {
        newNumber = newNumber + input;
        refreshDisplay(newNumber);
    }
}


// let counter = 1;

// function calculatorAction(input) {
//     let numberA = 0;
//     let numberB = 0;
    
//     // Convert input to an number if possible
//     const inputNumber = Number(input);

//     if(Number.isInteger(inputNumber) === true) {
//         let newNumber = inputNumber * counter;
//         refreshDisplay(newNumber);
        
//         counter++;
//     }


// }