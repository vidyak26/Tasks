var items = ["The Pyramids", "The Grand Canyon", "Bondi Beach"];

console.log("Dream destinations (" + items.length + " places):");

items.forEach(function (item) {
    console.log(" – " + item);
});

var items = ["The Pyramids", "The Grand Canyon", "Bondi Beach"];

var showItems = function() {
    console.log("Dream destinations (" + items.length + " places):");
    items.forEach(function (item) {
        console.log(" – " + item);
    });
};
showItems();
// Add an item
items.push("Machu Picchu");

// Remove an item
items.splice(1, 1); // Removes "The Grand Canyon"

// Display the current state of the array
showItems();
