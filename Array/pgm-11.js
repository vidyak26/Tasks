// Original function to calculate total bill
var getTotalBill = function (itemCosts, itemCounts) {
    var total = 0;
  
    itemCosts.forEach(function (cost, i) {
      total += cost * itemCounts[i];
    });
  
    return total;
};
  
var costs = [ 1.99, 4.95, 2.50, 9.87 ];
var numOfEach = [ 2, 1, 5, 2 ];

console.log("Original total cost: $" + getTotalBill(costs, numOfEach));

// Further Adventure 1: Add an extra item
costs.push(3.25);
numOfEach.push(3);

console.log("Updated total cost with extra item: $" + getTotalBill(costs, numOfEach));

// Further Adventure 2: Change function to iterate over itemCounts
var getTotalBillUpdated = function (itemCosts, itemCounts) {
    var total = 0;
  
    itemCounts.forEach(function (count, i) {
      total += itemCosts[i] * count;
    });
  
    return total;
};
  
console.log("Updated total cost iterating over itemCounts: $" + getTotalBillUpdated(costs, numOfEach));

// Further Adventure 3: Create a single array of objects
var items = [
    { cost: 1.99, numberBought: 2 },
    { cost: 4.95, numberBought: 1 },
    { cost: 2.50, numberBought: 5 },
    { cost: 9.87, numberBought: 2 },
    { cost: 3.25, numberBought: 3 }
];

// Further Adventure 4: Update getTotalBill to accept items array
var getTotalBillFromItems = function (items) {
    var total = 0;
  
    items.forEach(function (item) {
      total += item.cost * item.numberBought;
    });
  
    return total;
};
  
console.log("Total cost from items array: $" + getTotalBillFromItems(items));
