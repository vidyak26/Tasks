var displayQuestion = function (questionAndAnswer) {
    var options = [ "A", "B", "C", "D", "E" ];
    
    console.log(questionAndAnswer.question);
    
    questionAndAnswer.answers.forEach(
      function (answer, i) {
        console.log(options[i] + " - " + answer);
      }
    );
    console.log(); // add a blank line after the question
};

var question1 = {
    question: "What is the capital of France?",
    answers: [
        "Bordeaux",
        "F",
        "Paris",
        "Brussels"
    ],
    correctAnswer: "Paris"
};

var question2 = {
    question: "Which planet is known as the Red Planet?",
    answers: [
        "Venus",
        "Mars",
        "Jupiter",
        "Saturn"
    ],
    correctAnswer: "Mars"
};

var question3 = {
    question: "Who wrote 'Romeo and Juliet'?",
    answers: [
        "William Shakespeare",
        "Charles Dickens",
        "Jane Austen",
        "Leo Tolstoy"
    ],
    correctAnswer: "William Shakespeare"
};

// Step 1: Add two more question objects
// Step 2: Create an array with your question objects
var questions = [question1, question2, question3];

// Step 3: Use forEach to call displayQuestion on each question
questions.forEach(function(question, index) {
    console.log("Question " + (index + 1) + ":");
    displayQuestion(question);
});

// Step 4: Execute a command at the prompt to display a particular question
// Example: Display question 2
console.log("Displaying question 2:");
displayQuestion(questions[1]);
