$(document).ready(function() {
    var mixer = mixitup('.portfolio-container');

    $('#portfolio-flters li').on('click', function() {
        $('#portfolio-flters li').removeClass('filter-active');
        $(this).addClass('filter-active');
    });
});