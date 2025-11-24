import CanvasRenderer from './CanvasRenderer.js';

export default class Spider {
  private image: HTMLImageElement;

  private score: number;

  private posX: number;

  private posY: number;

  public constructor(maxX: number) {
    this.posX = 0;
    this.posY = 0;
    this.score = 0;

    // Get random spider
    const random: number = Math.random() * 100;
    
    if (random > 90) {
      this.image = CanvasRenderer.loadNewImage('./assets/spider01.png');
      this.score = -5;
    } else if (random > 70) {
      this.image = CanvasRenderer.loadNewImage('./assets/spider02.png');
      this.score = -3;
    } else if (random > 40) {
      this.image = CanvasRenderer.loadNewImage('./assets/spider03.png');
      this.score = -2;
    } else {
      this.image = CanvasRenderer.loadNewImage('./assets/spider04.png');
      this.score = -1;
    }

    // Pick a random position
    this.posX = (Math.random() * maxX);
    this.posY = -32;
  }

  /**
   * update
   */
  public update(delta: number): void{
    this.posX += delta * .1;
  }

  /**
   * render
   */
  public render(canvas: HTMLCanvasElement): void{
    CanvasRenderer.drawImage(canvas, this.image, this.posX, this.posY);
  }

  /**
   * getPosX
   */
  public getPosX(): number {
    return this.posX;
  }

  /**
   * getPosY
   */
  public getPosY(): number {
    return this.posY;
  }

  /**
   * getWidth
   */
  public getWidth(): number {
    return this.image.width;
  }

  /**
   * getHeight
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
