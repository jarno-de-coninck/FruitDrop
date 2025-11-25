import Game from './Game.js';

import CanvasRenderer from './CanvasRenderer.js';
import Player from './Player.js';
import Spider from './Spider.js';
import Fruit from './Fruit.js';
import KeyListener from './KeyListener.js';

export class FruitDrop extends Game {
  private canvas: HTMLCanvasElement;

  private player: Player;

  private fruit: Fruit[];

  private spiders: Spider[];

  private keyListener: KeyListener = new KeyListener;

  private score: number;

  private timeLeft: number;

  private timeToNextItem: number;

  public constructor(canvas: HTMLCanvasElement) {
    super();
    this.canvas = canvas;
    this.canvas.height = window.innerHeight;
    this.canvas.width = window.innerWidth;
    this.score = 0;
    this.timeLeft = 60 * 1000;

    this.player = new Player(this.canvas.width, this.canvas.height);

    this.fruit = [];
    this.spiders = [];
    
    this.timeToNextItem = Math.random() * 300;
  }

  private makeItem(): void {
    if(Math.random() * 100 > 90) {
      this.spiders.push(new Spider(this.canvas.width));
    } else {
      this.fruit.push(new Fruit(this.canvas.width));
    }
  }

  /**
   * Process all input. Called from the GameLoop.
   */
  public processInput(): void {
    if (this.keyListener.isKeyDown(KeyListener.KEY_LEFT)) {
      this.player.moveLeft();
    }

    if (this.keyListener.isKeyDown(KeyListener.KEY_RIGHT)) {
      this.player.moveRight();
    }
  }

  /**
   * Update game state. Called from the GameLoop
   *
   * @param elapsed time in ms elapsed from the GameLoop
   * @returns true if the game should continue
   */
  public update(delta: number): boolean {
    this.timeLeft -= delta;

    if (this.timeLeft <= 0) {
      return false;
    }

    for (let i: number = this.fruit.length - 1; i >= 0; i--) {
      const fruit : Fruit = this.fruit[i];
      
      fruit.update(delta);
      
      if (fruit.getPosY() > this.canvas.height + fruit.getHeight()) {
        this.fruit.splice(i, 1);
      }

      if (this.player.isCollidingFruit(fruit)) {
        this.score += fruit.getScore();
        this.fruit.splice(i, 1);
      }
    }

    for (let i: number = this.spiders.length - 1; i >= 0; i--) {
      const spider : Spider = this.spiders[i];
      
      spider.update(delta);

      if (spider.getPosY() > this.canvas.height + spider.getHeight()) {
        this.spiders.splice(i, 1);
      }
      
      if (this.player.IsCollidingSpider(spider)) {
        this.score += spider.getScore();
        this.spiders.splice(i, 1);
      }
    }

    this.player.update(delta);

    this.timeToNextItem -= delta;
    if (this.timeToNextItem < 0) {
      this.makeItem();
      this.timeToNextItem = Math.random() * 300;
    }

    return true;
  }

  /**
   * Render all the elements in the screen.
   */
  public render(): void {
    // Clear the canvas
    CanvasRenderer.clearCanvas(this.canvas);

    this.player.render(this.canvas);
    
    this.spiders.forEach((spider: Spider) => {
      spider.render(this.canvas);
    });

    this.fruit.forEach((fruit: Fruit) => {
      fruit.render(this.canvas);
    });

    CanvasRenderer.writeText(this.canvas, `Time: ${(this.timeLeft / 1000).toFixed(2)}`, 10, 80, 'left', 'sans-serif', 35, 'white');
    CanvasRenderer.writeText(this.canvas, `Score: ${this.score}`, 10, 40, 'left', 'sans-serif', 35, 'white');
  }
}
