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

    // 1920px
    if (window.innerWidth > 1680) {
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
        490,
        270,
        50,
        80,
        "images/dementor.png"
      );

      this.obstacleTwo = new Obstacle(
        this.gameArea,
        1380,
        380,
        50,
        80,
        "images/dementor.png"
      );

      this.obstacleThree = new Obstacle(
        this.gameArea,
        490,
        490,
        50,
        80,
        "images/dementor.png"
      );

      this.obstacleFour = new Obstacle(
        this.gameArea,
        1380,
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

    //1680px
    if (window.innerWidth <= 1680 && window.innerWidth > 1600) {
      this.player = new Player(
        this.gameScreen,
        230,
        420,
        60,
        70,
        "images/dobby.png"
      );

      this.obstacleOne = new Obstacle(
        this.gameArea,
        428,
        250,
        50,
        80,
        "images/dementor.png"
      );

      this.obstacleTwo = new Obstacle(
        this.gameArea,
        1205,
        360,
        50,
        80,
        "images/dementor.png"
      );

      this.obstacleThree = new Obstacle(
        this.gameArea,
        428,
        470,
        50,
        80,
        "images/dementor.png"
      );

      this.obstacleFour = new Obstacle(
        this.gameArea,
        1205,
        590,
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

    // 1600 PX
    if (window.innerWidth <= 1600) {
      this.player = new Player(
        this.gameScreen,
        230,
        400,
        60,
        70,
        "images/dobby.png"
      );

      this.obstacleOne = new Obstacle(
        this.gameArea,
        408,
        240,
        50,
        80,
        "images/dementor.png"
      );

      this.obstacleTwo = new Obstacle(
        this.gameArea,
        1145,
        345,
        50,
        80,
        "images/dementor.png"
      );

      this.obstacleThree = new Obstacle(
        this.gameArea,
        408,
        440,
        50,
        80,
        "images/dementor.png"
      );

      this.obstacleFour = new Obstacle(
        this.gameArea,
        1145,
        540,
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
    const obstacleBounds = this.obstacleOne.element.getBoundingClientRect();

    if (obstacleBounds.right >= this.finishArea.offsetLeft) {
      this.obstacleOne.directionX -= 3.5;
    } else if (obstacleBounds.left <= this.gameArea.offsetLeft) {
      this.obstacleOne.directionX += 3.5;
    }
  }

  moveObstacleTwo() {
    const obstacleBounds = this.obstacleTwo.element.getBoundingClientRect();

    if (obstacleBounds.right >= this.finishArea.offsetLeft) {
      this.obstacleTwo.directionX -= 3.5;
    } else if (obstacleBounds.left <= this.gameArea.offsetLeft) {
      this.obstacleTwo.directionX += 3.5;
    }
  }

  moveObstacleThree() {
    const obstacleBounds = this.obstacleThree.element.getBoundingClientRect();

    if (obstacleBounds.right >= this.finishArea.offsetLeft) {
      this.obstacleThree.directionX -= 3.5;
    } else if (obstacleBounds.left <= this.gameArea.offsetLeft) {
      this.obstacleThree.directionX += 3.5;
    }
  }

  moveObstacleFour() {
    const obstacleBounds = this.obstacleFour.element.getBoundingClientRect();

    if (obstacleBounds.right >= this.finishArea.offsetLeft) {
      this.obstacleFour.directionX -= 3.5;
    } else if (obstacleBounds.left <= this.gameArea.offsetLeft) {
      this.obstacleFour.directionX += 3.5;
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
