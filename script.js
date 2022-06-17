var currentDateEl = $('#current-date');

function displayDate() {
    var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
 currentDateEl.text(rightNow);
  }


setInterval(displayDate,1000);

