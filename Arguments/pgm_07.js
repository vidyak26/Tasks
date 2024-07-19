// Function to display a player's name
var showPlayerName = function (playerName) {
    console.log("The player's name is " + playerName);
};

// Test showPlayerName function
showPlayerName("Kandra"); // Output: The player's name is Kandra
showPlayerName("Dax");    // Output: The player's name is Dax

// 2) Modify the function to also display the number of letters in the player's name
var showPlayerName = function (playerName) {
    console.log("The player's name is " + playerName);
    console.log("Number of letters in the name: " + playerName.length);
};

// Test the updated showPlayerName function
showPlayerName("Kandra");
showPlayerName("Dax");
showPlayerName("John"); // Output: The player's name is John
                        //         Number of letters in the name: 4
