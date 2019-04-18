$(document).ready(function() {
  $('.button')
  .mouseup(function() {
        $('.button').toggleClass('gray');
    })
    .mousedown(function() {
        $('.button').toggleClass('gray');
      });

      var coffeeArray = [ ".coffee1", ".coffee2", ".coffee3", ".coffee4", ".coffee5", ".coffee6", ".coffee7", ".coffee8", ".coffee9" ];
    	var randomNumber = Math.floor(Math.random() * coffeeArray.length);


      console.log(coffeeArray[randomNumber]);

      $('.button').click(function() {
        $('.coffeeimg').css('display', 'block');

      });
});




//
//
// $('#submit').click(function() {
//
//   if (guess == stripped || guess == fruitArray[randomNumber]) {
//     $('h1').text('Yup, ' + guess + " is right.");
//     $('input').text(guess);
//     $('.button p').text('Play Again?');
//     $('#submit').click(function() {
//       location.reload(true);
//     });
//
//   } else if (guess == none){
//     $('h1').text('Guess something.....');
//     $('.button p').text('Guess');
// } else {
//     $('h1').text('Nope, not ' + guess);
//     $('input').val('');
//     $('.button p').text('Guess Again');
//   }
// });
// });
