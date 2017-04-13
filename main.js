//click
  //adding #num
  //html string inside button
  //reverting

var cartnumber = 0;

$(document).ready(
  $('.button').click(function(){
    $('.button').html("Added to Cart!");
    cartnumber++;
    $('.shoppingcart span').html(cartnumber);

    setTimeout(function(){
      $('.button').html("Buy Now!");
    }, 1000);
  }
));


/*  var original = " "

  setTimeout(function(){
    $('#buyNow').html(orginal);
  }, 1000);

  var container = $('.container'); */
