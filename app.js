function moveDoggy() {
  console.log("inside moveDoggy");
  console.log("difficulty: " + $('select').val());

  var left = Math.random()*500;
  var top = Math.random()*500;
  console.log("left: " + left + "; top: " + top);
  $('.inner-box').animate({
    "left": left,
    "top": top,
  });
  if ($('select').val() == "difficult") {
    var left = Math.random()*500;
    var top = Math.random()*500;
    console.log("left: " + left + "; top: " + top);
    $('.inner-box').animate({
      "left": left,
      "top": top,
    });
  } else if ($('select').val() == "extreme") {
    var left = Math.random()*500;
    var top = Math.random()*500;
    console.log("left: " + left + "; top: " + top);
    $('.inner-box').animate({
      "left": left,
      "top": top,
    });
    var left = Math.random()*500;
    var top = Math.random()*500;
    console.log("left: " + left + "; top: " + top);
    $('.inner-box').animate({
      "left": left,
      "top": top,
    });
  }
}

$(document).ready(function() {

  console.log( "ready!" );

  $('.inner-box').on('mouseover', moveDoggy);
  // $('.inner-box').on('mouseleave', moveDoggy);
  $('.inner-box').on('click', moveDoggy);

});
