// Function to display a player's health
var showPlayerHealth = function (playerName, playerHealth) {
    var healthInfo = playerName + ": health " + playerHealth + ".";
    console.log(healthInfo);
};

// Test the showPlayerHealth function
showPlayerHealth("Kandra", 50); // Output: Kandra: health 50.
showPlayerHealth("Dax", 40);    // Output: Dax: health 40.

// Further Adventures

// 2) Call the showPlayerHealth function with your own arguments
showPlayerHealth("Elena", 65); // Output: Elena: health 65.
