// Add event handler to all the buttons and invoke refresh function
const input_buttons = document.querySelectorAll(".input_button");
input_buttons.forEach((input_button) => {
    input_button.addEventListener("click", event => calculatorAction(event.target.value));
});

// define all variables for calculations
let display = "";
let displayResult = 0;
let numberA = "x";
let numberB = "y";
let requestedOperation = "";
let possibleNumbers = new Set(["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]);
let operation = new Set(["add", "subtract", "multiply", "divide"]);

// Function that decides what happens, this is run when an button is clicked
function calculatorAction(input) {    
    // Clear display and reset numbers if last operation was equal sign
    if(requestedOperation == "=" && displayResult === 1) {
        display = "";
        numberA = "x";
        numberB = "y";
        displayResult = 0;
        requestedOperation = "";
        refreshDisplay(display);
    }
    
    // Clear display if previous action was an result
    if(displayResult === 1) {
        display = "";
        refreshDisplay(display);
        displayResult = 0;
    }
    
    // If input is an number add it to the string newNumber
    if(possibleNumbers.has(input)) {
        display = display + input;
        refreshDisplay(display);
    }

    // If an operator was pressed decide what to do
    if(operation.has(input)) {
        requestedOperation = input;
        if(numberA === "x") {
            numberA = display;
            display = "";
            refreshDisplay(display);
            console.log("Number A is:" + numberA);
        } else if (numberB === "y") {
            numberB = display; // set numberB
            let result = operate(numberA, numberB, requestedOperation); // perform calculation
            numberA = result;
            numberB = "y";
            display = result;
            displayResult = 1;          
            refreshDisplay(display);            
        } else {
            console.log("ERROR");
        }
    }

    // logic based on equal or clear
    switch(input) {
        case "Clear":
            display = "";
            numberA = "x";
            numberB = "y";
            requestedOperation = "";
            refreshDisplay(display);
            break;
        case "=":
            numberB = display;
            let result = operate(numberA, numberB, requestedOperation); // perform calculation
            numberA = result;
            numberB = "y";
            display = result;
            displayResult = 1;
            requestedOperation = "=";     
            refreshDisplay(display);
            break;
    }
}

// Function to perform the actual calculation
function operate(numberA, numberB, operator) {   
    let a = Number(numberA);
    let b = Number(numberB);
    
    switch(operator) {
        case "add": return a+b;
        case "subtract": return a-b;
        case "multiply": return a*b;
        case "divide": return a/b;
        default: console.log("Error: operator unknown");
    }
}

// Evaluate input and refresh the display
function refreshDisplay(output) {
    const display = document.querySelector("#display");
    display.setAttribute("value", output);
}