$(document).ready(function () {
    $("#slider_w").slider({
        range: "min",
        value: 400,
        min: 10,
        max: 800,
        slide: function (event, ui) {
            $('img').width(ui.value);
            $('#img_w').html(ui.value + "px");
        }
    });
    $("#slider_h").slider({
        range: "min",
        value: 400,
        min: 10,
        max: 800,
        slide: function (event, ui) {
            $('img').height(ui.value);
            $('#img_h').html(ui.value + "px");
        }
    });
    $('#img_w').html($("#slider_w").slider("value") + "px");
    $('#img_h').html($("#slider_h").slider("value") + "px");

    $('#isCircle').on('click', function(){
       if(this.checked){
           $('img').addClass("circle", 1000);
       } else {
           $('img').removeClass("circle", 1000);
       }
    });
});
