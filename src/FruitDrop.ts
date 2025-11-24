import Game from './Game.js';

import CanvasRenderer from './CanvasRenderer.js';
import Player from './Player.js';
import Spider from './Spider.js';
import Fruit from './Fruit.js';

export class FruitDrop extends Game {
  private canvas: HTMLCanvasElement;

  private player: Player;

  private fruit: Fruit[];

  private spiders: Spider[];

  // private keyListener: KeyListener;

  private score: number;

  private timeLeft: number;

  private timeToNextItem: number;

  public constructor(canvas: HTMLCanvasElement) {
    super();
    this.canvas = canvas;
    this.canvas.height = window.innerHeight;
    this.canvas.width = window.innerWidth;

    this.spiders = [];
    this.timeToNextItem = Math.random() * 500;
  }

  private makeItem(): void {
    this.spiders.push(new Spider(this.canvas.width));
  }

  /**
   * Process all input. Called from the GameLoop.
   */
  public processInput(): void {

  }

  /**
   * Update game state. Called from the GameLoop
   *
   * @param elapsed time in ms elapsed from the GameLoop
   * @returns true if the game should continue
   */
  public update(delta: number): boolean {
    this.spiders.forEach(spider => {
      spider.update(delta);
    });

    this.timeToNextItem -= delta;
    return false;
  }

  /**
   * Render all the elements in the screen.
   */
  public render(): void {
    // Clear the canvas
    CanvasRenderer.clearCanvas(this.canvas);
  }


}
