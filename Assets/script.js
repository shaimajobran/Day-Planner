
 var timeTable = [
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
 
//deciding if the time is now ,erlier ,later
var hour= moment().hour();
//var hour=12;
console.log(hour);

$(".row").each(function() {
    var time=$(this).attr('id');
   // console.log(time);
   if ( time < hour){
      // console.log(time,"before");
      $(this).css({"backgroundColor": "gray"});
   }
   else if (time == hour){
      // console.log(time,"current");
      $(this).css({"backgroundColor": "green"});
   }
   else if (time > hour){
       //console.log(time,"after");
       $(this).css({"backgroundColor": "red"});
   }
});


   
$(".saveBtn").click(function(){
    var timeBlock = $(this).attr("id");
   // console.log(timeBlock);
 
  // console.log(textContent);
    var textValue =$(this).siblings().next().val();
  //console.log(textValue);

    //Save our data in localStorage
    saveData(timeBlock, textValue);

});

//this function is going to save the text (value)and the time in text area inside localstorage
function saveData(timeBlock, textValue){
    //console.log(timeBlock, textValue);
    var mySchedule = JSON.parse(localStorage.getItem('mySchedule') || '{}');
    mySchedule[timeBlock]=textValue;

    //set our data into localStorage
    localStorage.setItem('mySchedule', JSON.stringify(mySchedule));
}


//on page load, write our data from localStorage into our page
$(document).ready(function() {
    var myScheduleData = JSON.parse(localStorage.getItem('mySchedule') || '{}');
    var allTextArea = $("textarea")
   // console.log(allTextArea);

   $.each(allTextArea, function(index, item) { //item is the html of the textarea tag  <textarea class="col-md-10 description"id="14">
        var item = $(item);   //convert to jquery object
        var timeBlock = $(this).attr("id");
       // console.log(timeBlock);

       $.each(myScheduleData, function(key, value) {
           if (key == timeBlock){
                item.text(value);
           }
       })

   })

})









   
