const m =moment();

console.log(m.format("dddd MMM Mo YYYY"));
console.log(m.format("[Today is] dddd MM-DD-YYYY"));

// moment().format('MMMM dd YYYY');

var currentDay = document.getElementById("currentDay");
currentDay.textContent = moment().format('MMMM Do YYYY')

function hour(){
var hour = moment().hour();
console.log(hour)
for (var i = 0; i < 9; i++) {
    // Runs 5 times, with values of step 0 through 4.
   var time=$(".time-block").attr("id")
   // Checking the time of the time block against what time it actually is
   
   //based on that time, if/else the time is in the past add the class of past. If the time is in the present add the class of present. Repeat for future.
   //look at event listeners inside activities. Setup for the button that is clicked.

   hour.headerClick.addEventListener(handleHeaderClick);

  }
}