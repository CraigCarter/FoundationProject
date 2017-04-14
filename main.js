//click
  //adding #num
  //html string inside button
  //reverting

var cartnumber = 0;

$(document).ready(
  $('.button').click(function(){
    $('.button').html('Added to Cart!');
    cartnumber++;
    $('.shoppingcart span').html(cartnumber);

    setTimeout(function(){
      $('.button').html('Buy Now!');
    }, 1000);
  }),
  $('.productdetails').click(function(){
    $('.productdetails').addClass('active');
    $('.sizefit').removeClass('active');
    $('.reviewsstars').removeClass('active');
    $('.excitingtopic').show();
    $('.sizefitdescription').hide();
    $('.customersaresaying').hide();
  }),
  $('.sizefit').click(function(){
    $('.sizefit').addClass('active');
    $('.productdetails').removeClass('active');
    $('.reviewsstars').removeClass('active');
    $('.sizefitdescription').show();
    $('.excitingtopic').hide();
    $('.customersaresaying').hide();
  }),
  $('.reviewsstars').click(function(){
    $('.reviewsstars').addClass('active');
    $('.productdetails').removeClass('active');
    $('.sizefit').removeClass('active');
    $('.customersaresaying').show();
    $('.excitingtopic').hide();
    $('.sizefitdescription').hide();
  })
);


/*  var original = " "

  setTimeout(function(){
    $('#buyNow').html(orginal);
  }, 1000);

  var container = $('.container'); */
