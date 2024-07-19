// Functions to get player's name, health, location, and items
var getPlayerName = function (playerName) {
    return playerName;
};

var getPlayerHealth = function (playerName, playerHealth) {
    return playerName + " has health " + playerHealth;
};

var getPlayerPlace = function (playerName, playerPlace) {
    return playerName + " is in " + playerPlace;
};

var getPlayerItems = function (playerName, playerItems) {
    return playerName + " has items: " + playerItems;
};

var getBorder = function () {
    return "================================";
};

var getPlayerInfo = function (playerName, playerPlace, playerHealth, playerItems) {
    var playerInfo;

    playerInfo = "\n" + getPlayerName(playerName);
    playerInfo += "\n" + getBorder();
    playerInfo += "\n" + getPlayerPlace(playerName, playerPlace);
    playerInfo += "\n" + getPlayerHealth(playerName, playerHealth);
    playerInfo += "\n" + getPlayerItems(playerName, playerItems);
    playerInfo += "\n" + getBorder();
    playerInfo += "\n";

    return playerInfo;
};

// Player objects with items property added
var player1 = {
    name: "Kandra",
    place: "The Dungeon of Doom",
    health: 50,
    items: "a rusty key, a piece of cheese"
};

var player2 = {
    name: "Dax",
    place: "The Old Library",
    health: 40,
    items: "a magic wand, a spell book"
};

// Displaying player information
console.log(getPlayerInfo(player1.name, player1.place, player1.health, player1.items));
console.log(getPlayerInfo(player2.name, player2.place, player2.health, player2.items));
