$(document).ready(function () {

$("#currentDate").text(moment().format('dddd,  MMMM Do YYYY'));    
$('#currentTime').text(moment().format('h:mm a'));
//9 am - 5 pm
let hoursArray = [9, 10, 11, 12, 13, 14, 15, 16, 17];

var storage = JSON.parse(localStorage.getItem('storage')) || []

function renderTable() {

    hoursArray.forEach((hr) => {
        const row = $(`<tr id = 'row${hr}'><th scope = 'row'>${hr}</th>`);
        const time = $(`<td id = 'time${hr}' class = 'cal-time'>${hr} O'Clock</td>`);
        const content = 
        $(`<div class="input-group">
            <div class="input-group-prepend">
                <button class ="input-group-text" id = 'saveBtn${hr}' class = 'cal-saveBtn is-right' >Save content</button>
            </div>
                <textarea id = 'input${hr}' class="form-control" aria-label="Content"></textarea>
            </div>
        </tr>`);
        const br = $('<br>');

    row.append(time, content, br);
    $('#calendarIterate').append(row);

    setStyle(hr);
    saveData(hr);

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

function saveData(hr) {
    $(`#saveBtn${hr}`).on('click', () => {
         console.log(`this btn: saveBtn${hr}`);
        const userInput = ($(`#input${hr}`).val());
        console.log(userInput);
        const inputBtn = ($(`#saveBtn${hr}`)[0].id);
        console.log(inputBtn);

        let dataObj = {
            userContent : userInput,
            btnId : inputBtn
        }

        storage.push(dataObj);
        localStorage.setItem('storage', JSON.stringify(storage));

        console.log(dataObj);
    });

    
};

renderTable();

}); //end doc ready func