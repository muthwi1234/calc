let display = document.querySelector('.display');
let numbers = document.querySelectorAll('.number');
let operators = document.querySelectorAll('.operator');
let clear = document.querySelector('.clear');
let equal = document.querySelector('.equal');

let currentNumber = '';
let previousNumber = '';
let operator = null;
let result = null;

// function to display the current number
function updateDisplay() {
    display.textContent = currentNumber;
}

// function to perform the calculation
function calculate() {
    switch (operator) {
        case '+':
            result = parseFloat(previousNumber) + parseFloat(currentNumber);
            break;
        case '-':
            result = parseFloat(previousNumber) - parseFloat(currentNumber);
            break;
        case '*':
            result = parseFloat(previousNumber) * parseFloat(currentNumber);
            break;
        case '/':
            result = parseFloat(previousNumber) / parseFloat(currentNumber);
            break;
    }
    currentNumber = result;
    operator = null;
}

// add event listeners to numbers
numbers.forEach(function (number) {
number.addEventListener('click', function () {
  // append the clicked number to the current number
  currentNumber += this.value;
  updateDisplay();
});
});


