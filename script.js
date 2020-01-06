// define variables for buttons
var clear = document.getElementById("clear");
var equal = document.getElementById("equal");
var allOtherButtons = document.getElementsByClassName("character");
var inputField = document.getElementById("input");

for (let i = 0; i < allOtherButtons.length; i++){
    button = allOtherButtons[i];
    button.addEventListener("click", function(){
        inputField.value += button.value;
        console.log(typeof(button));
    })
};


//function to calculate
/* 
function calculate(){
    pass
}



clear.addEventListener("click", function(){
    inputField.innerHTML = "";
})


equal.addEventListener("click", calculate())
*/


/*
var numAndOps = document.querySelectorAll(".threetimesthree, .zero, .operators").children;
var input = document.getElementById("input");
for (let i = 0; i < numAndOps.length; i++){
    numAndOps[i].addEventListener("click", function(){
        input.innerHTML += numAndOps[i];
    }()); 
}

var calculate = document.getElementById("equal");
var clear = document.getElementById("clear");
var input = document.getElementById("input");
var resultDisplayed = false;


//get user input before they click "=" sign
for (var i = 0; i < numAndOps.length; i++){
    if (numAndOps[i].clicked == true){
        input.innerHTML += numAndOps[i];
    }
}

for (let i = 0; i < numAndOps.length; i++){
    numAndOps[i].addEventListener("click", addInput(numAndOps[i]));
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
            operators.splice(divideIndex, 1);
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
        resultDisdplayed = true;
    }
}

//function to clear
function toClear(){
    input.innerHTML = "";
}

//function to write to input field
function addInput(char) {
    input.innerHTML += char;
}

//event handler for equal/calculate button
calculate.addEventListener("click", toCalculate());

//event handler to clear button
clear.addEventListener("click", toClear());

*/
