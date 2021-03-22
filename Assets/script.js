
 var hours = [
    '9:00 AM',
    '10:00 AM',
    '11:00 AM',
    '12:00 PM',
    '1:00 PM',
    '2:00 PM',
    '3:00 PM',
    '4:00 PM',
    '5:00 PM',
];

$(document).ready(function () {
    var currentHour = moment().hour();

    // Displays the current date and time in the Jumbotron
    var update = function () {
        $('#currentDay').text(moment().format('MMM DD, YYYY [at] hh:mm:ss a'));
        $('#currentTime').text(moment().format('h:mm:ss a'));
    };
    update();
    setInterval(update, 1000);})

  