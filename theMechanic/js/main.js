$(document).ready(function () {
    $(".header").scrollToFixed();
    $(".footer").scrollToFixed({
        bottom:0,
        limit: $(".footer").offset().top
    });
    $(".img-cont").hover(function (){
        $(this).addClass("img-trans");
        $(this).find(":nth-child(2)").show();
    }, function (){
        $(this).removeClass("img-trans");
        $(this).find(":nth-child(2)").hide();
    });

    new WOW().init();

    var headArr = ["Welcome to theMechanic!", "We provide emergency services", "Lost in the wilderness?", "Can't move your vehicle?", "Give us a call and we'll fix it!"];
    var headString = null;
    var i = 1;
    var repeat = setInterval(function (){
        slideHead(i);
    }, 2500);
    function slideHead (){
        if (i==5) {
            i=0;
        }
        headString=headArr[i];
        $("#dynamic").slideUp(200, function (){
            $("#dynamic").empty().append(headString).slideDown(300);
        });
        i++;
    }
});


