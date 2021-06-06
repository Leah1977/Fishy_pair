
// // wait for the DOM to load before running the game.
// // get the button elements and add eventListeners to the buttons.

document.addEventListener('DOMContentLoaded', function() {

    // Create an array

const cards = document.querySelectorAll('.cards');

let hasFlippedCard = false;
let lockGameboard = false;
let firstCard, secondCard;
let cardsFlipped = 0;


function flipCard() {
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

      

function checkIfMatch() {
    //do cards match
    if(firstCard.dataset.image === secondCard.dataset.image)
    {
        //its a match
        disableCards()
    }
    else
    { 
        //not a match
        unflipCards()
    }
    
}

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

cards.forEach(card => card.addEventListener('click', flipCard));   //flip the card when clicked


// start game function

// declaring a move

let moves = 0;
let counter = document.querySelector(".moves");

console.log(moves);

// count players moves

function moveCounter() {
  moves++;
  counter.innerHTML = moves;

  //start timer on first click

  if(moves == 1) {
    second = 30;
    startTimer();

  } else {
    second = 0;
    stopTimer();
    return;
  }
}
})
// ___________________________________________________




    // 1.1 Create an addEventListener to Play button.

    // Declare Variable for level choice

    //   1.1.1. Go to game resetBoard

     //   1.1.2. Timer resets to 60 seconds.
      //   1.1.2. Moves resets to 0.

// 2. Start Game with first card choice.
     // 2.1. Choose a card to check
        // 2.1.1. Add click event to cards.
        // 2.1.2. Click on first card.
        // 2.1.3 Flip card to rotate.
        // 2.1.3 Choose a second card.
        

// 3. Check for match.
     // 3.1 Compare the two flipped cards.

// 4. Cards match
        // 4.1 If a match cards will remain open.
            // 4.1.1. Continue play.

// 5. Cards no match
      // 5.1 If cards do not match.
          // 5.1.1 Add a delay of 1 second.
          // 5.1.2 Cards flip back.
          // 5.1.3 Choose your next two cards.

// 6. Continue Play till all the cards match.

// 7. When all matches have been made.
      // 7.1. Game Ends        
        // 7.1.1 A pop up of Congratulations will appear if game completed before time runs out.
        // 7.1.2 A pop up of Hard Luck will appear if time runs out before all matches are made.
      
        // 7.2 Board resets.

// 8.  Restart Game.
       // Player will have an option to play again.

// 9.  Reset game
       // 9.1. Player can choose to reset the board at any time.
          // 9.1.1 Game board will reset
          // 9.1.2 Timer will reset
          // 9.1.3 Moves will reset

