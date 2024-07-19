// Function to show the sum of two numbers
var showSum = function (number1, number2) {
	var total = number1 + number2;
	console.log("The sum is " + total);
};

// Test showSum function
showSum(30, 23);   // Output: The sum is 53
showSum(2.8, -5);  // Output: The sum is -2.2

// 1) Use the showSum function to add 56 and 74.
showSum(56, 74);   // Output: The sum is 130

// 2) Create a showProduct function to multiply two numbers.
var showProduct = function (number1, number2) {
	var result = number1 * number2;
	console.log("The product is " + result);
};

// Test showProduct function
showProduct(5, 3);   // Output: The product is 15
showProduct(-4, 10); // Output: The product is -40

// 3) Use your function to multiply three pairs of numbers.
showProduct(2, 4);   // Output: The product is 8
showProduct(10, -2); // Output: The product is -20
showProduct(3.5, 2); // Output: The product is 7

// 4) Define showDifference and showQuotient for subtraction and division.
var showDifference = function (number1, number2) {
	var difference = number1 - number2;
	console.log("The difference is " + difference);
};

var showQuotient = function (number1, number2) {
	var quotient = number1 / number2;
	console.log("The quotient is " + quotient);
};

// Test showDifference and showQuotient functions
showDifference(10, 5);    // Output: The difference is 5
showDifference(20, 7);    // Output: The difference is 13

showQuotient(10, 2);      // Output: The quotient is 5
showQuotient(15, 3);      // Output: The quotient is 5
