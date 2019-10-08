// selecting elements

// modifying elements

// adding handlers

// $(document).ready(), tip $()

// executing http requests

$(function() {
    $('#add').click(() => {
        let num1 = + $('#num1').val();
        let num2 = + $('#num2').val();

        $('#answer').text(num1 + num2);
    })
});