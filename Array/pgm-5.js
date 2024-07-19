var getVisitorReport = function (visitorArray, dayInWeek) {
    var days = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
    ];
    var index = dayInWeek - 1;
    var visitorReport = "There were ";
    visitorReport += visitorArray[index];
    visitorReport += " visitors ";
    visitorReport += "on " + days[index];

    return visitorReport;
};

var visitors = [354, 132, 210, 221, 481, 301, 122];

var reportFriday = getVisitorReport(visitors, 5); // Friday
console.log(reportFriday);

// 3) New function for monthly visitor report
var getMonthlyVisitorReport = function(monthArray, weekIndex, dayIndex) {
    var weekArray = monthArray[weekIndex];
    return getVisitorReport(weekArray, dayIndex);
};

// 4) Creating week arrays and a month array
var week1 = [300, 250, 180, 200, 400, 150, 100];
var week2 = [350, 280, 200, 210, 420, 160, 110];
var week3 = [320, 270, 190, 220, 410, 170, 120];
var week4 = [310, 260, 185, 190, 390, 180, 130];

var monthArray = [week1, week2, week3, week4];

// Testing the getMonthlyVisitorReport function
var reportWeek3Wednesday = getMonthlyVisitorReport(monthArray, 2, 3); // Week 3, Wednesday
console.log(reportWeek3Wednesday);

var reportWeek4Sunday = getMonthlyVisitorReport(monthArray, 3, 7); // Week 4, Sunday
console.log(reportWeek4Sunday);
