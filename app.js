var offset = 0

function moveSymbol() {
  console.log("inside moveSymbol");
  offset = offset + 40;
  $('p').css({"padding-left": offset});
}

$(document).ready(function() {

  console.log( "ready!" );

  $('p').on('mouseover', moveSymbol);
  $('p').on('mouseleave', moveSymbol);

});
