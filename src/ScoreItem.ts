import CanvasRenderer from './CanvasRenderer.js';

export default class ScoreItem {
  protected image: HTMLImageElement;

  protected score: number;

  protected posX: number;

  protected posY: number;

  public constructor() {
    this.score = 0;
    this.posX = 0;
    this.posY = 0;
    this.image = CanvasRenderer.loadNewImage('');
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
   * @returns the score of the item
   */
  public getScore() : number {
    return this.score;
  }
}
