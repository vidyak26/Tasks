var sum2 = add(30, 15);
console.log(sum2); // Displays: 45
console.log("The sum of 50 and 23 is " + add(50, 23)); // Displays: The sum of 50 and 23 is 73
var sumOfThree = add(add(10, 20), 30);
console.log(sumOfThree); // Displays: 60
var addThree = function(num1, num2, num3) {
    var total = add(add(num1, num2), num3);
    return total;
};

// Example usage
var sumOfThreeNumbers = addThree(10, 20, 30);
console.log(sumOfThreeNumbers); // Displays: 60
