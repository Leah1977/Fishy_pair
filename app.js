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


// gametimer

let remainingTime = 30;
    let element = document.getElementById('gametimer');
    let timer = setInterval(countdown, 1000); 
    let restart = document.getElementsByClassName('pairs-gameboard')


    function countdown() {
        if (remainingTime == -1) {
            clearTimeout(timer);
            doSomething(restart);
        } else {
            element.innerHTML = remainingTime + '  seconds remaining';
            remainingTime--; 
        }
        
    }

    let gamecomplete = true;

