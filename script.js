window.onload = function () {
  const startButton = document.getElementById("startBtn");
  const restartButton = document.getElementById("playAgain");
  let game;

  startButton.addEventListener("click", function () {
    startGame();
  });

  function startGame() {
    console.log("start game");
    game = new Game();

    game.start();
  }

  window.addEventListener("keydown", (event) => {
    if (event.key === "ArrowUp") {
      game.player.directionY = -3;
    }
    if (event.key === "ArrowDown") {
      game.player.directionY = 3;
    }
    if (event.key === "ArrowLeft") {
      game.player.directionX = -3;
    }
    if (event.key === "ArrowRight") {
      game.player.directionX = 3;
    }
  });

  window.addEventListener("keyup", (event) => {
    if (event.key === "ArrowUp") {
      game.player.directionY = 0;
    }
    if (event.key === "ArrowDown") {
      game.player.directionY = 0;
    }
    if (event.key === "ArrowLeft") {
      game.player.directionX = 0;
    }
    if (event.key === "ArrowRight") {
      game.player.directionX = 0;
    }
  });
};
