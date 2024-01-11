window.onload = function () {
  const startButton = document.getElementById("startBtn");
  const restartButton = document.querySelectorAll(".playAgain");
  let game;

  startButton.addEventListener("click", () => {
    startGame();
  });

  restartButton[0].addEventListener("click", () => {
    restartGame();
  });

  restartButton[1].addEventListener("click", () => {
    restartGame();
  });

  function startGame() {
    game = new Game();
    game.start();
  }

  function restartGame() {
    location.reload();
  }

  window.addEventListener("keydown", (event) => {
    if (event.key === "ArrowUp") {
      game.player.directionY = -1.8;
    }
    if (event.key === "ArrowDown") {
      game.player.directionY = 1.8;
    }
    if (event.key === "ArrowLeft") {
      game.player.directionX = -1.8;
    }
    if (event.key === "ArrowRight") {
      game.player.directionX = 1.8;
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
