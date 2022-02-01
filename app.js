// querySelectors to access DOM elements in JS
const display = document.querySelector('.display');
const arithmetic = document.querySelector('#arithmetic');
const clear = document.querySelector('#clear');
const backspace = document.querySelector('#backspace');
const digitBtn = document.querySelectorAll('.digitBtn');
const operatorBtn = document.querySelectorAll('.operatorBtn');
const equalsBtn = document.querySelector('.equalsBtn');

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

// set number1 and number2 as mutatable variables
let number1 = '';
let number2 = '';

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

// function sumIt(Array) {
//     let sum;
//     sum = 0;
//     for (let i = 0; i < Array.length; i++) {
//         sum += Array[i];
//     }
//     return sum;
// };

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

function roundIt(number) {
    return Math.round(number * 1000) / 1000;
}

// Event Listeners
clear.addEventListener('click', clearIt);
backspace.addEventListener('click', backSpaceIt);
equalsBtn.addEventListener('click', sumIt);
operatorBtn.forEach((button) => button.addEventListener('click', () => getOperator(button.textContent)));
digitBtn.forEach((button) => button.addEventListener('click', () => getNumber(button.textContent)));

// Calculator Functionality
function clearIt() {
    console.log("clear button is working");
    display.textContent = '';
};

function backSpaceIt() {
    console.log("backspace button is working");
    display.textContent = display.textContent.toString().slice(0, -1);
};

function getNumber(number) {
    display.textContent += number;
}

function sumIt(number1, number2) {
    console.log("equalsBtn clicked");
} 

function operatorSelector(operator, number1, number2) {
    number1 = number(number1);
    number2 = number(number2);

    switch(operator) {
        case 'x':
            return multiplyIt(number1, number2);
        case '/':
            return divideIt(number1, number2);
        case '+':
            return addIt(number1, number2);
        case '-':
            return subtractIt(number1, number2);
        default:
            return null;
    };
};