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
let selectedOperator = '';

// Event Listeners
clear.addEventListener('click', clearIt);
backspace.addEventListener('click', backSpaceIt);
equalsBtn.addEventListener('click', operate);
operatorBtn.forEach((button) => button.addEventListener('click', () => getOperator(button.textContent)));
digitBtn.forEach((button) => button.addEventListener('click', () => getNumber(button.textContent)));

// Calculator Functionality
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
    if (number1 === '') {
        number1 = number;
        display.textContent += number1;
        console.log(`number1: ${number1} has been saved`);
    } else if (number1 !== 'null') {
        number2 = number;
        display.textContent += number2;
        console.log(`number2: ${number2} has been saved`);
    } else if (number1 !== null && number2 !== null) {
        operate(number1, number2);
        console.log("sending number1 and number2 to operate");
    }
};

function getOperator(operator) {
    if (selectedOperator === '') {
        console.log("operatorBtn was clicked");
        selectedOperator = operator;
        display.textContent += (" " + `${selectedOperator}` + " ");
        console.log(selectedOperator);
    } else if (selectedOperator !== 'null') {
        operate(selectedOperator);
    } else {
        clearIt();
        console.log("getOperator did not save or send an operator to operate");
    }
};

function operate(operator, number1, number2) {
    console.log(`operator selected was ${operator}, number1 is ${number1}, and number2 is ${number2}`);

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
}

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

function powerIt(number1, number2) {
    let sum;
    sum = number1 * number2;
    return sum;
};

function factorialIt(number1) {
    let sum;
    sum = number1;

    if (number1 < 0) {
        return (-1);
    } else if (number1 === 0 || number1 === 1) {
        return (1);
    }

    while (number1 > 1) {
        number1--;
        sum *= number1;
    }
    return sum;
};

function roundIt(number) {
    return Math.round(number * 1000) / 1000;
}