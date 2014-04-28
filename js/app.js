
$(document).ready(function() {
	
	/*--- Defining key variables ---*/
	var randomNumber;
	var guessCount;
	var currentGuess;

	/*--- The function to trigger a new game ---*/
	function newGame() {
		randomNumber = generateNumber();
		guessCount = 0;
		guessCountInsert();
		$("#guessList").empty();
		$("#feedback").remove();
	  	$(".game").prepend("<h2 id='feedback'>Make your guess!</h2>");
	}

	/*--- Get random number between 0 and 100 ---*/
	function generateNumber() {
		return Math.floor(Math.random() * 99 + 1);
	}

	/*--- Replacing '0' w/ guessCount ---*/
	function guessCountInsert() {
		document.getElementById("count").innerHTML = guessCount;
	}

	/*--- Determining feedback based off of user guess to randomNumber ---*/
	function feedback(diff) {
		if (diff == 0) {
		  	$("#feedback").remove();
			$(".game").prepend("<h2 id='feedback'>You guessed the random number correctly! It was " + randomNumber + "! </h2>");
		} else if (diff <= 6) {
			$("#feedback").remove();
			$(".game").prepend("<h2 id='feedback'>You are so close to guessing correctly that you are practically on fire!</h2>");
		} else if (diff <= 15) {
			$("#feedback").remove();
			$(".game").prepend("<h2 id='feedback'>You are hot.</h2>");
		} else if (diff <= 30) {
			$("#feedback").remove();
			$(".game").prepend("<h2 id='feedback'>You are warm</h2>");
		} else {
			$("#feedback").remove();
			$(".game").prepend("<h2 id='feedback'>You are super cold.</h2>");
		}

	}

	/*--- Key function for calculation w/ validty checks ---*/
	function master() {
		event.preventDefault;
		var currentGuess = $(".text").val();
		console.log("User choice " + currentGuess);
		console.log("Random Number " + randomNumber);
			if (isNaN(currentGuess)) {
				$("#feedback").remove();
				$(".game").prepend("<h2 id='feedback'>Please insert an actual number.</h2>");
			} else if (currentGuess >= 1 && currentGuess <= 100){
				guessCount++;
				guessCountInsert();
				$(".guessBox").append("<li>" + currentGuess + "</li>");
				feedback(Math.abs(randomNumber - currentGuess));
			} else {
				$("#feedback").remove();
				$(".game").prepend("<h2 id='feedback'>Please insert a number between 1 and 100 inclusive.</h2>");
			}
		$(".text").val("");
	}


	/*--- Establishing a new game upon document ready ---*/
	newGame();
	guessCountInsert();

	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);
  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

	/*--- Triggering a new game on button click ---*/
	$(".new").click(function(event) {
		event.preventDefault();
		newGame();
	});

  	/*--- Adjust to inputted value on button submission ---*/
  	$("form").on("click", ".button", function() {
  		master();
  	});
});


