import MovingObject from "./moving_object";
import AlienChaser from "./alien_chaser";
import { userInfo } from "os";



class Bullet extends MovingObject {
  constructor(options) {
    super(options);
    this.height = Bullet.RADIUS;
    this.width = Bullet.RADIUS;
    this.color = "red";
    this.x = options.x;
    this.y = options.y;
    this.xVel = options.xVel;
    this.yVel = 0;
    this.game = options.game;
    this.mirror = options.mirror;
    this.Bullet = new Image();
    this.Bullet.src = "energy_effect_base.png";
    
    
  }
  move() {
    this.x += this.xVel
    if ( this.x < 0 || this.x > 1000){
      this.remove();
    }
  }

  draw(ctx) {
    // ctx.fillStyle = this.color;
    // ctx.beginPath();
    // ctx.fillStyle = "blue";
    // ctx.rect(this.x, this.y, this.width, this.height);
    // ctx.fill();
    // let player = new Image();
    if (this.mirror) {
      this.Bullet.src = "energy_effect_base.png";
      ctx.drawImage(this.Bullet, 0, 100, 30, 25, this.x, this.y - 40, 50, 50);
    } else {
      this.Bullet.src = "reverse_bullet.png";
      ctx.drawImage(this.Bullet, 450, 100, 30, 25, this.x, this.y - 30, 50, 50);
    }
  
  };
  collideWith(otherObject) {
    if (otherObject instanceof AlienChaser) {
      otherObject.health -= 1
      this.remove();
      if (otherObject.health <= 0){
        this.game.players[0].score += 1;
        otherObject.remove();
      }
 
      return true;
    }
    // else if (otherObject instanceof Bullet) {
    //   this.remove();
    //   otherObject.remove();
    //   return true;
    // }

    return false;
  }
}

Bullet.RADIUS = 10;
Bullet.SPEED = 8;

export default Bullet;