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
      200,
      330,
      50,
      60,
      "images/dobby.png"
    );

    this.obstacleOne = new Obstacle(
      this.gameArea,
      390,
      220,
      50,
      70,
      "images/dementor.png"
    );

    this.obstacleTwo = new Obstacle(
      this.gameArea,
      1100,
      310,
      50,
      70,
      "images/dementor.png"
    );

    this.obstacleThree = new Obstacle(
      this.gameArea,
      390,
      380,
      50,
      70,
      "images/dementor.png"
    );

    this.obstacleFour = new Obstacle(
      this.gameArea,
      1100,
      470,
      50,
      70,
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
    if (this.obstacleOne.left <= 1100) {
      this.obstacleOne.directionX += 2.3;
    }

    if (this.obstacleOne.left > 390) {
      this.obstacleOne.directionX -= 2.3;
    }
  }

  moveObstacleTwo() {
    if (this.obstacleTwo.left >= 1100) {
      this.obstacleTwo.directionX -= 2.3;
    }

    if (this.obstacleTwo.left < 390) {
      this.obstacleTwo.directionX += 2.3;
    }
  }

  moveObstacleThree() {
    if (this.obstacleThree.left <= 1100) {
      this.obstacleThree.directionX += 2.3;
    }

    if (this.obstacleThree.left > 390) {
      this.obstacleThree.directionX -= 2.3;
    }
  }

  moveObstacleFour() {
    if (this.obstacleFour.left >= 1100) {
      this.obstacleFour.directionX -= 2.3;
    }

    if (this.obstacleFour.left < 390) {
      this.obstacleFour.directionX += 2.3;
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
