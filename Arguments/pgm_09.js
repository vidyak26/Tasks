// Function to display a player's health
var showPlayerHealth = function (playerName, playerHealth) {
    console.log(playerName + ": health " + playerHealth + ".");
};

// Test the showPlayerHealth function
showPlayerHealth("Kandra", 50); // Output: Kandra: health 50.
showPlayerHealth("Dax", 40);    // Output: Dax: health 40.

// Further Adventures

// 2) Call the showPlayerHealth function with your own arguments
showPlayerHealth("Elena", 65); // Output: Elena: health 65.

// 3) Declare a variable called healthInfo inside the showPlayerHealth function
var showPlayerHealth = function (playerName, playerHealth) {
    var healthInfo;
    healthInfo = playerName + ": health " + playerHealth + ".";
    console.log(healthInfo);
};

// Test the updated showPlayerHealth function
showPlayerHealth("Kandra", 50); // Output: Kandra: health 50.
showPlayerHealth("Dax", 40);    // Output: Dax: health 40.
showPlayerHealth("Elena", 65);  // Output: Elena: health 65.
