const m = moment();

console.log(m.format("dddd MMM Mo YYYY"));
console.log(m.format("[Today is] dddd MM-DD-YYYY"));

// moment().format('MMMM dd YYYY');

var currentDay = document.getElementById("currentDay");
currentDay.textContent = moment().format('MMMM Do YYYY');

function hour() {
    var hour = moment().hour();
    console.log(hour)
    for (var i = 0; i < 9; i++) {
        // Runs 5 times, with values of step 0 through 4.
        var time = $(".time-block").attr("id")
        var textareaId = "#textarea" + i

        var event = localStorage.getItem(i + 9);

        if (event !== null) {
            // var getTextArea = $(textareaId)
            $(`#${i + 9} textarea`).val(event)
            // getTextArea.val();
        }
    }
}

hour();

$(".saveBtn").on('click', function () {
    //get id number associated with button
    var buttonIndex = parseInt($(this).parent().attr('id'));
    // get corresponding textarea by index number
    var textarea = $(this).parent().find("textarea");
    var event = textarea.val().trim();
    //piece together components to create corresponding textarea id
    //var integer = parseInt(buttonIndex) + 1
    //var textareaId = "#textarea" + 1
    // saves associated textarea id with value; example: #textarea2...Breakfast
    localStorage.setItem($(this).parent().attr("id"), event);
})
// Checking the time of the time block against what time it actually is
if ($(this).data("hour") < hour) {
    $(this).addClass("past")
} else if ($(this).data("hour") === hour) {
    $(this).addClass("present")
} else {
    $(this).addClass("future")
}
//based on that time, if/else the time is in the past add the class of past. If the time is in the present add the class of present. Repeat for future.
var textValues = JSON.parse(localStorage.getItem("textarea"))

//look at event listeners inside activities. Setup for the button that is clicked.
var item = this.id
// $(this).find('textarea[type="text"]').val(textValues[item]);