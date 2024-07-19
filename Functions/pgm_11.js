// Define quiz question objects
var quizQuestion1 = {
    question: "What is the capital of France?",
    options: ["Bordeaux", "F", "Paris", "Brussels"],
    correctAnswer: "Paris",
    marksForQuestion: 2
};

var quizQuestion2 = {
    question: "Who wrote 'Harry Potter and the Philosopher's Stone'?",
    options: ["J.K. Rowling", "J.R.R. Tolkien", "George R.R. Martin", "C.S. Lewis"],
    correctAnswer: "J.K. Rowling",
    marksForQuestion: 3
};

var quizQuestion3 = {
    question: "Which planet is closest to the sun?",
    options: ["Earth", "Mars", "Venus", "Mercury"],
    correctAnswer: "Mercury",
    marksForQuestion: 1
};

// Function to display quiz question details
var showQuizQuestion = function (question) {
    console.log("Question: " + question.question);
    console.log("Options:");
    for (var i = 0; i < question.options.length; i++) {
        console.log("(" + (i + 1) + ") " + question.options[i]);
    }
    console.log("Correct Answer: " + question.correctAnswer);
    console.log("Marks: " + question.marksForQuestion);
    console.log("------------------------------");
};

// Display each quiz question using the showQuizQuestion function
showQuizQuestion(quizQuestion1);
showQuizQuestion(quizQuestion2);
showQuizQuestion(quizQuestion3);
