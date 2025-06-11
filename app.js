let firstOperand = "";
let secondOperand = "";
let result = null;
let operator = null;

const selectById = (id) => document.getElementById(id);
const selectAll = (clazz) => document.querySelectorAll(`.${clazz}`);

const display = selectById('display');
const digitButtons = selectAll('digit');
const operatorButtons = selectAll('operator');
const equalButton = selectById('equal-btn');
const deleteButton = selectById('del-btn');
const clearButton = selectById('clear-btn');

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function roundResult(result) {
    return Math.round(result * 1000) / 1000;
}

function appendNumber(number) {
    let displayValue;

    if (!operator) {
        firstOperand = firstOperand === 0 ? number : firstOperand + number;
        displayValue = firstOperand;

        console.log(`First Operand: ${firstOperand}`);
    } else {
        secondOperand = secondOperand === 0 ? number : secondOperand + number;
        displayValue = secondOperand;

        console.log(`Second Operand: ${secondOperand}`);
    }

    updateDisplay(displayValue);
}

function operate(operator, a, b) {
    a = Number(a);
    b = Number(b);

    const operations = {
        '*': multiply(a, b),
        '/': divide(a, b),
        '+': add(a, b),
        '-': subtract(a, b),
    };

    return operations[operator];
}

function clearDisplay() {
    display.value = 0;
}

function resetInitialState() {
    firstOperand = "";
    secondOperand = "";
    operator = null;
}

function updateDisplay(value) {
    display.value = value;
}

function removeLastElement(value){
    return value.slice(0, -1);
}

digitButtons.forEach((button) => {
    button.addEventListener('click', () => { appendNumber(button.textContent) })
});

operatorButtons.forEach((button) => {
    button.addEventListener('click', () => { 
        if(firstOperand && secondOperand){
            result = operate(operator, firstOperand, secondOperand);

            console.log(result);
            firstOperand = roundResult(result);
            secondOperand = "";
            updateDisplay(firstOperand);
        }

        operator = button.textContent;
        console.log(`<operator> ${operator}`);
    })
});

equalButton.addEventListener('click', () => {
    if (firstOperand === '' || secondOperand === '') return;
    result = operate(operator, firstOperand, secondOperand);
    updateDisplay(roundResult(result));
});

clearButton.addEventListener('click', () => {
    clearDisplay();
    resetInitialState();
});

deleteButton.addEventListener('click', () => {
    if (!operator) {
        firstOperand = removeLastElement(firstOperand);
        updateDisplay(firstOperand || "0");
    } else if (secondOperand) {
        secondOperand = removeLastElement(secondOperand);
        updateDisplay(secondOperand);
    } else {
        operator = null;
        updateDisplay(firstOperand);
    }
})




