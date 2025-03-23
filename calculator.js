var display = document.getElementById("display");

function clearDisplay() {
    display.value = "";
}

function appendNumber(number) {
    display.value += number;
}

function appendOperator(operator) {
    display.value += operator;
}

function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "aukaat ke bahar";
    }
}
