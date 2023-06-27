//$("h2").css("color","red");
//$("h1").addClass("big-title");
//$("a").attr("href","www.yahoo.com");
/*$("h1").click(function() {
  $("h1").css("color","purple");
})

$("button").click(function() {
  $("h1").css("color","orange");
})

$(document).keypress(function(event){
  $("h1").html(event.key);
})*/

$("button").on("click", function(){
  $("h1").slideToggle().animate({opacity:0.5});
})
