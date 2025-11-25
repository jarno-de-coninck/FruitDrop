import CanvasRenderer from './CanvasRenderer.js';
import ScoreItem from './ScoreItem.js';

export default class Fruit extends ScoreItem {
  private speed: number;

  public constructor(maxX :number) {
    super();

    this.posX = 0;
    this.posY = 0;
    this.score = 0;
    this.speed = .15;

    // Get random fruit
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
}
