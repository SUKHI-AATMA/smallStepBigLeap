$(function () {
  if ($(".scroll").length) {
    $(".scroll").jScrollPane();
  }
  $(".hamburgar").on("click", function () {
    $("nav").slideToggle("open");
    $("nav").toggleClass("open");
    $(this).toggleClass("open");
  });
  $("body").on("click", ".listigHeader, .action", function (e) {
    var el = $(this);
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

$(window)
  .on("resize", function () {
    if ($(".scroll").length) {
      $(".scroll").jScrollPane();
    }
  })
  .on("load", function () {
    if (window.location.href.split("?")[1] == "success=true") {
      $(".cuForm").hide();
      $(".contectUsSucess").show();
    }
  });

var clList = [".fadeIn, .fadeUp, .fadeDown"];

function animateClass() {
  setTimeout(function () {
    clList.forEach(function (item, index) {
      var anim = document.querySelectorAll(item);
      for (var i = 0, nbs = anim.length; i < nbs; i++) {
        var animELe = anim[i];
        var rect = animELe.getBoundingClientRect();
        var isVisible =
          rect.top - window.innerHeight < 0 && rect.bottom > -50 ? true : false;
        if (isVisible) {
          animELe.classList.add("animate");
        } else {
          animELe.classList.remove("animate");
        }
      }
    });
  }, 100);
}
$(window)
  .on("load", function () {
    animateClass();
  })
  .on("scroll", function () {
    animateClass();
  });
animateClass();
