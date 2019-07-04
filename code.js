$(document).ready(function () {

  $(".home").click(function (event) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: $("header").offset().top + 'px'
    }, 'slow');
  })

  $(".hi").click(function (event) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: $(".hello").offset().top + 'px'
    }, 'slow');
  })

  $(".about").click(function (event) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: $(".aboutSite").offset().top + 'px'
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
      scrollTop: $(".fifth").offset().top + 'px'
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