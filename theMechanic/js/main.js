$(document).ready(function () {

    $(".header").scrollToFixed();
    $(".footer").scrollToFixed({
        bottom:0,
        limit: $(".footer").offset().top});
});
