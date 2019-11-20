const operators = document.querySelectorAll(".operators div");
const numbers = document.querySelectorAll(".threetimesthree div,#zero");
const clear = document.getElementById("clear");
const result = document.getElementById("equal");
const input = document.getElementById("input");
const resultDisplayed = false;

//add click handler to the number buttons
for (var i=0; i < numbers.length; i++){
    numbers[i].addEventListener("click", function(e){
        var currentString = input.innerHTML;
        var lastChar = currentString[currentString.length-1];

        if(resultDisplayed == false){
            input.innerHTML += e.target.innerHTML;
        }
        else if(resultDisplayed == true && lastChar == "+" || lastChar == "-" || lastChar == "*" || lastChar == "/"){
            resultDisplayed == false;
            input.innerHTML += e.target.innerHTML;
        }
        else{
            resultDisplayed == false;
            input.innerHTML = "";
            input.innerHTML += e.target.innerHTML;
        }
    });
}

//add click handler to operator buttons
for (var i=0; 1<operators.length; i++){
    operators[i].addEventListener("click", function(e){
        var currentString = operators[i].innerHTML;
        var lastChar = currentString[currentString.length - 1];
        if (lastChar == "+" || lastChar == "-" || lastChar == "*" || lastChar == "/"){
            var newString = currentString.substring(0, currentString.length-1) + e.target.innerHTML;
            input.innerHTML = newString;
        }
        else if (currentString.length == 0){
            console.log("Enter a number first");
        }
        else{
            input.innerHTML += e.target.innerHTML;
        }
    });
}

//click handler for equal (calculate button)
result.addEventListener("click", function(){
    var inputString = input.innerHTML;
    //splitting string by operators, so we have a list of numbers
    var numbers = inputString.split(/\+|\-|\×|\÷/g);
    //split the string by numbers so we have a list of operators
    var operators = inputString.replace(/[0-9]|\./g, "").split("");
    console.log(inputString);
    console.log(numbers);
    console.log(operators);

    var divideIndex = operators.indexOf("/");
    while (divideIndex != -1){
        numbers.splice(divideIndex, 2, numbers[divideIndex]/numbers[divideIndex+1]);
        operators.splice(divideIndex, 1);
        divideIndex = operators.indexOf("/");
    }

    var timesIndex = operators.indexOf("*");
    while (timesIndex != -1){
        numbers.splice(timesIndex, 2, numbers[timesIndex]*numbers[timesIndex+1]);
        operators.splice(timesIndex, 1);
        timesIndex = operators.indexOf("*");
    }

    var minusIndex = operators.indexOf("-");
    while (timesIndex != -1){
        numbers.splice(minusIndex, 2, numbers[minusIndex]-numbers[minusIndex+1]);
        operators.splice(minusIndex, 1);
        minusIndex = operators.indexOf("-");
    }
    var plusIndex = operators.indexOf("+");
    while (timesIndex != -1){
        numbers.splice(plusIndex, 2, parseFloat(numbers[plusIndex])+parseFloat(numbers[plusIndex+1]));
        operators.splice(plusIndex, 1);
        plusIndex = operators.indexOf("+");
    }

    //displaying output
    input.innerHTML = numbers[0];

    //turing result displayed to true once it's displayed
    resultDisplayed == true;
});

//clearing input when "CLEAR" is pressed

clear.addEventListener("click", function(){
    input.innerHTML = '';
});





