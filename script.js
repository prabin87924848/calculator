const display = document.getElementById('display');

// Adds numbers or operators to the screen
function appendToDisplay(input) {
    display.value += input;
}

// Clears everything
function clearDisplay() {
    display.value = "";
}

// The actual math logic
function calculate() {
    try {
        // eval() takes the string (e.g., "10+5*2") and does the math
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}
