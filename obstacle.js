class Obstacle {
  constructor(gameArea, left, top, width, height, imgSrc) {
    this.gameArea = gameArea;
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
    this.element.style.top = top + "px";
    this.element.style.left = left + "px";

    this.gameArea.appendChild(this.element);
  }

  move() {
    this.left += this.directionX;
    this.updatePosition();
  }

  updatePosition() {
    this.element.style.left = `${this.left}px`;
  }
}
