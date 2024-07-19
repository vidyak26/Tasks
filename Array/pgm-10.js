// Step 1: Create an array of rectangle objects
var rectangles = [
    { length: 5, width: 3 },
    { length: 7, width: 2 },
    { length: 4, width: 4 }
];

// Step 2: Define an assignArea function
var assignArea = function(rectangle) {
    rectangle.area = rectangle.length * rectangle.width;
};

// Step 3: Define a showInfo function
var showInfo = function(rectangle) {
    console.log("Length: " + rectangle.length);
    console.log("Width: " + rectangle.width);
    console.log("Area: " + rectangle.area);
    console.log("---");
};

// Step 4: Use forEach with assignArea and showInfo
rectangles.forEach(function(rectangle) {
    assignArea(rectangle);
    showInfo(rectangle);
});
