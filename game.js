class Game {
  constructor() {
    this.startScreen = document.getElementById("splashScreen");
    this.gameScreen = document.getElementById("gameBoard");
    this.gameArea = document.getElementById("gameArea");
    this.finishArea = document.getElementById("finishArea");
    this.gameWinScreen = document.getElementById("finishScreenVictory");
    this.gameLoseScreen = document.getElementById("finishScreenLose");
    this.timer = document.getElementById("timer");
    this.seconds = document.getElementById("seconds");

    this.player = new Player(
      this.gameScreen,
      230,
      435,
      60,
      70,
      "images/dobby.png"
    );

    this.obstacleOne = new Obstacle(
      this.gameArea,
      500,
      270,
      50,
      80,
      "images/dementor.png"
    );

    this.obstacleTwo = new Obstacle(
      this.gameArea,
      1370,
      380,
      50,
      80,
      "images/dementor.png"
    );

    this.obstacleThree = new Obstacle(
      this.gameArea,
      500,
      490,
      50,
      80,
      "images/dementor.png"
    );

    this.obstacleFour = new Obstacle(
      this.gameArea,
      1370,
      600,
      50,
      80,
      "images/dementor.png"
    );

    this.obstacles = [
      this.obstacleOne,
      this.obstacleTwo,
      this.obstacleThree,
      this.obstacleFour,
    ];

    this.time = 0;
    this.timeInterval = null;
    this.animationFrame = null;
    this.gameInterval = null;
  }

  start() {
    this.startScreen.style.display = "none";
    this.gameScreen.style.display = "flex";
    this.timer.style.display = "block";

    this.seconds.innerHTML = this.time;

    this.timeInterval = setInterval(() => {
      this.time += 1;
      this.seconds.innerHTML = this.time;
    }, 1000);

    this.gameInterval = setInterval(() => {
      this.gameLoop();
    }, 5);
  }

  gameLoop() {
    this.update();
  }

  update() {
    this.player.move();
    this.moveObstacleOne();
    this.moveObstacleTwo();
    this.moveObstacleThree();
    this.moveObstacleFour();
    this.obstacleOne.move();
    this.obstacleTwo.move();
    this.obstacleThree.move();
    this.obstacleFour.move();

    this.victory();

    this.obstacles.forEach((element) => {
      this.colision(element);
    });
    console.log("update");
  }

  moveObstacleOne() {
    if (this.obstacleOne.left <= 1370) {
      this.obstacleOne.directionX += 2.6;
    }

    if (this.obstacleOne.left > 500) {
      this.obstacleOne.directionX -= 2.6;
    }
  }

  moveObstacleTwo() {
    if (this.obstacleTwo.left >= 1370) {
      this.obstacleTwo.directionX -= 2.6;
    }

    if (this.obstacleTwo.left < 500) {
      this.obstacleTwo.directionX += 2.6;
    }
  }

  moveObstacleThree() {
    if (this.obstacleThree.left <= 1370) {
      this.obstacleThree.directionX += 2.6;
    }

    if (this.obstacleThree.left > 500) {
      this.obstacleThree.directionX -= 2.6;
    }
  }

  moveObstacleFour() {
    if (this.obstacleFour.left >= 1370) {
      this.obstacleFour.directionX -= 2.6;
    }

    if (this.obstacleFour.left < 500) {
      this.obstacleFour.directionX += 2.6;
    }
  }

  colision(obstacle) {
    const player = this.player.element.getBoundingClientRect();
    const obstacleInstance = obstacle.element.getBoundingClientRect();

    if (
      player.top < obstacleInstance.bottom &&
      player.left < obstacleInstance.right &&
      player.right > obstacleInstance.left &&
      player.bottom > obstacleInstance.top
    ) {
      clearInterval(this.gameInterval);
      this.gameScreen.style.display = "none";
      this.gameLoseScreen.style.display = "flex";
      clearInterval(this.timeInterval);
      this.timer.style.display = "none";
    }
  }

  victory() {
    const finishArea = this.finishArea.getBoundingClientRect();
    const amountOfTime = document.getElementById("time");

    if (this.player.left > finishArea.left) {
      console.log("win");
      clearInterval(this.gameInterval);
      this.gameScreen.style.display = "none";
      this.gameWinScreen.style.display = "flex";
      clearInterval(this.timeInterval);
      amountOfTime.innerHTML = this.time;
      this.timer.style.display = "none";
    }
  }
}
