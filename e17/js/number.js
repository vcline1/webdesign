$(document).ready(function() {
  $('.button').hover(function() {
      $('.button').toggleClass('tomato');
  });

	var fruitArray = ["Orange", "Apple", "Watermelon", "Lemon", "Mango", "Grape", "Cherry", "Banana", "Olive"];
	var randomNumber = Math.floor(Math.random() * fruitArray.length);
	var stripped = fruitArray[randomNumber].toLowerCase();

	console.log(fruitArray[randomNumber]);
	console.log(stripped);

  var guesses = '';
  var none = '';


	$('#submit').click(function() {
		var input = $('input').val();
		var guess = input.toLowerCase();
    guesses += guess + '  ';
    $('.guesses p').text(guesses);
		console.log(guess);

		if (guess == stripped || guess == fruitArray[randomNumber]) {
			$('h1').text('Yup, ' + guess + " is right.");
			$('input').text(guess);
			$('.button p').text('Play Again?');
			$('#submit').click(function() {
				location.reload(true);
			});

		} else if (guess == none){
      $('h1').text('Guess something.....');
      $('.button p').text('Guess');
  } else {
			$('h1').text('Nope, not ' + guess);
			$('input').val('');
			$('.button p').text('Guess Again');
		}
	});
});
