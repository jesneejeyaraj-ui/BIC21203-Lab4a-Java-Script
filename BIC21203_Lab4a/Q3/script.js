// Select the button and orderes list 
const generateBtn = document.getElementById("generateBtn");
const numberList = document.getElementById("numberList");

// Create a function
function generateNumbers() {

    // Clear existing list items 
    numberList.textContent = "";

    // Use for loop from 1 to 5 
    for (let i = 1; i <= 5; i++) {
        const listItem = document.createElement("li");
        listItem.textContent = i;
        numberList.appendChild(listItem);
    }
}

// Add click event listener 
generateBtn.addEventListener("click", generateNumbers);