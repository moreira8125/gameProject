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
      330,
      40,
      50,
      "images/dobby.png"
    );

    this.obstacles = [
      this.obstacleOne,
      this.obstacleTwo,
      this.obstacleThree,
      this.obstacleFour,
    ];

    this.obstacleOne = new Obstacle(
      this.gameArea,
      390,
      220,
      50,
      60,
      "images/dementor.png"
    );

    this.obstacleTwo = new Obstacle(
      this.gameArea,
      1100,
      310,
      50,
      60,
      "images/dementor.png"
    );

    this.obstacleThree = new Obstacle(
      this.gameArea,
      390,
      380,
      50,
      60,
      "images/dementor.png"
    );

    this.obstacleFour = new Obstacle(
      this.gameArea,
      1100,
      470,
      50,
      60,
      "images/dementor.png"
    );

    this.time = 0;
    this.timeInterval = null;
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

    this.gameLoop();
  }

  gameLoop() {
    this.update();
    window.requestAnimationFrame(() => this.gameLoop());
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
  }

  moveObstacleOne() {
    if (this.obstacleOne.left <= 1100) {
      this.obstacleOne.directionX += 2;
    }

    if (this.obstacleOne.left > 390) {
      this.obstacleOne.directionX -= 2;
    }
  }

  moveObstacleTwo() {
    if (this.obstacleTwo.left >= 1100) {
      this.obstacleTwo.directionX -= 2;
    }

    if (this.obstacleTwo.left < 390) {
      this.obstacleTwo.directionX += 2;
    }
  }

  moveObstacleThree() {
    if (this.obstacleThree.left <= 1100) {
      this.obstacleThree.directionX += 2;
    }

    if (this.obstacleThree.left > 390) {
      this.obstacleThree.directionX -= 2;
    }
  }

  moveObstacleFour() {
    if (this.obstacleFour.left >= 1100) {
      this.obstacleFour.directionX -= 2;
    }

    if (this.obstacleFour.left < 390) {
      this.obstacleFour.directionX += 2;
    }
  }

  colision() {
    const player = this.player.getBoundingClientRect();
    const obstacleOne = this.obstacleOne.getBoundingClientRect();
    const obstacleTwo = this.obstacleTwo.getBoundingClientRect();
    const obstacleThree = this.obstacleThree.getBoundingClientRect();
    const obstacleFour = this.obstacleFour.getBoundingClientRect();
  }

  victory() {
    const finishArea = this.finishArea.getBoundingClientRect();
    const amountOfTime = document.getElementById("time");

    if (this.player.left > finishArea.left) {
      this.gameScreen.style.display = "none";
      this.gameWinScreen.style.display = "flex";
      clearInterval(this.timeInterval);
      amountOfTime.innerHTML = this.time;
      this.timer.style.display = "none";
    }
  }
}
