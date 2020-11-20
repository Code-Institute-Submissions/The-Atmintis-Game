$(function () {
  $('[data-toggle="popover"]').popover({
      placement : 'top',
      trigger : 'hover'
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
        this.countdownSound.volume = 0.1;
        this.countdownSound.loop = true;
        this.turnSound.volume = 0.9
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
    victory() {
        this.stopMusic(); // when we win we need to stop countdown
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
        
    }

     turnCard(card) {
        if(this.canTurnCard(card)) {
            this.audioController.turn();
            this.totalTurns++;
            this.noTurn.innerText = this.totalTurns;
    }
}
    canTurnCard(card) {
        return true;
    }
}



function ready() {
    let overlays = Array.from(document.getElementsByClassName('gametext'));
    let cards = Array.from(document.getElementsByClassName('card'));
    let game = new Atmintis(120, cards);
    

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