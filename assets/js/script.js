$(function () {
  if ($(".scroll").length) {
    $(".scroll").jScrollPane();
  }
  $(".hamburgar").on("click", function () {
    $("nav").slideToggle("open");
    $("nav").toggleClass("open");
    $(this).toggleClass("open");
  });
});

$(window).resize(function () {
  if ($(".scroll").length) {
    $(".scroll").jScrollPane();
  }
});
