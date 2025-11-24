import Fruit from "./Fruit";
import Spider from "./Spider";

export default class Player {
  private image: HTMLImageElement;

  private posX: number;

  private posY: number;

  private maxX: number;

  private speed: number;

  private movingLeft: boolean;

  private movingRight: boolean;

  public constructor(maxX :number, maxY: number) {

  }

  /**
   * MoveLeft
   */
  public moveLeft() {

  }

  /**
   * MoveRight
   */
  public moveRight() {

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
  public update(delta: number) {

  }

  /**
   * render
   */
  public render(canvas: HTMLCanvasElement) {

  }

  /**
   * getPosX
   */
  public getPosX() {

  }

  /**
   * getPosY
   */
  public getPosY() {

  }

  /**
   * getWidth
   */
  public getWidth() {

  }

  /**
   * getHeight
   */
  public getHeight() {

  }
}
