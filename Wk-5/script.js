// Variables and Conditionals
let userName = "Emmanuel"; // variable declaration
let userAge = 15;

// Conditional statement
if (userAge >= 18) {
    console.log(userName + "is an adult.");
} else {
    console.log(userName + "is a minor.");
}

// Functions
function showGreeting() {
    document.getElementById("message").textContent = "Hello" + userName + "! Welcome to my JavaScript trial.";
}

function changeColor() {
    let  messageEl = document.getElementById("message");
    messageEl.style.color = "blue";
}

// For Loop
function listNumbers() {
    let numbers ="";
    for (let i = 1; i <= 5; i++) {
        numbers += i + " ";
    }
    document.getElementById("message").textContent = "Numbers: " + numbers;
}

// While Loop
let count = 0;
while (count < 3) {
    console.log("while loop count:", count);
    count++;
}

// DOM interaction
// Event listener for buttin showing greeting
document.getElementById("showMessage").addEventListener("click", showGreeting);

// Event listener for button to change color
document.getElementById("changeColor").addEventListener("click", changeColor);

// Event listener for button to list numbers
document.getElementById("listNumbers").addEventListener("click", listNumbers);