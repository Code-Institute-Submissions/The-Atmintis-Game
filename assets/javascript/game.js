$(function() {
    $('[data-toggle="popover"]').popover({
        placement: 'top',
        trigger: 'hover'
    })
})

// Bootstrap and popover - this allows english numbers to show over the Lithuanian.



//below are the audio controls for the game, i have also had to adjust some of the volume and loop the countdown timer
class AudioController {
    constructor() {
        this.countdownSound = new Audio('assets/audio/countdown.mp3');
        this.turnSound = new Audio('assets/audio/turn.mp3');
        this.pairSound = new Audio('assets/audio/pair.mp3');
        this.winnerSound = new Audio('assets/audio/winner.mp3');
        this.gameOverSound = new Audio('assets/audio/gameover.mp3');
        // and language audio for future features
        this.countdownSound.volume = 0.5;
        this.countdownSound.loop = true;
        this.turnSound.volume = 0.5
        this.winnerSound.volume = 0.5;
    }
    startMusic() {
        this.countdownSound.play();
    }
    stopMusic() {
        this.countdownSound.pause();
        this.countdownSound.currentTime = 0; // can not stop audio so pause and put back to start instead
    }
    turn() {
        this.turnSound.play();

    }
    match() {
        this.pairSound.play();
        // play language sound in future release
    }
    winner() {
        this.stopMusic(); // when player wins we need to stop countdown
        this.winnerSound.play();
    }
    gameOver() {
        this.stopMusic(); // when player wins we need to stop countdown
        this.gameOverSound.play();
    }
}

class Atmintis { // game function control - total time and cards 
    constructor(totalTime, cards) {
        this.cardsArray = cards;
        this.totalTime = totalTime; // set at the constructor level - the rest below are dynamic
        this.timeRemaining = totalTime;
        this.timer = document.getElementById('time-left') // this pulls the clas for countdown timer
        this.noTurn = document.getElementById('turns'); // this pulls the turn class
        this.audioController = new AudioController();
    }

    startGame() {  // set in ready function properties for how start game works
        this.cardToCheck = null; // 
        this.totalTurns = 0;
        this.timeRemaining = this.totalTime;
        this.matchedCards = []; //used to check totalcards for victory
        this.busy = true;

        setTimeout(() => { // this will help the game run smoother when you hit game over or winner
            this.audioController.startMusic();
            this.shufflePack();
            this.countdown = this.startTimer();
            this.busy = false;
        }, 500);
        this.doNotShowCards();
        this.timer.innerText = this.timeRemaining;
        this.noTurn.innerText = this.totalTurns;
    }
    doNotShowCards() {
        this.cardsArray.forEach(card => {
            card.classList.remove('show');
        }); //looking at cards array and remove show class

    }

    turnCard(card) {
        if (this.canTurnCard(card)) { // check rule can turn card
            this.audioController.turn();
            this.totalTurns++; //click on one and add 1 turn
            this.noTurn.innerText = this.totalTurns; //update the turn count
            card.classList.add("show"); //use show class to turn
            // Looking at a match or turning a card for the first time
            if (this.cardToCheck) // check for match and check card
                this.checkMatch(card);
            else
                this.cardToCheck = card;

        }
    }

    checkMatch(card) { // value = card to check matches
        if (this.getCardValue(card) === this.getCardValue(this.cardToCheck))
            this.cardPair(card, this.cardToCheck);
        else
            this.cardNotMatch(card, this.cardToCheck);

        this.cardToCheck = null; //card match or miss match the card has to be null
    }

    cardPair(card1, card2) { // when we match cards push both cards to the matched and  cards array
        this.matchedCards.push(card1);
        this.matchedCards.push(card2);
        this.audioController.match();
        if (this.matchedCards.length === this.cardsArray.length)
            this.winner();

    }

    cardNotMatch(card1, card2) { // first delay so you get to see the card long enough then remove when not matched
        this.busy = true;
        setTimeout(() => {
            card1.classList.remove("show");
            card2.classList.remove("show");
            this.busy = false;
        }, 1200);

    }

    getCardValue(card) { // using the value class (0) and the image source for match only two are identical
        return card.getElementsByClassName("value")[0].src;

    }

    startTimer() { // works like set time out function take the time and minus 1 second, pass the info to the text value, 0 = gameover
        return setInterval(() => {
            this.timeRemaining--;
            this.timer.innerText = this.timeRemaining;
            if (this.timeRemaining === 0)
                this.gameOver();
        }, 1100);
    }

    gameOver() {
        clearInterval(this.countdown); //stop countdown, reset and bring message up 
        this.audioController.gameOver();
        document.getElementById("gomessage").classList.add("show");

    }
    winner() {
        clearInterval(this.countdown); // stop countdouwn, bring up winner text hide cards
        this.audioController.winner();
        document.getElementById("winnermessage").classList.add("show");
        this.doNotShowCards();

    }
    // Fisher & Yates formula, see credits for website

    shufflePack() {
        for (let i = this.cardsArray.length - 1; i > 0; i--) {
            let randomIndex = Math.floor(Math.random() * (i + 1));
            this.cardsArray[randomIndex].style.order = i;
            this.cardsArray[i].style.order = randomIndex;
        }
    }


    canTurnCard(card) { //you cant click on the card untill the below is all false to be true (boolean)
        return !this.busy && !this.matchedCards.includes(card) && card !== this.cardToCheck;
    }
}


// ready function is what starts the game, using array not collection, for game text and cards
function ready() {
    let overlays = Array.from(document.getElementsByClassName('gametext'));
    let cards = Array.from(document.getElementsByClassName('card'));
    let game = new Atmintis(110, cards);

// click start game and remove game message using for each overlay with event listener 
    overlays.forEach(overlay => {
        overlay.addEventListener('click', () => {
            overlay.classList.remove('show');
            game.startGame();

        });
    });
    cards.forEach(card => { // for ech card add eventlistener to flip card on click
        card.addEventListener('click', () => {
            game.turnCard(card);
        });
    });
}


// loading process
if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready); // if loading wait until it loads and call ready
} else {
    ready();
}



// see webdevsimplified as their documentation helped