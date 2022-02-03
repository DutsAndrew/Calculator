// querySelectors to access DOM elements in JS
const display = document.querySelector('.display');
const arithmetic = document.querySelector('#arithmetic');
const clear = document.querySelector('#clear');
const backspace = document.querySelector('#backspace');
const digitBtn = document.querySelectorAll('.digitBtn');
const operatorBtn = document.querySelectorAll('.operatorBtn');
const equalsBtn = document.querySelector('#equalsBtn');

const multiply = document.querySelector('#multiply');
const divide = document.querySelector('#divide');
const add = document.querySelector('#add');
const subract = document.querySelector('#subtract');

// set number1 and number2 as mutatable variables
let number1 = '';
let number2 = '';
let selectedOperator = '';
let result = null;

// Event Listeners
clear.addEventListener('click', clearIt);
backspace.addEventListener('click', backSpaceIt);
equalsBtn.addEventListener('click', createEquation);
operatorBtn.forEach((button) => button.addEventListener('click', () => getOperator(button.textContent)));
digitBtn.forEach((button) => button.addEventListener('click', () => getNumber(button.textContent)));

// Calculator Functionality
function resetDisplay() {
    display.textContent = '';
};

function clearIt() {
    console.log("clear button is working");
    display.textContent = '';
    number1 = '';
    number2 = '';
    selectedOperator = '';
};

function backSpaceIt() {
    console.log("backspace button is working");
    display.textContent = display.textContent.toString().slice(0, -1);
};

function getNumber(number) {
    if (display.textContent == 'Enter your Equation :)') {
        display.textContent = '';
        display.textContent += number;
    } else if (display.textContent !== 'Enter your Equation :)') {
        display.textContent += number;
    }
};

function getOperator(operator) {
    if (number1 == '') {
        number1 = display.textContent;
        selectedOperator = operator;
        resetDisplay();
    } else if (number1 !== '') {
        selectedOperator = operator;
        createEquation();
        resetDisplay();
    };
};

function createEquation() {
    number2 = display.textContent;
    console.log(`operator selected was ${selectedOperator}, number1 is ${number1}, and number2 is ${number2}`);
    result = display.textContent = roundIt(operate(selectedOperator, number1, number2));
    preventCrash();
    number1 = result;
    return number1;
};

function operate(selectedOperator, number1, number2) {
    switch(selectedOperator) {
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

//math logic
function addIt(number1, number2) {
    return number1*1 + number2*1;
}

function subtractIt(number1, number2) {
    return (number1 - number2);
};

function multiplyIt(number1, number2) {
    return (number1 * number2)
};

function divideIt(number1, number2) {
    return (number1 / number2);
};

function powerIt(number1, number2) {
    return number1 * number2;
};

function factorialIt(number1) {
    let factorial;
    factorial = number1;

    if (number1 < 0) {
        return (-1);
    } else if (number1 === 0 || number1 === 1) {
        return (1);
    }

    while (number1 > 1) {
        number1--;
        factorial *= number1;
    }
    return factorial;
};

function roundIt(number) {
    return Math.round(number * 1000) / 1000;
}

function preventCrash() {
    if (display.textContent == 'Infinity' || display.textContent == 'NaN') {
        display.textContent = "Error :(";
    };
};