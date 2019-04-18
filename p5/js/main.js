$(document).ready(function() {
  $('.button')
  .mouseup(function() {
        $('.button').toggleClass('gray');
    })
    .mousedown(function() {
        $('.button').toggleClass('gray');
      });

      var coffeeArray = [];
    	var randomNumber = Math.floor(Math.random() * coffeeArray.length);
});
