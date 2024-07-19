console.log("$" + totalCost(30, 40, 12)); // Displays: $510
var totalCost = function (callOutCharge, costPerHour, numberOfHours, discount) {
    var total = callOutCharge + costPerHour * numberOfHours;
    if (discount > 0) {
        total -= discount;
    }
    return total;
};
