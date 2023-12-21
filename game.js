class Game{
    constructor(){
        this.startScreen = document.getElementById('splashScreen')
        this.gameScreen = document.getElementById('gameBoard')
        this.gameWinScreen = document.getElementById('finishScreenVictory')
        this.gameLoseScreen = document.getElementById('finishScreenLose')
        this.player = new Player(this.gameScreen, 220, 350, 40, 50, "images/dobby.png")
        this.timer = 0
        this.gameIsOver = false
    }




    start(){
        this.startScreen.style.display = "none";
        this.gameScreen.style.display = "flex";

        this.gameLoop()

    }



    gameLoop() {
        if (this.gameIsOver) {
          return;
        }
    
        this.update();
    
        window.requestAnimationFrame(() => this.gameLoop());
    }
    


    update() {
        this.player.move()
    }

}

  