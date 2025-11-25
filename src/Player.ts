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
    this.movingRight = true;
  }

  /**
   * isCollidingFruit
   */
  public isCollidingFruit(fruit: Fruit) : boolean {
    const playerLeftSide : number = this.posX;
    const playerRightSide : number = this.posX + this.getWidth();
    const playerTop : number = this.posY;
    const playerBottom : number = this.posY + this.getHeight();

    const fruitLeftSide : number = fruit.getPosX();
    const fruitRightSide : number = fruit.getPosX() + fruit.getWidth();
    const fruitTop : number = fruit.getPosY();
    const fruitBottom : number = fruit.getPosY() + fruit.getHeight();

    if (playerRightSide < fruitLeftSide) {
      return false;
    }

    if (playerLeftSide > fruitRightSide) {
      return false;
    }

    if (playerBottom < fruitTop) {
      return false;
    }

    if (playerTop > fruitBottom) {
      return false;
    }

    return true;
  }

  /**
   * IsCollidingSpider
   */
  public isCollidingSpider(spider : Spider) : boolean {
    const playerLeftSide : number = this.posX;
    const playerRightSide : number = this.posX + this.getWidth();
    const playerTop : number = this.posY;
    const playerBottom : number = this.posY + this.getHeight();

    const spiderLeftSide : number = spider.getPosX();
    const spiderRightSide : number = spider.getPosX() + spider.getWidth();
    const spiderTop : number = spider.getPosY();
    const spiderBottom : number = spider.getPosY() + spider.getHeight();

    if (playerRightSide < spiderLeftSide) {
      return false;
    }

    if (playerLeftSide > spiderRightSide) {
      return false;
    }

    if (playerBottom < spiderTop) {
      return false;
    }

    if (playerTop > spiderBottom) {
      return false;
    }

    return true;
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
      this.posX = this.maxX - this.getWidth();
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
