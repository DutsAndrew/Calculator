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
let number1 = null;
let number2 = null;
let firstOperator = null;
let secondOperator = null;
let result = null;

// Event Listeners
clear.addEventListener('click', clearIt);
backspace.addEventListener('click', backSpaceIt);
equalsBtn.addEventListener('click', inputEquals);
operatorBtn.forEach((button) => button.addEventListener('click', () => inputOperator(button.textContent)));
digitBtn.forEach((button) => button.addEventListener('click', () => inputNumber(button.textContent)));

// Calculator input
function resetDisplay() {
    display.textContent = null;
};

function clearIt() {
    console.log("clear button is working");
    display.textContent = 0;
    number1 = null;
    number2 = null;
    firstOperator = null;
    secondOperator = null;
    result = null;
};

function backSpaceIt() {
    console.log("backspace button is working");
    display.textContent = display.textContent.toString().slice(0, -1);
};

function inputNumber(number) {
    if (display.textContent == 'Enter your Equation :)' || display.textContent == 0 || result != null) {
        display.textContent = null;
    }
    display.textContent += number;
};

function inputOperator(operator) {
    if (firstOperator !== null && result === null) {
        number2 = display.textContent;
        operate();
    } else if (number1 === null) {
        number1 = display.textContent;
        firstOperator = operator;
        resetDisplay();
    } else if (firstOperator === null && result !== null) {
        firstOperator = operator;
        number2 = display.textContent;
        operate();
    }
};

function inputEquals() {
    if (firstOperator === null) {
        display.textContent = display.textContent;
    } else if (firstOperator !== null) {
        number2 = display.textContent;
        operate();
    } else if (secondOperator !== null) {
        number2 = display.textContent;
    }
}


// Calculator logic
function operate() {
    console.log(`operator selected was ${firstOperator}, number1 is ${number1}, and number2 is ${number2}`);
    result = display.textContent = roundIt(createEquation(firstOperator, number1, number2));
    preventCrash();

    number1 = result;
    number2 = null;
    firstOperator = null;
    secondOperator = null;
    return number1;
};

function createEquation(firstOperator, number1, number2) {
    switch(firstOperator) {
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
    if (display.textContent === 'Infinity' || display.textContent === 'NaN') {
        display.textContent = "Error :(";
    }
};