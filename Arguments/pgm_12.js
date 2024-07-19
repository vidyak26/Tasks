// Function to display a player's location
var showPlayerPlace = function (playerName, playerPlace) {
    console.log(playerName.substring(0, 1) + " is in " + playerPlace);
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

// Test the showPlayerPlace function
showPlayerPlace(player1.name, player1.place); // Output: K is in The Dungeon of Doom
showPlayerPlace(player2.name, player2.place); // Output: D is in The Old Library
