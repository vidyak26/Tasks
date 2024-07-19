// A calendar event constructor

var CalendarEvent = function (title, startDate, startTime, endTime) {
    this.title = title;
    this.startDate = startDate;
    this.startTime = startTime;
    this.endTime = endTime;

    this.showEvent = function () {
        var dateString = this.startDate + " - (" + this.startTime + " - " + this.endTime + ")";
        console.log(this.title + ": " + dateString);
    };
};

var calEvent1 = new CalendarEvent(
    "Annual Review",
    "3/5/16",
    "4.00pm",
    "5.00pm"
);

calEvent1.showEvent();
// Output: Annual Review: 3/5/16 - (4.00pm - 5.00pm)

// Further Adventures

// 1) Add a second event.
var calEvent2 = new CalendarEvent(
    "Team Meeting",
    "3/6/16",
    "2.00pm",
    "3.00pm"
);

// 2) Call the showEvent method on your new calendar event.
calEvent2.showEvent();
// Output: Team Meeting: 3/6/16 - (2.00pm - 3.00pm)
