$(document).ready(function() {

  // Create the show/hide function
  $("#navToggle a").click(function(e) {
    e.preventDefault();

    $("header > nav").slideToggle();
    $("#logo").toggleClass("menuUp menuDown");
  });

  // Create Drop Down Menu for Mobile Devices
  $("header > nav > ul > li > a").click(function(e) {
    if ($(window).width() < "768") {
      if ($(this).siblings().size() > 0) {
        e.preventDefault();
        $(this).siblings().slideToggle("fast")
      }
    }
  });

  // Create a tidy up function for if the user decides to play with the screen size between mobile and desktop.
  $(window).resize(function() {
    if ($(window).width() > "768") {
      $("header > nav").css("display", "block");

      if ($("#logo").attr('class') == "menuDown") {
        $("#logo").toggleClass("menuUp menuDown");
      }
    } else {
      $("header > nav").css("display", "none");
    }
  });
});
