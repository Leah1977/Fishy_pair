// wait for the DOM to load before running the game.
document.addEventListener("DOMContentLoaded", function() {
	// Create an array
	const cards = document.querySelectorAll(".cards");
	const movesElement = document.getElementById("moves");
	const timeElement = document.getElementById("timer");
	const gameTime = 40;
	let hasFlippedCard = false;
	let lockGameboard = false;
	let firstCard, secondCard;
	let moves = 0;
	let count = gameTime;
	let timeInterval;
	let totalMatchedMove = 0;
	let overlays = Array.from(document.getElementsByClassName("overlay-text"));
	
	// Start Game with first card choice.
	// code used and adapted from You Tube tutorials by Web Dev Simplified 
	// and PORTexe    
	overlays.forEach(overlay => {
		overlay.addEventListener("click", () => {
			overlay.classList.remove("visible");
			
		});
	});

	cards.forEach(card => card.addEventListener("click", flipCard));

	function flipCard() {
		updateMoves();
		count === gameTime && startTimer();
		console.log("clicked card");
		console.log(this);
		// code used and adapted [freeCodeCamp.org - Memory Card Game -  
        // Javascript 
		// Tutorial](https://marina-ferreira.gihub.io/memory-game/)
		// and [matching game](https://scotch.io/tutorials/
		// how-to-build-a-memory-matching-game-in-javascript#toc-3-moves)    
		// flip the card
		if(lockGameboard) return;
		if(this === firstCard) return;
		this.classList.toggle("flip");
		if(!hasFlippedCard) {
			//first card clicked
			hasFlippedCard = true;
			firstCard = this;
			return;
		}
		//second card clicked
		hasFlippedCard = false;
		secondCard = this;
		checkIfMatch();

		console.log({firstCard, secondCard});
		console.log(firstCard.dataset.image);
	}
	// 3. Check for match.
	function checkIfMatch() {
		// Compare the two flipped cards.
		if(firstCard.dataset.image === secondCard.dataset.image) {
			// Cards match
			// If a match cards will remain open.
			disableCards();
			totalMatchedMove++;
		} else {
			//not a match
			unflipCards();
		}
	}
	// Continue Play till all the cards match.
	function disableCards() {
		firstCard.removeEventListener("click", flipCard);
		secondCard.removeEventListener("click", flipCard);
		resetBoard();
	}

	function unflipCards() {
		lockGameboard = true;
		setTimeout(() => {
			firstCard.classList.remove("flip");
			secondCard.classList.remove("flip");
			resetBoard();
		}, 1400);
	}

	function resetBoard() {
		[hasFlippedCard, lockGameboard] = [false, false];
		[firstCard, secondCard] = [null, null];
	}
	// 
	(function shuffle() {
		cards.forEach(card => {
			let randomPlace = Math.floor(Math.random() * 12);
			card.style.order = randomPlace;
		});
	})();  //extra parantheses allows the function to be executed immediately after definition
	
	function resetGameBoard() {
		movesElement.innerHTML = 0;
		totalMatchedMove = 0;
		count = gameTime;
		clearInterval(timeInterval);
		timeElement.innerHTML = gameTime;
	}

	function updateMoves() {
		movesElement.innerHTML = `${++moves}`;
	}
	//start timer on first click
	function startTimer() {
		timeInterval = setInterval(() => {
			if(timeInterval && count === 0) {
				clearInterval(timeInterval);
				timeInterval = null;
				if(totalMatchedMove === 6) {
					alert("Congratulations You Won!!");
					
				} else {
					alert("Game Over!! Better Luck Next Time!");
				}
				resetGameBoard();
			} else if(count > 0) {
				count = count-1;
				timeElement.innerHTML = count;
			}
		}, 1000);
	}
});

