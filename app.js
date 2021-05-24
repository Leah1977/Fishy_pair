const cards = documentSelectorAll(.pairs-card);

let hasFlippedCard = false;
let firstCard, secondCard;

function flipCard() {
    this.classlist.toggle('flip')  //flip the card
}

    if (hasFlippedCard) { 
        hasFlippedCard = true;   //when player picks the first card
        firstCard = this;

        console log({hasFlippedCard});
    }
}

cards.forEach(card => card addEventListener('click', flipCard));   //flip the card when clicked