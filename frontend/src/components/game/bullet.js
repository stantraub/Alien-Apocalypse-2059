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
    this.game = options.game
    
    
  }
  move() {
    this.x += this.xVel
    if ( this.x < 0 || this.x > 1000){
      this.remove();
    }
  }
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