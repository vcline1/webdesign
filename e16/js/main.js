$(document).ready(function() {
// $('h1').css('color', 'white');
    $('#number5').click(function() {
        $('#artist-5').toggleClass('orange');
    });

    $('#number4').hover(function() {
        $('#number4').toggleClass('shiftText');
    });

    $('#number3')
    .mouseup(function() {
        // $('#artist-3').toggleClass('teal');
          $('#artist-3').toggleClass('lightTeal');
      })
      .mousedown(function() {
          $('#artist-3').toggleClass('lightTeal');
        });

    $('#number2').dblclick(function() {
          $('#artist-2').toggleClass('scaleText');
        });

    $('#artist-1').hover(function() {
      $('#artist-1').toggleClass('tan');
    });

});
