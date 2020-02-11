$(document).ready(function () {

$("#currentDate").text(moment().format('dddd,  MMMM Do YYYY'));    
$('#currentTime').text(moment().format('h:mm a'));
//9 am - 5 pm
let hoursArray = [9, 10, 11, 12, 13, 14, 15, 16, 17];

function renderTable() {

    hoursArray.forEach((hr) => {
        const row = $(`<tr id = 'row${hr}'><th scope = 'row'>${hr}</th>`);
        const time = $(`<td id = 'time${hr}' class = 'cal-time'>${hr} O'Clock</td>`);
        const content = $(`<td id = 'content${hr}' 'class = 'cal-content' colspan = '4'><input id = 'input${hr} type = 'text' >What do you have planned?</input></td`);
        const saveBtn = $(`<td id = 'saveBtn${hr}' class = 'cal-saveBtn is-right'><button for = 'input${hr}'>Save Button</button></td></tr>`);
        const br = $('<br>');

        var inputID = $(`#input${hr}`).val();
        var input = $(`#input${hr}`);
        var btnInput = $(':button');

    row.append(time, content, saveBtn, br)
    $('#calendarIterate').append(row);


    $(`#saveBtn${hr}`).on('click', () => {
       // data.push(localStore);
       // localStorage.setItem('data', JSON.stringify(data));   
        console.log(`this btn: saveBtn${hr}`);
    });



    setStyle(hr);

    });
    
}

function setStyle(hr) {
    const currentHour = moment().format('HH');

    if (hr < currentHour) {
        $(`#row${hr}`).addClass('table-danger');

    } else if (hr > currentHour) {
        $(`#row${hr}`).addClass('table-success');

    } else {
        $(`#row${hr}`).addClass('table-light');
    }

};

var data = JSON.parse(localStorage.getItem('data')) || [];

renderTable();

}); //end doc ready func


$(window).on('load', function() {
const currentTime = moment().format('HH:mm');
const currentDay = moment().format('dddd,  MMMM Do YYYY');

console.log(currentTime);  
console.log(currentDay);
});