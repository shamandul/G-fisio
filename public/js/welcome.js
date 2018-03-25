$(window).scroll(function() {
    let scrollTop = $(this).scrollTop();
    $("#cabecera").css("background-position-y", -(scrollTop * 0.5) + "px");
});
$(window).scroll(function() {
    let scrollTop = $(this).scrollTop();
    $("#seccion1").css("background-position-y", -(scrollTop * 0.2) + "px");
});
