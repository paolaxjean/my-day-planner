var currentDateEl = $('#current-date');

function displayDate() {
    var rightNow = moment().format('dddd: MMM DD, YYYY');
 currentDateEl.text(rightNow);
}

function loadTasks() {
    // check if localStorage has any tasks
    // if not then return
    if (localStorage.getItem("tasks") == null) return;
}

setInterval(displayDate,1000);
