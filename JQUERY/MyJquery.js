
$(document).ready(function () {
  $("button").click(function () {
    $("p").hide();
  });

  $("#btn2").click(function () {
    var a = $("#btn1");

    a[0].value = "new vlaue";

    //$("#btn1").prop('value', 'Save');

  });
});

