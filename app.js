const selectById = (id) = document.getElementById(id);
const selectAll = (clazz) = document.querySelectorAll(`#${clazz}`);

let firstOperand = 0;
let secondOperand = 0;
let operator = null;

function multiply (a, b){
    return a * b;
}

function divide (a, b){
    return a / b;
}

function add (a, b){
    return a + b;
}

function subtract (a, b){
    return a - b;
}

