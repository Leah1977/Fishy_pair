const cards = document.querySelectorAll('.cards');

let hasFlippedCard = false;
let lockGameboard = false;
let firstCard, secondCard;
let cardsFlipped = 0;


const sound = document.getElementById("gamesound");

sound.muted = true;  // mute sound



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


// to restart the game with the restart icon






// level 2 option

function mediumLevel() {
    let level2 = document.getElementById("pairs-gameboard");
    level2.innerHTML = `
      <section id = "pairs-gameboard">
        <div class = "cards" data-image="smallgoldfish">
          <img class ="card-front-face" src= "assets/images/jellyfish.gif" alt="smallgoldfish">
          <img class ="card-back-face" src="assets/images/fishpairscardname.png" alt="fish logo">
        </div>
        <div class = "cards" data-image="smallgoldfish">
          <img class ="card-front-face" src= "assets/images/jellyfish.gif" alt="smallgoldfish">
          <img class ="card-back-face" src="assets/images/fishpairscardname.png" alt="fish logo">
        </div>
        <div class = "cards" data-image="clownfish">
          <img class ="card-front-face" src= "assets/images/turtle.gif" alt="clownfish">
          <img class ="card-back-face" src="assets/images/fishpairscardname.png" alt="fish logo">
        </div>
        <div class = "cards" data-image="clownfish">
          <img class ="card-front-face" src= "assets/images/turtle.gif" alt="clownfish">
          <img class ="card-back-face" src="assets/images/fishpairscardname.png" alt="fish logo">
        </div>
        <div class = "cards" data-image="hammerheadshark">
          <img class ="card-front-face" src= "assets/images/mantis.gif" alt="hammerheadshark">
          <img class ="card-back-face" src="assets/images/fishpairscardname.png" alt="fish logo">
        </div>
        <div class = "cards" data-image="hammerheadshark">
          <img class ="card-front-face" src= "assets/images/mantis.gif" alt="hammerheadshark">
          <img class ="card-back-face" src="assets/images/fishpairscardname.png" alt="fish logo">
        </div>
        <div class = "cards" data-image="jellyfish">
          <img class ="card-front-face" src= "assets/images/findingnemo.jpg" alt="jellyfish">
          <img class ="card-back-face" src="assets/images/fishpairscardname.png" alt="fish logo">
        </div>
        <div class = "cards" data-image="jellyfish">
          <img class ="card-front-face" src= "assets/images/findingnemo.jpg" alt="jellyfish">
          <img class ="card-back-face" src="assets/images/fishpairscardname.png" alt="fish logo">
        </div>
        <div class = "cards" data-image="johndory">
          <img class ="card-front-face" src= "assets/images/nemoanddory.jpg" alt="johndory">
          <img class ="card-back-face" src="assets/images/fishpairscardname.png" alt="fish logo">
        </div>
        <div class = "cards" data-image="johndory">
          <img class ="card-front-face" src= "assets/images/nemoanddory.jpg" alt="johndory">
          <img class ="card-back-face" src="assets/images/fishpairscardname.png" alt="fish logo">
        </div>
        <div class = "cards" data-image= "redandbluetail">
          <img class ="card-front-face" src= "assets/images/shark.gif" alt="redandbluetail">
          <img class ="card-back-face" src="assets/images/fishpairscardname.png" alt="fish logo">
        </div>
        <div class = "cards" data-image="redandbluetail">
          <img class ="card-front-face" src= "assets/images/shark.gif" alt="redandbluetail">
          <img class ="card-back-face" src="assets/images/fishpairscardname.png" alt="fish logo">
        </div>
        <div class = "cards" data-image="smallgoldfish">
          <img class ="card-front-face" src= "assets/images/jellyfish.gif" alt="smallgoldfish">
          <img class ="card-back-face" src="assets/images/fishpairscardname.png" alt="fish logo">
        </div>
        <div class = "cards" data-image="smallgoldfish">
          <img class ="card-front-face" src= "assets/images/jellyfish.gif" alt="smallgoldfish">
          <img class ="card-back-face" src="assets/images/fishpairscardname.png" alt="fish logo">
          </div>
        <div class = "cards" data-image="clownfish">
          <img class ="card-front-face" src= "assets/images/turtle.gif" alt="clownfish">
          <img class ="card-back-face" src="assets/images/fishpairscardname.png" alt="fish logo">
        </div>
        <div class = "cards" data-image="clownfish">
          <img class ="card-front-face" src= "assets/images/turtle.gif" alt="clownfish">
          <img class ="card-back-face" src="assets/images/fishpairscardname.png" alt="fish logo">
        </div>         
    </section>
`;

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
            let randomPlace = Math.floor(Math.random() * 16)
            card.style.order = randomPlace;
        });
    })();
}







// gametimer

