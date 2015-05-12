function moveDoggy() {
  console.log("inside moveDoggy");
  var left = Math.random()*500;
  var top = Math.random()*500;
  console.log("left: " + left + "; top: " + top);
  $('.inner-box').animate({
    "left": left,
    "top": top,
  });
}

$(document).ready(function() {

  console.log( "ready!" );

  $('.inner-box').on('mouseover', moveDoggy);
  // $('.inner-box').on('mouseleave', moveDoggy);
  $('.inner-box').on('click', moveDoggy);

});
