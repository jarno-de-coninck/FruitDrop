import CanvasRenderer from './CanvasRenderer.js';

export default class Fruit {
  private image: HTMLImageElement;

  private score: number;

  private posX: number;

  private posY: number;

  private speed: number;

  public constructor(maxX :number) {
    this.posX = 0;
    this.posY = 0;
    this.score = 0;
    this.speed = .15;

    // Get random spider
    const random: number = Math.random() * 100;

    if (random > 90) {
      this.image = CanvasRenderer.loadNewImage('./assets/fruit-cherries.png');
      this.score = 10;
    } else if (random > 70) {
      this.image = CanvasRenderer.loadNewImage('./assets/fruit-strawberry.png');
      this.score = 7;
    } else if (random > 40) {
      this.image = CanvasRenderer.loadNewImage('./assets/fruit-orange.png');
      this.score = 5;
    } else if (random > 20) {
      this.image = CanvasRenderer.loadNewImage('./assets/fruit-grapes.png');
      this.score = 3;
    } else {
      this.image = CanvasRenderer.loadNewImage('./assets/fruit-banana.png');
      this.score = 1;
    }

    // Pick a random position
    this.posX = (Math.random() * maxX);
    this.posY = -32;
  }

  /**
   * update
   */
  public update(delta: number): void{
    this.posY += delta * this.speed;
  }
  
  /**
   * render
   */
  public render(canvas: HTMLCanvasElement) : void {
    CanvasRenderer.drawImage(canvas, this.image, this.posX, this.posY);
  }

  /**
   * gets the x pos
   * @returns posX
   */
  public getPosX(): number {
    return this.posX;
  }

  /**
   * gets the y pos
   * @returns posY
   */
  public getPosY(): number {
    return this.posY;
  }

  /**
   * gets the width
   * @returns image width
   */
  public getWidth(): number {
    return this.image.width;
  }

  /**
   * gets the height
   * @returns image height
   */
  public getHeight(): number {
    return this.image.height;
  }

  /**
   * getScore
   */
  public getScore() {
    return this.score;
  }
}
