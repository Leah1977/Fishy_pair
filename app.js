class fishyPairs {
  constructor(totalTime, cards) {
    this.cardsArray = cards;
    this.totalTime = totalTime;
    this.timeRemaining = totalTime;
    this.timer = document.getElementById('timer');
    this.moves = document.getElementById('moves');
    this.restart = document.getElementById('restart');
  }
}

  function startGame() {
    this.totalClicks = 0;
    this.timeRemaining = this.totalTime; //time will reset each new game
    this.cardToCheck = null;
    this.matchedCards = [];
    this.busy = true;
    setTimeout (() => {
      this.shuffle(this.cardsArray);

    })
  }

  function canFlipCard(_cards) {
    return !this.busy && !this.matchedCards.includes(card) && card !==
    this.cardToCheck;
  }




// Used Fisher-Yates Shuffle Algorithm Wikipedia
  function shuffle(cardsArray) {   
    for (let i = this.cardsArray.length - 1; 1> 0; i --) {
      let randomIndex = Math.floor(Math.random() * (i + 1));
      cardsArray[randomIndex].style.order = i;
      cardsArray[i].style.order = randomIndex;
    }

  }
console.log(shuffle);
  


if (document.readyState == 'loading') {              
  // if the page hasn't loaded display "loading"
  document.addEventListener('DOMContentLoaded', ready);  
} else {
    ready();
}

function ready() {
  let overlays = Array.from(document.getElementsByClassName('overlay-text')); 
  //to create an array from the element
  let cards = Array.from(document.getElementsByClassName('cards'));   
  //to create an array from the element
  let game = new FishyPairs (100, cards);

  overlays.forEach(overlay => {
     overlay.addEventListener('click', () => {
       overlay.classList.remove('visible');
       game.startGame();
     });
  });
} 

// let card = document.getElementsByClassName('.cards');
// let cards = [...card];

// const pairs = document.getElementsById('pairs-gameboard');

// let moves = 0;
// let counter = document.querySelector('moves');

// let matchedCard = document.getElementsByClassName('match');

// let closeicon = document.querySelector('.close');

// let modal = document.getElementById('instructionsmodal');

// var openedCards = [];

// function shuffle(array) {
//   var currentIndex = array.length, temporaryValue, randomIndex;

//   while (currentIndex !==0) {
//     randomIndex = Math.floor(Math.random() * currentIndex);
//     currentIndex -= 1;
//     temporaryValue = array[currentIndex];
//     array[currentIndex] = array[randomIndex];
//     array[randomIndex] = temporaryValue;
//   }

//   return array;

// };

// document.body.onload = startGame();

// function startGame() {

//   openedCards = [];

//   cards = shuffle(cards);

//   for (var i = 0; i < cards.length; i++) {
//     pairs.innerHTML ='';
//     [].forEach.call(cards, function(item) {
//         deck.appendChild(item);
//     });
//     cards[i].classList.remove('show', 'open', 'match', 'disabled');
    
// }

// moves = 0;
// counter.innerHTML = moves;

// second = 30;
// var timer = document.querySelector('.timer');
// timer.innerHTML = '30 Seconds';
// clearInterval(interval);
// }

// var displayCard = function() {
//     this.classList.toggle('open');
//     this.classList.toggle('show');
//     this.classList.toggle('disabled');

// };

// function cardOpen() {
//   openedCards.push(this);
//   var len = openedCards.length;
//   if(length === 2) {
//     moveCounter();
//     if(openedCards[0].type === openedCards[1].type){
//       matchedCard();
//     } else {
//       unmatched();
//     }
    
//   }
// };

// function matched() {
//   openedCards[0].classList.add('match', 'disabled');
//   openedCards[1].classList.add('match', 'disabled');
//   openedCards[0].classList.remove('show', 'open', 'no-event');
//   openedCards[1].classList.remove('show', 'open', 'no-event');
//   openedCards = [];
  
// }

// function unmatched() {
//   openedCards[0].classList.add('unmatched');
//   openedCards[1].classList.add('unmatched');
//   disable();
//   setTimeout(function() {
//     openedCards[0].classList.remove('show', 'open', 'no-event', 'unmatched');
//     openedCards[1].classList.remove('show', 'open', 'no-event', 'unmatched');
//     enable();
//     openedCards = [];
//   } ,1100);
//  }

//  function disable() {
//    Array.prototype.filter.call(cards, function(card) {
//      card.classList.add('disabled');
//   });
//  }

// function enable() {
//   Array.prototype.filter.call(cards, function(card) {
//     card.classList.remove('disabled');
//     for(var i=0; i <matchedCard.length; i++){
//       matchedCard[i].classList.add('disabled');
//     }
//   });
// }

// function moveCounter() {
//   moves--;
//   counter.innerHTML = moves;

//   if(moves == 1) {
//     second = 30;
//     startTimer();
//   }
// }

// function congratulations() {
//   if (matchedCard.length == 12) {
//     clearInterval(interval);
//     finalTime = timer.innerHTML;

//   }
// }

// function closeModal(){
//   closeicon.addEventListener('click', function(e) {
//     modal.classList.remove('show');
//     startGame();
//   });
// }

// function playAgain() {
//   modal.classList.remove('show');
//   startGame();

// }

// for (var i = 0; i < cards.length; i++) {
//   card = cards[i];
//   card.addEventListener('click', displayCard);
//   card.addEventListener('click', cardOpen);
//   card.addEventListener('click', congratulations);

// };

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


console.log(currentTime);
console.log(timerElement);




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

