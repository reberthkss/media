$(function() {
  var wh = $(document).height();
  $("#loading").height(wh);

  $(window).resize(function() {
    wh = $(document).height();
    $("#loading").height(wh);
  });

  window.onload = (function() {
    $("#loading").hide();
  })();
});
