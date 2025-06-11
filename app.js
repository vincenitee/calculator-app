let firstOperand = 0;
let secondOperand = 0;
let operator = null;

const selectById = (id) => document.getElementById(id);
const selectAll = (clazz) => document.querySelectorAll(`.${clazz}`);

const digitButtons = selectAll('digit');
const operatorButtons = selectAll('operator');

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
    if (!operator) {
        firstOperand = firstOperand === 0 ? number : firstOperand + number;
    } else {
        secondOperand = secondOperand === 0 ? number : secondOperand + number;
    }    
}

function operate(operator, a, b){
    const operations = {
        '*': multiply(a, b),
        '/': divide(a, b),
        '+': add(a, b),
        '-': subtract(a, b),
    };

    return operations[operator];
}

digitButtons.forEach((button) => {
    button.addEventListener('click', () => { appendNumber(button.textContent) })
});

operatorButtons.forEach((button) => {
    button.addEventListener('click', () => { operator = button.textContent })
});



