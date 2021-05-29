const cards = document.querySelectorAll('.cards');

let hasFlippedCard = false;
let lockGameboard = false;
let firstCard, secondCard;

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

