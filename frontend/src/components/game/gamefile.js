import AlienChaser from "./alien_chaser";
import Player from "./player";
import Bullet from "./bullet";

class GameFile {
  constructor(){
    this.alienChasers = [];
    this.rangeAliens = []
    this.bullets = [];
    this.players = [];
    this.addAlienChasers();
  
  }
  add(object) {
    if (object instanceof AlienChaser) {
      this.alienChasers.push(object);
    } else if (object instanceof Player) {
      this.players.push(object);
    } else if (object instanceof Bullet) {
      this.bullets.push(object);
    } else {
      throw new Error("unknown type of object");
    }
  }
  random_item(items) {
    return items[Math.floor(Math.random() * items.length)];
  }

  addAlienChasers() {
    if (this.alienChasers.length === 0){
      for (let i = 0; i < GameFile.NUM_ALIENCHASERS; i++) {

        this.add(new AlienChaser({ game: this, x: this.random_item([950, 50]) }));
      
      }
    }
  }
  addPlayer() {
    const player = new Player({
      game: this
    });
    this.add(player);
    return player;
  }
  allObjects() {
    return [].concat(this.players, this.alienChasers, this.bullets);
  }

  draw(ctx) {
    //background
    let background = new Image();
    background.src = "https://ze-robot.com/dl/mi/minimalist-cities-by-romain-trystram-zip-in-comments-14-2560%C3%971080.jpg";
    background.onload = function () {
      ctx.drawImage(background, 0, 0,2560,1080);
    }
    
  //  ctx.clearRect(0, 0, GameFile.DIM_X, GameFile.DIM_Y);
    // ctx.fillStyle = GameFile.BG_COLOR;
    // ctx.fillRect(0, 0, GameFile.DIM_X, GameFile.DIM_Y);
    //floor
    ctx.strokeStyle = "gray";
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(0, 500);
    ctx.stroke();
    //platform
    // ctx.strokeStyle = "blue";
    // ctx.lineWidth = 4;
    // ctx.beginPath();
    // ctx.moveTo(400, 400);
    // ctx.lineTo(500, 400);
    // ctx.stroke();
    //health 
 
    ///score
    ctx.font = "30px Comic Sans MS";
    ctx.fillStyle = "red";
    ctx.textAlign = "center";
    ctx.fillText(`Score: ${this.players[0].score}`, 920, 50);

    ctx.font = "30px Comic Sans MS";
    ctx.fillStyle = "red";
    ctx.textAlign = "center";
    ctx.fillText(`Health: ${this.players[0].health}`, 80, 50);
    this.allObjects().forEach((object) => {
      object.draw(ctx);
    });

    if (this.players[0].health <= 0){
      ctx.clearRect(0, 0, GameFile.DIM_X, GameFile.DIM_Y);
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, GameFile.DIM_X, GameFile.DIM_Y);
      ctx.fillStyle = "red";
      ctx.textAlign = "center";
      ctx.fillText(`Game Over`, 500, 300);
      ctx.fillStyle = "red";
      ctx.textAlign = "center";
      ctx.fillText(`Score: ${this.players[0].score}`, 500, 330);
      this.alienChasers.forEach(alien => {
        alien.remove();
      });
    }
  }

  randomX() {
    return GameFile.DIM_X * Math.random();
  }

  randomY() {
    return GameFile.DIM_Y * Math.random();
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
      // this.addPlayer();
    } else {
      throw new Error("unknown type of object");
    }
  }
  step(delta) {
    this.moveObjects(delta);
    this.checkCollisions();
    this.addAlienChasers();
  }


}
GameFile.BG_COLOR = "lightgray";
GameFile.DIM_X = 1000;
GameFile.DIM_Y = 600;
GameFile.FPS = 32;
GameFile.NUM_ALIENCHASERS = 0;

export default GameFile;