// Function to display a player's name
var showPlayerName = function (playerName) {
    console.log(playerName);
};

// Function to display a player's health
var showPlayerHealth = function (playerName, playerHealth) {
    console.log(playerName + " has health " + playerHealth);
};

// Function to display a player's place
var showPlayerPlace = function (playerName, playerPlace) {
    console.log(playerName + " is in " + playerPlace);
};

// Function to display a player's information
var showPlayerInfo = function (playerName, playerPlace, playerHealth) {
    console.log("");

    showPlayerName(playerName);

    console.log("----------------------------");

    showPlayerPlace(playerName, playerPlace);
    showPlayerHealth(playerName, playerHealth);

    console.log("----------------------------");
    console.log("");
};

// Define players with properties
var player1 = {
    name: "Kandra",
    place: "The Dungeon of Doom",
    health: 50
};

var player2 = {
    name: "Dax",
    place: "The Old Library",
    health: 40
};

// Display player information
showPlayerInfo(player1.name, player1.place, player1.health);
showPlayerInfo(player2.name, player2.place, player2.health);

/* Further Adventures */

// 1) Define a showLine function with a parameter for the length of line.
var showLine = function(length) {
    var line = "";
    for (var i = 0; i < length; i++) {
        line += "-";
    }
    console.log(line);
};

// Test the showLine function
showLine(5); // Output: -----
showLine(20); // Output: --------------------

// 2) Use your showLine function to display the player's name in a box.
var showNameInBox = function(playerName) {
    showLine(playerName.length + 4);
    console.log("| " + playerName + " |");
    showLine(playerName.length + 4);
};

// Test the showNameInBox function
showNameInBox("Kandra"); // Output:
// ----------
// | Kandra |
// ----------

// 3) Update your showLine function to use asterisks rather than dashes.
var showLine = function(length) {
    var line = "";
    for (var i = 0; i < length; i++) {
        line += "*";
    }
    console.log(line);
};

// Test the updated showLine function
showLine(5); // Output: *****
showLine(20); // Output: ********************

// Use showNameInBox with updated showLine function
showNameInBox("Kandra"); // Output:
// **********
// * Kandra *
// **********
