var players = ["Dax", "Jahver", "Kandra", "Milo", "Ella"];
var players = ["Dax", "Jahver", "Kandra", "Milo", "Ella"];

var showArguments = function (item, index, wholeArray) {
    console.log("Item: " + wholeArray[index]);
    console.log("Index: " + index);
    console.log("Array: " + wholeArray);
};

players.forEach(showArguments);
