$(function () {
  if ($(".scroll").length) {
    $(".scroll").jScrollPane();
  }
  $(".hamburgar").on("click", function () {
    $("nav").slideToggle("open");
    $("nav").toggleClass("open");
    $(this).toggleClass("open");
  });
  $("body").on("click", ".listigHeader .compDetails, .action", function (e) {
    var el = $(this).parents(".listigHeader");
    $(".box-acco").find(".level-box").stop().slideUp();
    if ($(el).find(".action").hasClass("active")) {
      $(el).find(".action").removeClass("active");
    } else {
      $(".action").removeClass("active");
      $(el).find(".action").addClass("active");
    }
    $(el).closest(".box-acco").find(".level-box").stop().slideToggle();
  });
});

$(window).resize(function () {
  if ($(".scroll").length) {
    $(".scroll").jScrollPane();
  }
});
