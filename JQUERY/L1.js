
window.ready = function () {

    alert("window.onload");

};

$(document).ready(function () {
    $("a").click(function (event) {
        alert("Thanks for visiting!");
        $( this ).hide( "slow" );
        event.preventDefault(); //Prevents default  navigation
    });

    $("#btn1").click(function (event) {
        $("#a1").show( "slow" );
        $("#a1").addClass("button");
    });
    $("#btn2").click(function (event) {
        $("a").removeClass("button");
    });
    
});