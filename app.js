// wait for the DOM to load before running the game.


document.addEventListener('DOMContentLoaded', function() {


// Create an array
const cards = document.querySelectorAll('.cards');

const movesElement = document.getElementById('moves');

let hasFlippedCard = false;
let lockGameboard = false;
let firstCard, secondCard;
let moves = 0;





// Start Game with first card choice.
 

function flipCard() {

    updateMoves();

    
    //flip the card
    if(lockGameboard) return;
    if(this === firstCard) return;

    this.classList.toggle('flip');
    
    if(!hasFlippedCard) {
        //first card clicked
        hasFlippedCard = true
        firstCard = this

        return;
    }

        //second card clicked
        secondCard = this

        checkIfMatch()
}

        

// 3. Check for match.
    


function checkIfMatch() {
// Compare the two flipped cards.
    if(firstCard.dataset.image === secondCard.dataset.image)
    {
// Cards match
// If a match cards will remain open.
        disableCards()
    }
    else
    { 
        //not a match
        unflipCards()
    }
}

// Continue Play till all the cards match.

function disableCards() {
    firstCard.removeEventListener('click', flipCard)
    secondCard.removeEventListener('click', flipCard)

    resetBoard()
}

function unflipCards() {
    lockGameboard = true;

    setTimeout( () => {
        firstCard.classList.remove('flip')
        secondCard.classList.remove('flip')

        resetBoard()
    }, 1400)
    }

    function resetBoard(){
        [hasFlippedCard, lockGameboard] = [false, false];
        [firstCard, secondCard] = [null, null];

    }

    (function shuffle() {
        cards.forEach(card => {
            let randomPlace = Math.floor(Math.random() * 12)
            card.style.order = randomPlace;
        });
    })();

cards.forEach(card => card.addEventListener('click', flipCard));   
// flip the card when clicked



function updateMoves() {
    movesElement.innerHTML = `${++moves}`;

}





//start timer on first click

let count = 60;
let setTimeOut;

function updateCount() {
      count = count - 1;
      document.getElementById("timer").innerHTML = count;
      setTimeOut(updateCount, 1000);
 
  }

updateCount();





// 7. When all matches have been made.
      // 7.1. Game Ends        
        // 7.1.1 A pop up of Congratulations will appear if game completed before time runs out.
        // 7.1.2 A pop up of Hard Luck will appear if time runs out before all matches are made.
      
        // 7.2 Board resets.



// let gameOver;

// function gameOver() {

//     clearInterval(interval);

//     totalGameTime = timer.innerHTML;
//     document.getElementsByClassName("game-over");

//     matchtedCards = 12;

// }

// gameOver();


// 8.  Restart Game.
       // Player will have an option to play again.

// 9.  Reset game
       // 9.1. Player can choose to reset the board at any time.
          // 9.1.1 Game board will reset
          // 9.1.2 Timer will reset
          // 9.1.3 Moves will reset   


})