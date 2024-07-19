// Using a property in a calculation

var player1;
var player2;

player1 = {
    name: "Max",
    score: 0
};

player2 = {
    name: "Alex",
    score: 0
};

console.log(player1.name + " has scored " + player1.score);

player1.score = player1.score + 50;

console.log(player1.name + " has scored " + player1.score);

// 1) Increase player1's score by 10%
player1.score = player1.score + (player1.score * 0.10);

console.log(player1.name + " has scored " + player1.score);

// 2) Add a second player and set an initial score
player2.score = 30;

console.log(player2.name + " has scored " + player2.score);

// 3) Find the sum of their scores and log it to the console
var totalScore = player1.score + player2.score;

console.log(player1.name + " and " + player2.name + " have a total score of " + totalScore);
