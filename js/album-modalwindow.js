$(".album-li .album-div-3 >img").click(function () {
    var src = $(this).attr("alt");
    var size = $(this).attr("class")
    $(".modal-block").fadeIn()
    $(".modal-block").css("display", "flex")
  
    $("#popup").attr("src", src);
    $("#popup").attr("class", size)
  })
  $(".img-section >span").click(function () {
    $(".modal-block").css("display", "none")
  })