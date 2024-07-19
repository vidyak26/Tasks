// A quiz question constructor

var QuizQuestion = function (question, answer) {
    this.question = question;
    this.answer = answer;
    this.options = [];

    this.addOption = function (option) {
        this.options.push(option);
    };

    this.showQuestion = function () {
        console.log(this.question);
        this.options.forEach(function (option, i) {
            console.log("(" + (i + 1) + ") " + option);
        });
    };
};

var question1 = new QuizQuestion(
    "What is the capital of France?",
    "Paris"
);

question1.addOption("Bordeaux");
question1.addOption("Lyon");
question1.addOption("Paris");
question1.addOption("Brussels");

// 1) Add a fifth option to question1.
question1.addOption("Nice");

question1.showQuestion();
// Output:
// What is the capital of France?
// (1) Bordeaux
// (2) Lyon
// (3) Paris
// (4) Brussels
// (5) Nice

// 2) Create two more questions.

var question2 = new QuizQuestion(
    "What is the largest planet in our solar system?",
    "Jupiter"
);

question2.addOption("Earth");
question2.addOption("Jupiter");
question2.addOption("Saturn");
question2.addOption("Mars");
question2.addOption("Neptune");

var question3 = new QuizQuestion(
    "Which element has the chemical symbol 'O'?",
    "Oxygen"
);

question3.addOption("Gold");
question3.addOption("Oxygen");
question3.addOption("Hydrogen");
question3.addOption("Carbon");
question3.addOption("Nitrogen");

// Using the console to show the questions and their answers:
// In the browser console, you would type:

// 3) At the console prompt type:
// question2.showQuestion();
// Press Enter
question2.showQuestion();
// Output:
// What is the largest planet in our solar system?
// (1) Earth
// (2) Jupiter
// (3) Saturn
// (4) Mars
// (5) Neptune

// 4) At the console prompt type:
// question2.answer;
// Press Enter
console.log(question2.answer); // Output: Jupiter

// Similarly, you can show question3:
question3.showQuestion();
// Output:
// Which element has the chemical symbol 'O'?
// (1) Gold
// (2) Oxygen
// (3) Hydrogen
// (4) Carbon
// (5) Nitrogen

console.log(question3.answer); // Output: Oxygen