setInterval(function() {
    let timerElement = document.getElementById("timer");
    let currentTime = timerElement.innerHTML;
    currentTime --;
    timerElement.innerHTML = currentTime;
},1000);

// let remainingTime = 60;
//     let element = document.getElementById('gametimer');
//     let timer = setInterval(countdown, 1000); 
//     let restart = document.getElementsByClassName('pairs-gameboard')


//     function countdown() {
//         if (remainingTime == -1) {
//             clearTimeout(timer);
            
//         } else if {
//             element.innerHTML = remainingTime + '  seconds remaining';
//             remainingTime--; 
//         } 
        
        
//     }

//     let gamecomplete = true;


// code tried with classes and constructors
// unable to connect it with browser


// class fishyPairs {
//   constructor(totalTime, cards) {
    
//     this.cardsArray = cards;       /
//     this.totalTime = totalTime;
//     this.timeRemaining = totalTime;
//     this.timer = document.getElementById('timer');
//     this.moves = document.getElementById('moves');
//     this.restart = document.getElementById('restart');
//   }


//   startGame() {
//     this.totalClicks = 0;
//     this.timeRemaining = this.totalTime; //time will reset each new game
//     this.cardToCheck = null;
//     this.matchedCards = [];
//     this.busy = true;
//     setTimeout (() => {
//       this.shuffle(this.cardsArray);
//       this.countDown = this.startCountDown();
//       this.busy = false;
//     }, 500);   // half a second time-out 
//     this.hideCards();
//     this.timer.innerHTML = this.timeRemaining;
//     this.moves.innerHTML = this.totalClicks;
   
//   }

//   hideCards() {
//     this.cardsArray.forEach(cards => {
//       cards.classList.remove('visible');
//       cards.classList.remove('matched');
//     });
//   }

//   flipCard(card) {
//     if(this.canFlipCard(card)) {
//       this.totalClicks++;
//       this.moves.innerHTML = this.totalClicks;  
//       cards.classList.add('visible');

//       if(this.cardToCheck) {
//         this.checkForCardMatch(card);
//       } else {
//         this.cardToCheck = card;
      
//       }
//     }

//     checkForCardMatch(card) {
//       if(this.getCardType(card) === this.getCardType(this.cardToCheck));
//            this.cardMatch(card, this.cardToCheck);
//       else
//            this.cardMismatch(card, this.cardToCheck);
  
//       this.cardToCheck = null;  
//     }

//     cardMatch(card1, card2) {
//       this.matchedCards.push(card1);
//       this.matchedCards.push(card2);
//       card1.classList.add('matched');
//       if(this.matchedCards.length === this.cardsArray.length);
//          this.winner();
//     }
  
//     cardMismatch(card1, card2) {    //give the player a second to see the image
//       this.busy = true;
//       setTimeout(() => {
//         card1.classList.remove('visible');
//         card2.classList.remove('visible');
//         this.busy= false;
//       }, 1000);
//     }

//     getCardType(card) {
//       return card.getElementsByClassName('card-front-face')[0].src;
//     }

//     startCountDown() {
//       return setInterval(() => {
//         this.timeRemaining--;
//         this.timer.innerHTML = this.timeRemaining;
//         if (this.timeRemaining === 0)
//              this.gameOver();
//       }, 1000);
//     }

//     gameOver() {
//       clearInterval(this.countDown);
//       document.getElementById('game-over').classList.add('visible');
//     }

//     winner() {
//       clearInterval(this.countDown);
//       document.getElementById('winner').classList.add('visible');
//       this.hideCards();
//     }
  

//     // Used Fisher-Yates Shuffle Algorithm Wikipedia
//   shuffle(cardsArray) {   
//     for (let i = this.cardsArray.length - 1; 1> 0; i --) {
//       let randomIndex = Math.floor(Math.random() * (i + 1));   //creates a random float number which we add 1.
//       cardsArray[randomIndex].style.order = i;
//       cardsArray[i].style.order = randomIndex;
//     }
//   }

//   canFlipCard(card) {

//     return !this.busy && !this.matchedCards.includes(card) && card !==
//     this.cardToCheck;
//     }
//   }

// function ready() {
//   let overlays = Array.from(document.getElementsByClassName('overlay-text')); 
//   //to create an array from the html collection
//   let cards = Array.from(document.getElementsByClassName('cards'));   
//   //to create an array from the element
//   let game = new fishyPairs(30, cards);

//   overlays.forEach(overlay => {
//      overlay.addEventListener('click', () => {
//        overlay.classList.remove('visible');
//        game.startGame();
//      });
//   });
//   cards.forEach(card => {
//     card.addEventListener('click', () => {
//       game.flipCard(card);
//     });
//   });
//  } 

//  if(document.readyState === 'loading') {              
//   // if the page hasn't loaded display "loading"
//     document.addEventListener('DOMContentLoaded', ready());  
// } else {
//     ready();
// }


