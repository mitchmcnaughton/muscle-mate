$(document).ready(function () {
    var currentDay = $("#currentDay");
    currentDay.text(dayjs().format("D, dddd, MMMM"));

    $("#workoutList").selectable();
});
