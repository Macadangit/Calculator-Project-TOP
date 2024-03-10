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



//BUTTONS
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

//----------------------------------------------------------------------------------


//FUNCTION BUTTONS
const divide = document.getElementById("divide");
divide.addEventListener("click",() =>{
    if(enteredText != ""){
        previousNumber += enteredText;
        enteredText = ''
        currentEntry.innerText = enteredText;
        savedNumber.innerText = previousNumber;
    }
});


const clearEntry = document.getElementById("clear-entry");
clearEntry.addEventListener("click",() =>{
    enteredText = '';
    currentEntry.innerText = enteredText;
});

const clear = document.getElementById("clear");
clear.addEventListener("click",() =>{
    enteredText = '';
    previousNumber ='';
    operator = '';
    currentEntry.innerText = enteredText;
    savedNumber.innerText = previousNumber;
});

const del = document.getElementById("delete");
del.addEventListener("click", ()=>{
    enteredText = enteredText.slice(0,-1);
    currentEntry.innerText = enteredText;
});

// on press: 1.) push information in currently entered into previous, and clear currently entered. 
//2.) be ready to take in new currentlyEntered
//3.) apply appropriate function to both variables 



// numButton append to output
// function buttons do the functions
// Saved functionality

