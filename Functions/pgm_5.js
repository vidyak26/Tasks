// Two more function definitions and assignments

var findTotal;
var displayMenu;
var number1, number2, result;

findTotal = function () {
    result = number1 + number2;
};

displayMenu = function () {
    console.log("Please choose an option:");
    console.log("(1) Print log");
    console.log("(2) Upload file");
    console.log("(9) Quit");
};

// Step 2: Assign values to number1 and number2
number1 = 10;
number2 = 20;

// Step 3: Run the findTotal function
findTotal();

// Step 4: Display the result on the console
console.log("Result of findTotal: " + result);

// Step 5: Run the displayMenu function
displayMenu();
