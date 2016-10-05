$(function () {
// your jquery goes here
    var counter = 0;

    $('#btn_left').click(function () {
        counter++;
        $('#content').html(counter)
    });

    $('#btn_center').click(function () {
        counter--;
        $('#content').html(counter)
    });

    $('#btn_right').click(function () {
        counter++;
        $('#content').html(0);
    });

    // seems ok but..im still using global variables and..
    // now imagine that i want to change for multiply..
    // i would have to CHANGE the code logic

    // now imagine that i wanted that the same button to make 2 different operations..
    // i would have to change again the whole code logic instead of just adding new functionality to the existing code
});
