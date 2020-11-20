$(function () {
  $('[data-toggle="popover"]').popover({
      placement : 'top',
      trigger : 'hover'
  })
})

// see webdevsimplified as their documentation helped

if (document.readyState == 'loading') { 
    document.addEventListener('DOMContentLoaded', ready); // if loading wait until it loads and call ready
} else {
    ready();
}

// message screen for start game, game over and card functions, need to add the divs.
class AudioController {
    constructor() {
        this.countdownSound = new Audio('assets/audio/countdown.mp3');
        this.turnSound = new Audio('assets/audio/turn.mp3');
        this.pairSound = new Audio('assets/audio/pair.mp3');
        this.winnerSound = new Audio('assets/audio/winner.mp3');
        this.gameOverSound = new Audio('assets/audio/gameover.mp3');
        // and language sound later
        this.countdownSound.volume = 0.2;
        this.countdownSound.loop = true;
    }
    startMusic() {
        this.countdownSound.play();
    }
    stopMusic() {
        this.countdownSound.pause();
        this.countdownSound.currentTime = 0;
    }
    flip() {
        this.turnSound.play();
         
    }
    match() {
        this.pairSound.play();
        // play language sound this.language.play
    }
    victory() {
        this.stopMusic();
        this.winnerSound.play();
    }
    gameOver() {
        this.stopMusic();
        this.gameOverSound.play();
    }
}



function ready() {
    let overlays = Array.from(document.getElementsByClassName('gametext'));
    let cards = Array.from(document.getElementsByClassName('card'));
    

    overlays.forEach(overlay => {
        overlay.addEventListener('click', () => {
            overlay.classList.remove('show');
                let audioController = new AudioController();
                audioController.startMusic();
            
        });
    });
    cards.forEach(card => {
        card.addEventListener('click', () => {
        });
    });
}

