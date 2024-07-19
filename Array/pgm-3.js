var scores = [3, 1, 8, 2];

console.log("There are " + scores.length + " scores:");
console.log("The first score is " + scores[0]);
console.log("The second score is " + scores[1]);
console.log("The third score is " + scores[2]);
console.log("The fourth score is " + scores[3]);

// 1) Add a fifth score to the array
scores.push(5);

// 2) Add an extra console.log to display the new score
console.log("The fifth score is " + scores[4]);

// 3) Log the value of the last element to the console
console.log("The last score is " + scores[scores.length - 1]);

// 4) Add an extra score to the array and run the program again
scores.push(9);

console.log("There are now " + scores.length + " scores:");
console.log("The first score is " + scores[0]);
console.log("The second score is " + scores[1]);
console.log("The third score is " + scores[2]);
console.log("The fourth score is " + scores[3]);
console.log("The fifth score is " + scores[4]);
console.log("The last score is " + scores[scores.length - 1]);
