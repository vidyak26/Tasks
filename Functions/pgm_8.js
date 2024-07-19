// Updated displayMenu function with additional options
var displayMenu;

displayMenu = function () {
	console.log("Please choose an option:");
	console.log("(1) Print log");
	console.log("(2) Upload file");
	console.log("(3) Delete file"); // Added option
	console.log("(4) Rename file"); // Added option
	console.log("(9) Quit");
};

displayMenu();

// Define a new function displayMyMenu
function displayMyMenu() {
	console.log("Welcome to My Menu:");
	console.log("(1) View profile");
	console.log("(2) Edit settings");
	console.log("(3) Logout");
}

// Call displayMyMenu function
displayMyMenu();
