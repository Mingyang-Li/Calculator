// define variables for buttons

const clickedNumAndOps = document.querySelectorAll(".threetimesthree,.zero，.operators");
const calculate = document.getElementById("equal");
const clear = document.getElementById("clear");
const input = document.getElementById("input");
const resultDisplayed = false;

//get user input before they click "=" sign
for (var i = 0; i < clickedNumAndOps.length; i++){
    if (clickedNumAndOps[i].clicked == true){
        input.innerHTML += clickedNumAndOps[i];
    }
}
// store user input string into one single variable
const inputString = input.innerHTML;

//split input string by operators so we have an array of numbers 
const numbers = inputString.split(/ \+ | \- | \* | \/ /);

//split inpit string by numbers so we have an array of operators 
const operators = inputString.replace(/[0-9]|\./g, "");

//function to calculate
function toCalculate(inputString, numbers, operators, resultDisplayed){
    while (resultDisplayed == false){
        while ("/" in inputString && inputString.indexOf("/" != -1)){
            divideIndex = operators.indexOf("/");
            first = numbers[divideIndex];
            second = numbers[divideIndex+1];
            newNum = first / second;
            numbers.splice(numbers.indexOf(first), 2, newNum);
            divideInStrIndex = inputString.indexOf("/");
            inputString.slice(divideInStrIndex);
        } 
        
        while ("*" in inputString && inputString.indexOf("*" != -1)){
            timesIndex = operators.indexOf("*");
            first = numbers[timesIndex];
            second = numbers[timesIndex+1];
            newNum = first * second;
            numbers.splice(numbers.indexOf(first), 2, newNum);
            timesInStrIndex = inputString.indexOf("*");
            inputString.slice(timesInStrIndex);
        }
    
        while ("+" in inputString && inputString.indexOf("+" != -1)){
            plusIndex = operators.indexOf("+");
            first = numbers[plusIndex];
            second = numbers[plusIndex+1];
            newNum = parseFloat(first) + parseFloat(second);
            numbers.splice(numbers.indexOf(first), 2, newNum);
            plusInStrIndex = inputString.indexOf("+");
            inputString.slice(plusInStrIndex);
        }
    
        while ("-" in inputString && inputString.indexOf("-" != -1)){
            minusIndex = operators.indexOf("-");
            first = numbers[minusIndex];
            second = numbers[minusIndex+1];
            newNum = parseFloat(first) - parseFloat(second);
            numbers.splice(numbers.indexOf(first), 2, newNum);
            minusInStrIndex = inputString.indexOf("-");
            inputString.slice(minusInStrIndex);
        }
        resultDisdplayed = !resultDisdplayed;
    }
}

//function to clear
function toClear(){
    input.innerHTML = "";
}

//event handler for equal/calculate button
calculate.addEventListener("click", toCalculate());

//event handler to clear button
clear.addEventListener("click", toClear());


