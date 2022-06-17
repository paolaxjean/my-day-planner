var currentDateEl = $('#current-date');
var saveButtonEl = $('save-btn');

//display date function
function displayDate() {
    var rightNow = moment().format('dddd: MMM Do, YYYY');
 currentDateEl.text(rightNow);
}

//localstorage for task


//save button function
saveButtonEl.on('click', function () {
    var saveTask = ("");
});


setInterval(displayDate,1000);
