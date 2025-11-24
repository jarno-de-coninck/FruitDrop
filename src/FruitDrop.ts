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


    this.spiders = [];
    this.timeToNextItem = Math.random() * 500;

    this.fruit = [];
    this.timeToNextItem = Math.random() * 500;
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
    while(this.keyListener.isKeyDown('KEY_LEFT')) {
      this.player.moveLeft();
    }

    while(this.keyListener.isKeyDown('KEY_RIGHT')) {
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

    this.spiders.forEach((spider: Spider) => {
      spider.update(delta);
    });

    this.fruit.forEach((fruit: Fruit) => {
      fruit.update(delta);
    });

    this.player.update(delta);

    this.timeToNextItem -= delta;
    if (this.timeToNextItem < 0) {
      this.makeItem();
    }

    return true;
  }

  /**
   * Render all the elements in the screen.
   */
  public render(): void {
    this.player.render(this.canvas);
    
    this.spiders.forEach((spider: Spider) => {
      spider.render(this.canvas);
    });

    this.fruit.forEach((fruit: Fruit) => {
      fruit.render(this.canvas);
    });

    // Clear the canvas
    CanvasRenderer.clearCanvas(this.canvas);
  }
}
