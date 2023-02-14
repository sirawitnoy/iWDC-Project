$(".header-openbtn").click(function () {
	$(this).toggleClass('active');
    $("#header-nav").toggleClass('panelactive');
});

$("#header-nav a").click(function () {
    $(".header-openbtn").removeClass('active');
    $("#header-nav").removeClass('panelactive');
});