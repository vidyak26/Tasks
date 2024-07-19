var items = [];
var item = "The Pyramids";
var removed;

items.push(item);
items.push("The Grand Canyon");
items.push("Bondi Beach");

console.log(items); // ["The Pyramids", "The Grand Canyon", "Bondi Beach"]

removed = items.pop();

console.log(removed + " was removed"); // "Bondi Beach was removed"
console.log(items.join(" and ")); // "The Pyramids and The Grand Canyon"

// 1) Push another item onto the array
items.push("The Taj Mahal");

// 2) Log the joined items
console.log(items.join(" and ")); // "The Pyramids and The Grand Canyon and The Taj Mahal"

// 3) Set one of the items using square brackets
items[1] = "The Great Wall";

console.log(items.join(" and ")); // "The Pyramids and The Great Wall and The Taj Mahal"

// 4) Can you push more than one item at a time?
items.push("Machu Picchu", "Eiffel Tower");

console.log(items.join(" and ")); // "The Pyramids and The Great Wall and The Taj Mahal and Machu Picchu and Eiffel Tower"
