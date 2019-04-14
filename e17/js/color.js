$(document).ready(function() {
    // run function on initial page load
	fruitGuess();
});

function fruitGuess() {
	var fruitArray = ["Orange", "Apple", "Watermelon", "Lemon", "Mango", "Grape", "Cherry", "Banana", "Olive"];
	var randomNumber = Math.floor(Math.random() * fruitArray.length);
	var stripped = fruitArray[randomNumber].toLowerCase();
	console.log(fruitArray[randomNumber]);
	console.log(stripped);
	$('#submit').click(function() {
		var input = $('input').val();
		var guess = input.toLowerCase();
		console.log(guess);
		if (guess == stripped || guess == fruitArray[randomNumber]) {
			$('h1').text('Yup, ' + guess + " is right.");
			$('input').val('');
			$('.button p').text('Play Again?');
			$('#submit').click(function() {
				location.reload(true);
			});
		} else  {
			$('h1').text('Nope, not ' + guess);
			$('input').val('');
			$('.button p').text('Want to Try Again?');
			$('#submit').click(function() {
				location.reload(true);
			});
		}
	})
}
