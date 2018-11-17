$(".head-left button").click(function () {
    $("#inputState option:selected").removeAttr("selected");
    var btnText = $(this).text();
    $("#inputState option:contains('" + btnText + "')").attr('selected', true);

    var indexa = $(".city-btns button").index($(this)) + 1;
    /* var offsetPx = (indexa - 4) * 30;  */
    var offsetPx = (indexa - 4) * 44;
    $(".city-btns").animate({
        top: -offsetPx + "px"
    }, 400);
});