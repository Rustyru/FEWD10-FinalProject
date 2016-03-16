$(document).ready(function () {
    $('.hamburger').click(function () {
        //alert("click");
        $(this).next().slideToggle();
    });
    $(window).scroll(function () {
        var scrl = $(document).scrollTop();
        if ($(document).scrollTop() > 10) {
            $('.banner').addClass('shrink');
        } else {
            $('.banner').removeClass('shrink');
        }
    });
});
