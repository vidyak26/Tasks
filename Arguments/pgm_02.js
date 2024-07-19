var msg;
var showMessage;

msg = "It's full of stars!";

showMessage = function () {
	console.log(msg); // Corrected to log 'msg' instead of 'message'
};

showMessage();

// Further Adventures

// 1) Update the console.log so the program works.
// This is already corrected in the initial fix.

// 2) Declare another message variable and assign it a value.
var anotherMsg = "Hello, universe!";

// 3) Display the new message as well as the old one.
console.log(msg); // Prints "It's full of stars!"
console.log(anotherMsg); // Prints "Hello, universe!"

// 4) Display a single message created by joining the two strings.
var combinedMsg = msg + " " + anotherMsg;
console.log(combinedMsg); // Prints "It's full of stars! Hello, universe!"
