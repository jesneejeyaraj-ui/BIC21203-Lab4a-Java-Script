
// Select HTML elements
const userInput = document.getElementById("userInput");
const checkBtn = document.getElementById("checkBtn");
const result = document.getElementById("result");

// Create a function
function checkInput() {

    // Read the input value
    const inputValue = userInput.value.trim();

    // Convert input into a number
    const number = Number(inputValue);

    // Check the input
    if (inputValue === "" || Number.isNaN(number)) {

        result.textContent = "Please enter a valid number!";

    } else if (number < 10) {

        result.textContent = "The number is lower than 10";

    } else if (number > 10) {

        result.textContent = "The number is higher than 10";

    } else {

        result.textContent = "The number is equal to 10";

    }
}

// Add click event listener
checkBtn.addEventListener("click", checkInput);
