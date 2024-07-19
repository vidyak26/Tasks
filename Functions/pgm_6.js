// Calling the sayHello function three times

var sayHello;

sayHello = function () {
	console.log("Hello\nWorld!");
};

sayHello();
sayHello();
sayHello();

// Creating a function to print letters one by one
function printLetters() {
    var message = "Hello World!";
    for (var i = 0; i < message.length; i++) {
        console.log(message[i]);
    }
}

// Calling the printLetters function
printLetters();
