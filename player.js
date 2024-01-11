class Player {
  constructor(gameScreen, left, top, width, height, imgSrc) {
    this.gameScreen = gameScreen;
    this.left = left;
    this.top = top;
    this.width = width;
    this.height = height;
    this.directionX = 0;
    this.directionY = 0;
    this.element = document.createElement("img");
    this.element.src = imgSrc;
    this.element.style.position = "absolute";

    this.element.style.width = width + "px";
    this.element.style.height = height + "px";
    this.element.style.top = top + "vh";
    this.element.style.left = left + "vh";

    this.gameScreen.appendChild(this.element);
  }

  move() {
    this.left += this.directionX;
    this.top += this.directionY;

    const screenSize = this.gameScreen.getBoundingClientRect();

    if (this.left < screenSize.left) {
      this.left = screenSize.left;
    }

    if (this.top < screenSize.top) {
      this.top = screenSize.top;
    }

    if (this.top + this.height > screenSize.bottom) {
      this.top = screenSize.bottom - this.height;
    }

    this.updatePosition();
  }

  updatePosition() {
    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;
  }
}
