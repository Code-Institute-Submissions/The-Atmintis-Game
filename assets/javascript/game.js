$(function() {
    $('[data-toggle="popover"]').popover({
        placement: 'top',
        trigger: 'hover'
    })
})



// message screen for start game, game over and card functions, need to add the divs.
class AudioController {
    constructor() {
        this.countdownSound = new Audio('assets/audio/countdown.mp3');
        this.turnSound = new Audio('assets/audio/turn.mp3');
        this.pairSound = new Audio('assets/audio/pair.mp3');
        this.winnerSound = new Audio('assets/audio/winner.mp3');
        this.gameOverSound = new Audio('assets/audio/gameover.mp3');
        // and language sound later
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
        // play language sound this.language.play
    }
    winner() {
        this.stopMusic(); // when player wins we need to stop countdown
        this.winnerSound.play();
    }
    gameOver() {
        this.stopMusic();
        this.gameOverSound.play();
    }
}

class Atmintis {
    constructor(totalTime, cards) {
        this.cardsArray = cards;
        this.totalTime = totalTime;
        this.timeRemaining = totalTime;
        this.timer = document.getElementById('time-left')
        this.noTurn = document.getElementById('turns');
        this.audioController = new AudioController();
    }

    startGame() {
        this.cardToCheck = null;
        this.totalTurns = 0;
        this.timeRemaining = this.totalTime;
        this.matchedCards = [];
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
        if (this.canTurnCard(card)) {
            this.audioController.turn();
            this.totalTurns++;
            this.noTurn.innerText = this.totalTurns;
            card.classList.add("show");
            // Looking at a match or turning a card for the first time
            if (this.cardToCheck)
                this.checkMatch(card);
            else
                this.cardToCheck = card;

        }
    }

    checkMatch(card) {
        if (this.getCardValue(card) === this.getCardValue(this.cardToCheck))
            this.cardPair(card, this.cardToCheck);
        else
            this.cardNotMatch(card, this.cardToCheck);

        this.cardToCheck = null;
    }

    cardPair(card1, card2) {
        this.matchedCards.push(card1);
        this.matchedCards.push(card2);
        this.audioController.match();
        if (this.matchedCards.length === this.cardsArray.length)
            this.winner();

    }

    cardNotMatch(card1, card2) {
        this.busy = true;
        setTimeout(() => {
            card1.classList.remove("show");
            card2.classList.remove("show");
            this.busy = false;
        }, 1000);

    }

    getCardValue(card) {
        return card.getElementsByClassName("value")[0].src;

    }

    startTimer() {
        return setInterval(() => {
            this.timeRemaining--;
            this.timer.innerText = this.timeRemaining;
            if (this.timeRemaining === 0)
                this.gameOver();
        }, 1100);
    }

    gameOver() {
        clearInterval(this.countdown);
        this.audioController.gameOver();
        document.getElementById("gomessage").classList.add("show");

    }
    winner() {
        clearInterval(this.countdown);
        this.audioController.winner();
        document.getElementById("winnermessage").classList.add("show");
        this.doNotShowCards();

    }
    // Fisher & Yates formula, see credits

    shufflePack() {
        for (let i = this.cardsArray.length - 1; i > 0; i--) {
            let randomIndex = Math.floor(Math.random() * (i + 1));
            this.cardsArray[randomIndex].style.order = i;
            this.cardsArray[i].style.order = randomIndex;
        }
    }


    canTurnCard(card) {
        return !this.busy && !this.matchedCards.includes(card) && card !== this.cardToCheck;
    }
}



function ready() {
    let overlays = Array.from(document.getElementsByClassName('gametext'));
    let cards = Array.from(document.getElementsByClassName('card'));
    let game = new Atmintis(110, cards);


    overlays.forEach(overlay => {
        overlay.addEventListener('click', () => {
            overlay.classList.remove('show');
            game.startGame();

        });
    });
    cards.forEach(card => {
        card.addEventListener('click', () => {
            game.turnCard(card);
        });
    });
}

// see webdevsimplified as their documentation helped

if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready); // if loading wait until it loads and call ready
} else {
    ready();
}