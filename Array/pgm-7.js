var items;
var showInfo;
var totalLetters = 0;

items = [
  "The Pyramids",
  "The Grand Canyon",
  "Bondi Beach"
];

showInfo = function (itemToShow) {
    console.log(itemToShow + " - " + itemToShow.length + " letters");
};

// 1) Adding extra items to the array
items.push("Machu Picchu");
items.push("Eiffel Tower");
items[3] = "Niagara Falls";

// 2) Iterating over the array and showing info
items.forEach(showInfo);

// 3) Function to find total number of letters in all items
var getTotalLetters = function () {
    items.forEach(function (item) {
        totalLetters += item.length;
    });
    return totalLetters;
};

console.log("Total letters in all items: " + getTotalLetters());
