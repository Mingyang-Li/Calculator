// define variables for buttons

let clickedNumAndOps = document.querySelectorAll(".threetimesthree,.zero，.operators");
let calculate = document.getElementById("equal");
let clear = document.getElementById("clear");
let input = document.getElementById("input");
let resultDisplayed = false;

//get user input before they click "=" sign
for (var i = 0; i < clickedNumAndOps.length; i++){
    if (clickedNumAndOps[i].clicked == true){
        input.innerHTML += clickedNumAndOps[i];
    }
}
// store user input string into one single variable
let inputString = input.innerHTML;

//split input string by operators so we have an array of numbers 
let numbers = inputString.split(/ \+ | \- | \* | \/ /);

//split inpit string by numbers so we have an array of operators 
let operators = inputString.replace(/[0-9]|\./g, "");

//function to calculate
function toCalculate(inputString, numbers, operators, resultDisplayed){
    while (resultDisplayed == false){
        while ("/" in inputString && inputString.indexOf("/") != inputString.length-1){
            divideIndex = operators.indexOf("/");
            first = numbers[divideIndex];
            second = numbers[divideIndex+1];
            newNum = first / second;
            numbers.splice(numbers.indexOf(first), 2, newNum);
            divideInStrIndex = inputString.indexOf("/");
            inputString.splice(divideInStrIndex, 1);
        } 
        
        while ("*" in inputString && inputString.indexOf("*")!= inputString.length-1){
            timesIndex = operators.indexOf("*");
            first = numbers[timesIndex];
            second = numbers[timesIndex+1];
            newNum = first * second;
            numbers.splice(numbers.indexOf(first), 2, newNum);
            timesInStrIndex = inputString.indexOf("*");
            inputString.splice(timesInStrIndex, 1);
        }
    
        while ("+" in inputString && inputString.indexOf("+") != inputString.length-1){
            plusIndex = operators.indexOf("+");
            first = numbers[plusIndex];
            second = numbers[plusIndex+1];
            newNum = parseFloat(first) + parseFloat(second);
            numbers.splice(numbers.indexOf(first), 2, newNum);
            plusInStrIndex = inputString.indexOf("+");
            inputString.splice(plusInStrIndex, 1);
        }
    
        while ("-" in inputString && inputString.indexOf("-") != inputString.length-1){
            minusIndex = operators.indexOf("-");
            first = numbers[minusIndex];
            second = numbers[minusIndex+1];
            newNum = parseFloat(first) - parseFloat(second);
            numbers.splice(numbers.indexOf(first), 2, newNum);
            minusInStrIndex = inputString.indexOf("-");
            inputString.splice(minusInStrIndex, 1);
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


