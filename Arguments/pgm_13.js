// Function to display a player's name
var showPlayerName = function (playerName) {
    console.log(playerName);
};

// Function to display a player's health
var showPlayerHealth = function (playerName, playerHealth) {
    console.log(playerName + " has health " + playerHealth);
};

// Function to display a player's location
var showPlayerPlace = function (playerName, playerPlace) {
    console.log(playerName + " is in " + playerPlace);
};

// Function to display a line of dashes
var showLine = function () {
    console.log("----------------------------");
};

// Function to display a blank line
var showBlankLine = function () {
    console.log("");
};

// Function to display a player's information
var showPlayerInfo = function (playerName, playerPlace, playerHealth) {
    showBlankLine();

    showPlayerName(playerName);

    showLine();

    showPlayerPlace(playerName, playerPlace);
    showPlayerHealth(playerName, playerHealth);

    showLine();

    showBlankLine();
};

// Test the showPlayerInfo function
showPlayerInfo("Kandra", "The Dungeon of Doom", 50);
showPlayerInfo("Dax", "The Old Library", 40);
