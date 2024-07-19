// Functions to get player's name, health, and location
var getPlayerName = function (playerName) {
    return playerName;
};

var getPlayerHealth = function (playerName, playerHealth) {
    return playerName + " has health " + playerHealth;
};

var getPlayerPlace = function (playerName, playerPlace) {
    return playerName + " is in " + playerPlace;
};

var getBorder = function () {
    return "********************";
};

// Function to get player's information
var getPlayerInfo = function (playerName, playerPlace, playerHealth) {
    var playerInfo;

    playerInfo = "\n" + getPlayerName(playerName);
    playerInfo += "\n" + getBorder();
    playerInfo += "\n" + getPlayerPlace(playerName, playerPlace);
    playerInfo += "\n" + getPlayerHealth(playerName, playerHealth);
    playerInfo += "\n" + getBorder();
    playerInfo += "\n";

    return playerInfo;
};

// Testing the functions
console.log(getPlayerInfo("Kandra", "The Dungeon of Doom", 50));
console.log(getPlayerInfo("Dax", "The Enchanted Forest", 75));

// Calling getPlayerInfo without any arguments
console.log(getPlayerInfo());
