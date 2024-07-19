// A player object

var player1 = {
    name: "Kandra",
    health: 50,
    place: "The Dungeon of Doom",
    items: ["a rusty key", "The Sword of Destiny", "a piece of cheese"]
};

console.log(player1.name);
console.log(player1.name + " is in " + player1.place);
console.log(player1.name + " has health " + player1.health);
console.log("Items: " + player1.items.join(", "));

// Create a second player
var player2 = {
    name: "Grom",
    health: 75,
    place: "The Cursed Forest",
    items: ["a magic amulet", "a healing potion", "a map"]
};

// Log their details to the console
console.log(player2.name);
console.log(player2.name + " is in " + player2.place);
console.log(player2.name + " has health " + player2.health);
console.log("Items: " + player2.items.join(", "));

/* Further Adventures
 *
 * Notice how storing the items as an array
 * allows for easier manipulation, such as adding
 * or removing items. Arrays provide flexibility
 * compared to storing items as a single string.
 *
 * JavaScript arrays are powerful for managing
 * collections of data, like a player's inventory.
 * See Chapter 8 for more details.
 *
 */
