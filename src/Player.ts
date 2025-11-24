import CanvasRenderer from './CanvasRenderer.js';
import Fruit from './Fruit.js';
import Spider from './Spider.js';

export default class Player {
  private image: HTMLImageElement;

  private posX: number;

  private posY: number;

  private maxX: number;

  private speed: number;

  private movingLeft: boolean;

  private movingRight: boolean;

  public constructor(maxX :number, maxY: number) {
    this.image = CanvasRenderer.loadNewImage("./assets/basket.png");
    this.maxX = maxX;

    this.posX = maxX /2;
    this.posY = maxY - 100;

    this.speed = .5;

    this.movingLeft = false;
    this.movingRight = false;
  }

  /**
   * function to move left
   */
  public moveLeft() : void{
    this.movingLeft = true;
  }

  /**
   * function to move right
   */
  public moveRight() : void{
    this.movingRight = false;
  }

  /**
   * isCollidingFruit
   */
  public isCollidingFruit(fruit: Fruit) {

  }

  /**
   * IsCollidingSpider
   */
  public IsCollidingSpider(spider : Spider) {

  }

  /**
   * update
   */
  public update(delta: number) : void {
    if (this.movingLeft) {
      this.posX -= delta * this.speed;
    }

    if (this.movingRight) {
      this.posX += delta * this.speed;
    }

    if (this.posX + this.getWidth() > this.maxX) {
      this.posX = this.maxX;
    }

    if (this.posX < 0) {
      this.posX = 0;
    }

    this.movingLeft = false;
    this.movingRight = false;
  }

  /**
   * render
   */
  public render(canvas: HTMLCanvasElement) : void {
    CanvasRenderer.drawImage(canvas, this.image, this.posX, this.posY);
  }

  /**
   * getPosX
   */
  public getPosX() : number {
    return this.posX;
  }

  /**
   * getPosY
   */
  public getPosY() : number {
    return this.posY;
  }

  /**
   * getWidth
   */
  public getWidth() : number {
    return this.image.width;
  }

  /**
   * getHeight
   */
  public getHeight() : number {
    return this.image.height;
  }
}
