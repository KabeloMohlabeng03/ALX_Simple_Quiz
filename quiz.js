// Define the function to check the answer
function checkAnswer() {
    // Correct answer
    const correctAnswer = "4";
    
    // Retrieve the selected radio button
    const selectedOption = document.querySelector('input[name="quiz"]:checked');
    
    // Check if an option is selected
    if (selectedOption) {
        // Get the value of the selected option
        const userAnswer = selectedOption.value;
        
        // Compare userAnswer with correctAnswer
        const feedbackElement = document.getElementById('feedback');
        if (userAnswer === correctAnswer) {
            feedbackElement.textContent = "Correct! Well done.";
        } else {
            feedbackElement.textContent = "That's incorrect. Try again!";
        }
    } else {
        // If no option is selected
        const feedbackElement = document.getElementById('feedback');
        feedbackElement.textContent = "Please select an answer.";
    }
}

// Add event listener to the submit button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);