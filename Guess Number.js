
			function getRandomInt(min, max){
 			min = Math.ceil(min);
  			max = Math.floor(max);
  			return Math.floor(Math.random() * (max - min) + min); 
			};
			var number = getRandomInt(0, 6);
    		var guess = prompt("Guess a number between 0 and 5.", "");
       		var guessNumber = 0;
       		while(guess != number){
        		alert("You guessed " + guess + ": The correct number was " + number + ". Please guess again");
          		guessNumber += 1;
          		number = getRandomInt(0, 6);
          		guess = prompt("Guess a number between 0 and 5.", "");
        	}
        	guessNumber += 1;
        	alert("You guessed " + guess + ": You were correct! It took you " + guessNumber + " guesses.");
