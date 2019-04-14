 // $(document).ready(function() {
    // var number = Math.floor(Math.random() * 1000001);

  	// console.log(number);

  	// var guesses = '';

  	// $('#submit').click(function() {
  	 	// var guess = $('input').val();
  	 	// guesses += guess + ' ';
  	 	// $('.guesses p').text(guesses);
  		// console.log(guess);

//   		if (number == guess) {
//   			$('h1').text(number + ' is right!');
//   			$('input').val('');
//   		} else if (number < guess) {
//   			$('h1').text(guess + ' is too high');
//   			$('input').val('')
//   		} else {
//   			$('h1').text(guess + ' is too low');
//   			$('input').val('');
//   		}
//   	});
// });


$(document).ready(function() {
//   $('.button').click(function() {
//       $('.button').toggleClass('tomato');
//   });

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
