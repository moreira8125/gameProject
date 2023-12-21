class Player {
    constructor(gameScreen, left, top, width, height, imgSrc){
        this.gameScreen = gameScreen
        this.left = left
        this.top = top
        this.width = width
        this.height = height
        this.directionX = 0
        this.directionY = 0
        this.element = document.createElement('img')
        this.element.src = imgSrc
        this.element.style.position = 'absolute'

        this.element.style.width = width + 'px'
        this.element.style.height =  height + 'px'
        this.element.style.top = top + 'vh'
        this.element.style.left = left + 'vw'

        this.gameScreen.appendChild(this.element)
    }

    move(){
        this.left += this.directionX
        this.top += this.directionY

        if(this.left < 220){
            this.left = 220
        }

        if(this.top < 200){
            this.top = 200
        }

        if(this.top > 535){
            this.top = 535
        }

        this.updatePosition();

    }

    updatePosition() {
        this.element.style.left = `${this.left}px`;
        this.element.style.top = `${this.top}px`;
      }

}

