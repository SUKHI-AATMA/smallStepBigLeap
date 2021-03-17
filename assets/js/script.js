$(function () {
  if ($(".scroll").length) {
    $(".scroll").jScrollPane();
  }
});

$(window).resize(function () {
  if ($(".scroll").length) {
    $(".scroll").jScrollPane();
  }
});
