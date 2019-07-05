$(document).ready(function () {

  $(".home").click(function (event) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: $("header").offset().top + 'px'
    }, 'slow');
  })
  $(".about").click(function (event) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: $(".hello").offset().top + 'px'
    }, 'slow');
  })
  $(".blog").click(function (event) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: $(".blogSite").offset().top + 'px'
    }, 'slow');
  })
  $(".contact").click(function (event) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: $(".contactSite").offset().top + 'px'
    }, 'slow');
  })
  $(".home").click(function (event) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: $(".first").offset().top + 'px'
    }, 'slow');
  })
  $(".arrow").click(function (event) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: $(".first").offset().top + 'px'
    }, 'slow');
  })


});

// nav
let navBAR = document.querySelector('nav');

window.addEventListener("scroll", function () {
  if (window.scrollY != 0) {
    navBAR.style.backgroundColor = "#000";
    navBAR.style.width = 100 + "vw";
    navBAR.style.opacity = 0.8
  } else {
    navBAR.style.backgroundColor = "transparent";
  }
  // navBAR.style.fontSize = 5 + "px";
})