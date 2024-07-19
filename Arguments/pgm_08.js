// Function to display a player's name
var showPlayerName = function (playerName) {
    console.log(playerName);
};

// Define player objects
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

// Display player names
showPlayerName(player1.name); // Output: Kandra
showPlayerName(player2.name); // Output: Dax

// Further Adventures

// 1) Change the showPlayerName function to display playerName in upper case
var showPlayerName = function (playerName) {
    console.log(playerName.toUpperCase());
};

// Test the updated function
showPlayerName(player1.name); // Output: KANDRA
showPlayerName(player2.name); // Output: DAX

// 2) Modify the function to display the player's name in lower case
var showPlayerName = function (playerName) {
    console.log(playerName.toLowerCase());
};

// Test the updated function
showPlayerName(player1.name); // Output: kandra
showPlayerName(player2.name); // Output: dax
