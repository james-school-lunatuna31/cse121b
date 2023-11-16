/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
let add = function (num1, num2) {
    return num1 + num2;
}
document.querySelector('#addNumbers').addEventListener('click', function () {
    let num1 = Number(document.querySelector('#add1').value);
    let num2 = Number(document.querySelector('#add2').value);
    document.querySelector('#sum').value = add(num1, num2);
});

/* Function Expression - Subtract Numbers */
let subtract = function (num1, num2) {
    return num1 - num2;
}
document.querySelector('#subtractNumbers').addEventListener('click', function () {
    let num1 = Number(document.querySelector('#subtract1').value);
    let num2 = Number(document.querySelector('#subtract2').value);
    document.querySelector('#difference').value = subtract(num1, num2);
});

/* Arrow Function - Multiply Numbers */
let multiply = (num1, num2) => num1 * num2;
document.querySelector('#multiplyNumbers').addEventListener('click', function () {
    let num1 = Number(document.querySelector('#factor1').value);
    let num2 = Number(document.querySelector('#factor2').value);
    document.querySelector('#product').value = multiply(num1, num2);
});

/* Open Function Use - Divide Numbers */
function divide(num1, num2) {
    return num1 / num2;
}
document.querySelector('#divideNumbers').addEventListener('click', function () {
    let num1 = Number(document.querySelector('#dividend').value);
    let num2 = Number(document.querySelector('#divisor').value);
    document.querySelector('#quotient').value = divide(num1, num2);
});


/* Decision Structure */
document.querySelector('#getTotal').addEventListener('click', function () {
    let subtotal = Number(document.querySelector('#subtotal').value);
    let total = subtotal;
    if (document.querySelector('#member').checked) {
        total *= 0.85;
    }
    document.querySelector('#total').innerHTML = `$ ${total.toFixed(2)}`;
});

/* ARRAY METHODS - Functional Programming */
let numbers = Array.from({ length: 13 }, (_, i) => i + 1);
document.querySelector('#array').innerHTML = numbers.join(', ');

/* Output Odds Only Array */
let odds = numbers.filter(num => num % 2 == 1);
document.querySelector('#odds').innerHTML = odds.join(', ');

/* Output Evens Only Array */
let evens = numbers.filter(num => num % 2 == 0);
document.querySelector('#evens').innerHTML = evens.join(', ');

/* Output Sum of Org. Array */
let sum = numbers.reduce((a, b) => a + b, 0);
document.querySelector('#sumOfArray').innerHTML = sum;

/* Output Multiplied by 2 Array */
let multiplied = numbers.map(num => num * 2);
document.querySelector('#multiplied').innerHTML = multiplied.join(', ');

/* Output Sum of Multiplied by 2 Array */
let sumMultiplied = multiplied.reduce((a, b) => a + b, 0);
document.querySelector('#sumOfMultiplied').innerHTML = sumMultiplied;
