const m = moment();

console.log(m.format("dddd MMM Mo YYYY"));
console.log(m.format("[Today is] dddd MM-DD-YYYY"));

var currentDay = document.getElementById("currentDay");
currentDay.textContent = moment().format('MMMM Do YYYY');

function hour() {
    var hour = moment().hour();
    console.log(hour)
    for (var i = 0; i < 9; i++) {
        var time = $(".time-block").attr("id")
        var textareaId = "#textarea" + i
        var event = localStorage.getItem(i + 9);
    if (event !== null) {
        $(`#${i + 9} textarea`).val(event)
        }
    }
}

hour();

$(".saveBtn").on('click', function () {
    var buttonIndex = parseInt($(this).parent().attr('id'));
    var textarea = $(this).parent().find("textarea");
    var event = textarea.val().trim();
    localStorage.setItem($(this).parent().attr("id"), event);
})
if ($(this).data("hour") < hour) {
    $(this).addClass("past")
} else if ($(this).data("hour") === hour) {
    $(this).addClass("present")
} else {
    $(this).addClass("future")
}
var textValues = JSON.parse(localStorage.getItem("textarea"))

var item = this.id