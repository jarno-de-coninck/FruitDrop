import CanvasRenderer from './CanvasRenderer.js';
import ScoreItem from './ScoreItem.js';

export default class Spider extends ScoreItem {
  public constructor(maxX: number) {
    super();

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
    this.posY += delta * .1;
  }
}
