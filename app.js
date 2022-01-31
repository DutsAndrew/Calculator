// querySelectors to access DOM elements in JS
const display = document.querySelector('.display');
const arithmetic = document.querySelector('#arithmetic');
const clear = document.querySelector('#clear');
const backspace = document.querySelector('#backspace');
const digitBtn = document.querySelectorAll('.digitBtn');
const operatorBtn = document.querySelectorAll('.operatorBtn');

const nine = document.querySelector('#nine');
const eight = document.querySelector('#eight');
const seven = document.querySelector('#seven');
const six = document.querySelector('#six');
const five = document.querySelector('#five');
const four = document.querySelector('#four');
const three = document.querySelector('#three');
const two = document.querySelector('#two');
const one = document.querySelector('#one');

const multiply = document.querySelector('#multiply');
const divide = document.querySelector('#divide');
const add = document.querySelector('#add');
const subract = document.querySelector('#subtract');
const sum = document.querySelector('#sum');


//math logic
function addIt(number1, number2) {
    let sum;
    sum = (number1 + number2);
    return sum;
}

function subtractIt(number1, number2) {
    let sum;
    sum = (number1 - number2);
    return sum;
};

function sumIt(Array) {
    let sum;
    sum = 0;
    for (let i = 0; i < Array.length; i++) {
        sum += Array[i];
    }
    return sum;
};

function multiplyIt(number1, number2) {
    let sum;
    sum = (number1 * number2)
    return sum;
};

function divideIt(number1, number2) {
    let sum;
    sum = (number1 / number2);
    return sum;
};

function powerIt(power1, power2) {
    let sum;
    sum = power1 * power2;
    return sum;
};

function factorialIt(factorial) {
    let sum;
    sum = factorial;

    if (factorial < 0) {
        return (-1);
    } else if (factorial === 0 || factorial === 1) {
        return (1);
    }

    while (factorial > 1) {
        factorial--;
        sum *= factorial;
    }
    return sum;
};

// Event Listeners
clear.addEventListener('click', clearIt);
backspace.addEventListener('click', backSpaceIt);
operatorBtn.forEach((button) => button.addEventListener('click', operateIt));
digitBtn.forEach((button) => button.addEventListener('click', operateIt));

// Calculator Functionality
function clearIt() {
    console.log("clear button is working");
};

function backSpaceIt() {
    console.log("backspace button is working");
};

function operateIt() {
    console.log("operatorBtns or digitBtns are working");
};