$(document).ready(function () {

$("#currentDate").text(moment().format('dddd,  MMMM Do YYYY'));    
$('#currentTime').text(moment().format('h:mm a'));



//9 am - 5 pm
let hoursArray = [9, 10, 11, 12, 1, 2, 3, 4, 5];

hoursArray.forEach(function(hr) {
    const time = $("<th id = 'time'>")
    const content = $("<th id = 'content'>");
    const saveBtn = $("<th id = 'saveBtn' class = 'is-right'><button>Save Button</button></th>");

   // $('#time').append(time);
   // $('#content').append(content);
   // $('#saveBtn').append(saveBtn);
   $('#calendarIterate').append(time, content, saveBtn)
});

$.each({hoursArray}, function (key, value) {
    console.log(this);
    console.log(value);
})



}); //end doc ready func


$(window).on('load', function() {
const currentTime = moment().format('h:mm a');
const currentDay = moment().format('dddd,  MMMM Do YYYY');

console.log(currentTime);  
console.log(currentDay);
});