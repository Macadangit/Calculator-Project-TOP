const currentEntry = document.getElementById("current-entry");
let enteredText = ''; // append entry to entered text
currentEntry.innerText = enteredText;
// init var for inner text 
const savedNumber = document.getElementById("saved-number");
let previousNumber = '';
savedNumber.innerText = previousNumber;

let operator = ''


// Entered text needs to get moved to previous text
// operation needs to separate previous and current input
//



//Number buttons
const one = document.getElementById("one");
one.addEventListener("click",() =>{
    enteredText += 1;
    currentEntry.innerText = enteredText;
});


const two = document.getElementById("two");
two.addEventListener("click",() =>{
    enteredText += 2;
    currentEntry.innerText = enteredText;
});


const three = document.getElementById("three");
three.addEventListener("click",() =>{
    enteredText += 3;
    currentEntry.innerText = enteredText;
});


const four = document.getElementById("four");
four.addEventListener("click",() =>{
    enteredText += 4;
    currentEntry.innerText = enteredText;
});


const five = document.getElementById("five");
five.addEventListener("click",() =>{
    enteredText += 5;
    currentEntry.innerText = enteredText;
});


const six = document.getElementById("six");
six.addEventListener("click",() =>{
    enteredText += 6;
    currentEntry.innerText = enteredText;
});


const seven = document.getElementById("seven");
seven.addEventListener("click",() =>{
    enteredText += 7;
    currentEntry.innerText = enteredText;
});


const eight = document.getElementById("eight");
eight.addEventListener("click",() =>{
    enteredText += 8;
    currentEntry.innerText = enteredText;
});


const nine = document.getElementById("nine");
nine.addEventListener("click",() =>{
    enteredText += 9;
    currentEntry.innerText = enteredText;
});


const zero = document.getElementById("zero");
zero.addEventListener("click",() =>{
    enteredText += 0;
    currentEntry.innerText = enteredText;
});

const point = document.getElementById("point");
point.addEventListener("click", ()=> {
    if(!enteredText.includes(".")){
        enteredText += ".";
        currentEntry.innerText = enteredText;
    };
});

//----------------------------------------------------------------------------------


//FUNCTION BUTTONS


//ROW ONE

//% Function
const percent = document.getElementById("percent");

percent.addEventListener("click", () => {
    if (currentEntry != '') {
        enteredText = enteredText / 100;
        currentEntry.innerText = enteredText; 
    }
});


//CE function
const clearEntry = document.getElementById("clear-entry");
clearEntry.addEventListener("click",() =>{
    enteredText = '';
    currentEntry.innerText = enteredText;
});

//C function
const clear = document.getElementById("clear");
clear.addEventListener("click",() =>{
    enteredText = '';
    previousNumber ='';
    operator = '';
    currentEntry.innerText = enteredText;
    savedNumber.innerText = previousNumber;
});

//DEL function
const del = document.getElementById("delete");
del.addEventListener("click", ()=>{
    enteredText = enteredText.slice(0,-1);
    currentEntry.innerText = enteredText;
});

//ROW TWO
const sqrt = document.getElementById("sqrt");
sqrt.addEventListener("click", () =>{
    previousNumber = `sqr(${enteredText})`;
    enteredText = Math.sqrt(enteredText);
    currentEntry.innerText = enteredText;
    savedNumber.innerText = previousNumber;
});

//sqrt function

//squared function
const squared = document.getElementById("squared");
squared.addEventListener("click", () =>{
    previousNumber = `sqr(${enteredText})`;
    enteredText = enteredText **2;
    currentEntry.innerText = enteredText;
    savedNumber.innerText = previousNumber;
});


//1/x function
const oneOverX = document.getElementById("one-over-x");
oneOverX.addEventListener("click", () => {
    enteredText = 1 / enteredText;
    currentEntry.innerText = enteredText;
    savedNumber.innerText = previousNumber;
});



//Divide function --- some functionality bugs to be worked out 
const divide = document.getElementById("divide");
divide.addEventListener("click",() =>{
    if(enteredText != "" && previousNumber === "" ){
        previousNumber = enteredText;
        enteredText = '';
        operator = '/';
        currentEntry.innerText = enteredText;
        savedNumber.innerText = previousNumber;
    }
});

//ROW THREE
// * function
const multiply = document.getElementById("multiply");
multiply.addEventListener("click", ()=>{
    previousNumber = enteredText;
    enteredText = '';
    operator = '*';
    currentEntry.innerText = enteredText;
    savedNumber.innerText = previousNumber;
});


//ROW FOUR
// - function
const subtract = document.getElementById("subtract");
subtract.addEventListener("click", ()=>{
    previousNumber = enteredText;
    enteredText = '';
    operator = '-';
    currentEntry.innerText = enteredText;
    savedNumber.innerText = previousNumber;
});


//ROW FIVE
// + function
const add = document.getElementById("add");
add.addEventListener("click", ()=>{
    if(enteredText != ""){
        previousNumber = enteredText;
        enteredText = '';
        operator = '+';
        currentEntry.innerText = enteredText;
        savedNumber.innerText = previousNumber;
    }
});

//ROW SIX

// positive/negative function
const posNeg = document.getElementById("pos-neg");
let isNeg = false;
posNeg.addEventListener("click", ()=>{
    isNeg =!isNeg;
    if(isNeg == true){
        enteredText = -enteredText;
    };    
    currentEntry.innerText = enteredText;

});

//equals function
// missing functionality for 2nd row function buttons
const equals = document.getElementById("equals");
equals.addEventListener("click", ()=>{
    if(operator == '/'){
        enteredText = previousNumber/enteredText; // auto converted to number by JS
        previousNumber = ''
        currentEntry.innerText = enteredText;
        savedNumber.innerText = previousNumber;
    }else if(operator =='+'){
        enteredText = Number(previousNumber) + Number(enteredText); // had to use Number() becasue + is also for str concat
            previousNumber = ''
            currentEntry.innerText = enteredText;
            savedNumber.innerText = previousNumber;     
    }else if(operator =='-'){
        enteredText = Number(previousNumber) - Number(enteredText); // had to use Number() becasue + is also for str concat
            previousNumber = ''
            currentEntry.innerText = enteredText;
            savedNumber.innerText = previousNumber;     
    }else if(operator =='*'){
        enteredText = Number(previousNumber) * Number(enteredText); // had to use Number() becasue + is also for str concat
            previousNumber = ''
            currentEntry.innerText = enteredText;
            savedNumber.innerText = previousNumber;     
    }
});


// }else if(operator == '+'){
//     enteredText = savedNumber + enteredText;
// }else if(operator == '-'){
//     enteredText = savedNumber - enteredText;
// }else if(operator == '*'){
//     enteredText = savedNumber * enteredText;
// }
    // savedNumber operator currentEntry 


