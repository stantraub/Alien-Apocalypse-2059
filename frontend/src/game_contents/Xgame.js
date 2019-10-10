import AlienChaser from "./alien_chaser";
import Player from "./player";

class Game {
  constructor(){
    this.alienChasers = [];
    this.bullets = [];
    this.players = [];
    this.addAlienChasers()
  
  }
  add(object) {
    if (object instanceof AlienChaser) {
      this.alienChasers.push(object);
    } else if (object instanceof Player) {
      this.players.push(object);
    } 
    else {
      throw new Error("unknown type of object");
    }
  }

  addAlienChasers() {
    for (let i = 0; i < Game.NUM_ALIENCHASERS; i++) {
      this.add(new AlienChaser({ game: this }));
      //height: 10, width: 20, canJump: true, x: Math.random(599), y: Math.random(599), color: "red", xVel: 2, yVel: 0
    }
  }
  addPlayer() {
    const player = new Player({
      // x: 100,
      // y: 800,
      game: this
    });
    this.add(player);
    return player;
  }
  allObjects() {
    return [].concat(this.players, this.alienChasers, this.bullets);
  }

  draw(ctx) {
    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
    ctx.fillStyle = Game.BG_COLOR;
    ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y);

    this.allObjects().forEach((object) => {
      object.draw(ctx);
    });
  }

  randomX() {
    return Game.DIM_X * Math.random();
  }

  randomY() {
    return Game.DIM_Y * Math.random();
  }
  checkCollisions() {
    const allObjects = this.allObjects();
    for (let i = 0; i < allObjects.length; i++) {
      for (let j = 0; j < allObjects.length; j++) {
        const obj1 = allObjects[i];
        const obj2 = allObjects[j];

        if (obj1.isCollidedWith(obj2)) {
          const collision = obj1.collideWith(obj2);
          if (collision) return;
        }
      }
    }
  }
  moveObjects() {
    //maybe add delta arg
    this.allObjects().forEach((object) => {
      object.move();
    });
  }
  remove(object) {
    if (object instanceof Bullet) {
      this.bullets.splice(this.bullets.indexOf(object), 1);
    } else if (object instanceof AlienChaser) {
      this.alienChasers.splice(this.alienChasers.indexOf(object), 1);
    } else if (object instanceof Player) {
      this.players.splice(this.players.indexOf(object), 1);
    } else {
      throw new Error("unknown type of object");
    }
  }
  step(delta) {
    this.moveObjects(delta);
    // this.checkCollisions();
  }


}
Game.BG_COLOR = "yellow";
Game.DIM_X = 1000;
Game.DIM_Y = 600;
Game.FPS = 32;
Game.NUM_ALIENCHASERS = 0;

export default Game;