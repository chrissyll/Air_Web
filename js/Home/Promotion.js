$(window).on("scroll", function () {
    var scrollDistance = $(window).scrollTop();
    if (scrollDistance > 380) {
        $('.wpb_imgr .img-fluid').animate({
            left: 50 + "px",
            opacity: 1
        }, 700);
        $('.wpb_imgl .img-fluid').animate({
            right: 50 + "px",
            opacity: 1
        }, 1000);
    }
});