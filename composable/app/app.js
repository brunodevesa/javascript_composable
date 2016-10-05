$(function () {
// your jquery goes here

    // enum in js. Operations available:
    var operations = {
        increment: increment,
        decrement: decrement,
        reset: reset
    };

    // sexy way of calling (abstraction things).
    $('#btn_left').click(function () {
        var dom_element = 'content';
        changeDOMValue(dom_element,operations.increment);

        var dom_element = 'content2';
        changeDOMValue(dom_element,operations.decrement);

    });

    $('#btn_center').click(function () {
        var dom_element = 'content';
        changeDOMValue(dom_element, operations.decrement);

        var dom_element = 'content2';
        changeDOMValue(dom_element, operations.increment);
    });

    $('#btn_right').click(function () {
        var dom_element = 'content';
        changeDOMValue(dom_element, operations.reset);
        var dom_element = 'content2';
        changeDOMValue(dom_element, operations.reset);

    });




    // no global variables here
    function changeDOMValue(dom_element, action) {

        // gets the current number(value) of the DOM element
        var value = Number($('#'+dom_element+'').text());

        // calling the composable function.
        // Only changes the operation called ('add' to 'subtract' or whatever).
        var res = changeValue(value, action);

        // put the value into the DOM element
        $('#'+dom_element+'').html(res);

    }

    // easy testable: changeValue(3, add) : result must be 4
    function changeValue(value, action) {
        return action(value);
    }


    // easy testable. never gonna need to change
    function increment(value) {
        return value + 1;
    }

    // easy testable. never gonna need to change
    function decrement(value) {
        return value - 1;
    }

    // easy testable. never gonna need to change
    function reset(value) {
        return value = 0;
    }
    //easy to add more functions..

});